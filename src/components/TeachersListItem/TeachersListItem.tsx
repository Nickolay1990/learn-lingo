import { useState } from "react";
import type { Teacher } from "../../types/teachers";
import InfoBlock from "../InfoBlock/InfoBlock";
import StatusBlock from "../StatusBlock/StatusBlock";
import css from "./TeachersListItem.module.css";
import ReviewsBlock from "../ReviewsBlock/ReviewsBlock";
import LevelsList from "../LevelsList/LevelsList";
import Modal from "../Modal/Modal";
import BookForm from "../BookForm/BookForm";

interface TeachersListItemProps {
  teacher: Teacher;
}

const TeachersListItem = ({ teacher }: TeachersListItemProps) => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <li className={css.listItem} key={`${teacher.name} ${teacher.surname}`}>
      <div className={css.photoWrapper}>
        <img
          src={teacher.avatar_url}
          alt="Teacher avatar"
          className={css.avatar}
        />
      </div>
      <div className={css.infoBlock}>
        <StatusBlock
          name={teacher.name}
          surname={teacher.surname}
          lessons={teacher.lessons_done}
          price={teacher.price_per_hour}
          rating={teacher.rating}
          id={teacher.id}
        />
        <InfoBlock
          languages={teacher.languages}
          lesson_info={teacher.lesson_info}
          conditions={teacher.conditions}
        />
        {!isOpenMore ? (
          <button
            className={css.readMore}
            onClick={() => setIsOpenMore(!isOpenMore)}
          >
            Read more
          </button>
        ) : (
          <ReviewsBlock reviews={teacher.reviews} />
        )}

        <LevelsList
          levels={teacher.levels}
          name={`${teacher.name} ${teacher.surname}`}
        />
        {isOpenMore && (
          <button
            className={css.bookButton}
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            Book trial lesson
          </button>
        )}
      </div>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(!isOpenModal)}>
          <BookForm
            onClose={() => setIsOpenModal(!isOpenModal)}
            urlPhoto={teacher.avatar_url}
            name={`${teacher.name} ${teacher.surname}`}
          />
        </Modal>
      )}
    </li>
  );
};

export default TeachersListItem;
