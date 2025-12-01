import type { Teacher } from "../../types/teachers";
import TeachersListItem from "../TeachersListItem/TeachersListItem";
import css from "./TeachersList.module.css";

interface TeachersListProps {
  teachers: Teacher[];
}

const TeachersList = ({ teachers }: TeachersListProps) => {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => {
        return <TeachersListItem teacher={teacher} key={teacher.id} />;
      })}
    </ul>
  );
};

export default TeachersList;
