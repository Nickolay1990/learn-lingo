import { onValue } from "firebase/database";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import css from "./FavoritePage.module.css";
import { starCountRef } from "../../firebase";
import { useEffect, useState } from "react";
import TeachersList from "../../components/TeachersList/TeachersList";
import type { Teacher } from "../../types/teachers";
import { PAGE_SIZE } from "../../constants/constants";

const FavoritePage = () => {
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [prices, setPrices] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState<number>(PAGE_SIZE);
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [favoriteList] = useState<string[]>(() => {
    const storage = localStorage.getItem("favorites");
    return storage ? JSON.parse(storage) : [];
  });

  useEffect(() => {
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const data: Teacher[] = snapshot.val() || [];
      const favoriteTeachers = data.filter((t) => favoriteList.includes(t.id));

      setAllTeachers(favoriteTeachers);
      setLanguages([...new Set(data.flatMap((t) => t.languages))]);
      setLevels([...new Set(data.flatMap((t) => t.levels))]);
      setPrices([...new Set(data.map((t) => `${t.price_per_hour} $`))]);
    });

    return () => unsubscribe();
  }, [favoriteList]);

  useEffect(() => {
    const filtered = allTeachers.filter((t) => {
      return (
        (selectedLanguage === "All" ||
          t.languages.includes(selectedLanguage)) &&
        (selectedLevel === "All" || t.levels.includes(selectedLevel)) &&
        (selectedPrice === "All" || `${t.price_per_hour} $` === selectedPrice)
      );
    });
    setFilteredTeachers(filtered);
    setPageSize(PAGE_SIZE);
  }, [allTeachers, selectedLanguage, selectedLevel, selectedPrice]);

  useEffect(() => {
    setTeachers(filteredTeachers.slice(0, pageSize));
  }, [filteredTeachers, pageSize]);

  const handleLoadMore = () => {
    setPageSize((prev) => prev + PAGE_SIZE);
  };

  return (
    <section className={css.pageSection}>
      <div className={css.formWrapper}>
        <CustomSelect
          placeholder="Languages"
          options={["All", ...languages]}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
        />
        <CustomSelect
          placeholder="Level of knowledge"
          options={["All", ...levels]}
          value={selectedLevel}
          onChange={setSelectedLevel}
        />
        <CustomSelect
          placeholder="Price"
          options={["All", ...prices]}
          value={selectedPrice}
          onChange={setSelectedPrice}
        />
      </div>

      <TeachersList teachers={teachers} />

      {filteredTeachers.length > teachers.length && (
        <button className={css.loadBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default FavoritePage;
