import css from "./RegisterButton.module.css";

interface RegisterButtonProps {
  onOpen: () => void;
}

const RegisterButton = ({ onOpen }: RegisterButtonProps) => {
  return (
    <button className={css.btn} onClick={onOpen}>
      Registration
    </button>
  );
};

export default RegisterButton;
