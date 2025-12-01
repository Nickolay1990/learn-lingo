import { useState } from "react";
import { useUserStore } from "../../stores/user.store";
import css from "./StatusBlock.module.css";
import Cookies from "js-cookie";
import Modal from "../Modal/Modal";

interface StatusBlockProps {
  name: string;
  surname: string;
  lessons: number;
  rating: number;
  price: number;
  id: string;
}

const StatusBlock = ({
  name,
  surname,
  lessons,
  rating,
  price,
  id,
}: StatusBlockProps) => {
  const user = useUserStore((state) => state.user);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState<string[]>(() => {
    const storage = localStorage.getItem("favorites");
    return storage ? JSON.parse(storage) : [];
  });

  const handleChangeFavorite = () => {
    const token = Cookies.get("accessToken");

    if (!user || !token) {
      setIsOpenModal(true);
      return;
    }

    let newFavoriteList: string[] = [];
    const favoriteList = localStorage.getItem("favorites");

    if (!favoriteList) {
      newFavoriteList = [id];
    } else {
      const parsedList: string[] = JSON.parse(favoriteList);

      if (!parsedList.includes(id)) {
        newFavoriteList = [...parsedList, id];
      } else {
        newFavoriteList = parsedList.filter((item) => item !== id);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(newFavoriteList));
    setFavoriteList(newFavoriteList);
  };

  return (
    <div className={css.infoBlock}>
      <div className={css.stringTop}>
        <div>
          <p className={css.lang}>Languages</p>
          <p className={css.name}>{`${name} ${surname}`}</p>
        </div>
        <div className={css.statusString}>
          <div className={`${css.stringTopRight} ${css.separator}`}>
            <svg className={css.bookIcon}>
              <use href="/symbol-defs.svg#icon-book-open"></use>
            </svg>
            <p className={css.topString}>Lessons online</p>
          </div>
          <p className={`${css.topString} ${css.separator}`}>
            Lessons done: {lessons}
          </p>
          <div className={css.ratingString}>
            <svg className={css.starIcon}>
              <use href="/symbol-defs.svg#icon-star"></use>
            </svg>
            <p className={`${css.topString} ${css.separator}`}>
              Rating: {rating}
            </p>
          </div>
          <div className={css.lastString}>
            <p className={css.topString}>
              Price / 1 hour: <span className={css.green}>{price}$</span>
            </p>
            <button onClick={handleChangeFavorite}>
              <svg
                className={`${css.heart} ${
                  user && favoriteList.includes(id) && css.clickedHeart
                }`}
              >
                <use href="/symbol-defs.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <div className={css.modalInner}>
            <h2 className={css.title}>Access Denied</h2>
            <p className={css.text}>
              This feature is available only to authorized users. Please log in
              to your account to continue.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default StatusBlock;
