import type { Review } from "../../types/teachers";
import css from "./ReviewsItem.module.css";

interface ReviewsItemProps {
  review: Review;
}

const ReviewsItem = ({ review }: ReviewsItemProps) => {
  return (
    <li>
      <div className={css.topString}>
        <div className={css.avatarWrapper}>
          <img src="/empty.jpg" alt="avatar" className={css.avatar} />
        </div>
        <div>
          <p className={css.reviewerName}>{review.reviewer_name}</p>
          <div className={css.ratingWrapper}>
            <svg className={css.starIcon}>
              <use href="/symbol-defs.svg#icon-star"></use>
            </svg>
            <p>{review.reviewer_rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </li>
  );
};

export default ReviewsItem;
