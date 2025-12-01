import type { Review } from "../../types/teachers";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import css from "./ReviewsBlock.module.css";

interface ReviewsBlockProps {
  reviews: Review[];
}

const ReviewsBlock = ({ reviews }: ReviewsBlockProps) => {
  return (
    <ul className={css.list}>
      {reviews.map((reviwe) => {
        return <ReviewsItem review={reviwe} key={`${reviwe.comment}`} />;
      })}
    </ul>
  );
};

export default ReviewsBlock;
