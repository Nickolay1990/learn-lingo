import { useState } from "react";
import LoginButton from "../LoginButton/LoginButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import css from "./AuthSection.module.css";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import { useUserStore } from "../../stores/user.store";
import LogOutButton from "../LogoutButton/LogoutButton";

const AuthSection = () => {
  const [isOpenModalRegister, setIsOpneModalRegister] =
    useState<boolean>(false);
  const [isOpenModalLogin, setIsOpneModalLogin] = useState<boolean>(false);
  const user = useUserStore((state) => state.user);

  const handleToggleModalRegister = () => {
    setIsOpneModalRegister(!isOpenModalRegister);
  };

  const handleToggleModalLogin = () => {
    setIsOpneModalLogin(!isOpenModalLogin);
  };

  return (
    <div className={css.wrapper}>
      {!user ? (
        <>
          <LoginButton onOpen={handleToggleModalLogin} />
          <RegisterButton onOpen={handleToggleModalRegister} />
        </>
      ) : (
        <>
          <p className={css.text}>{user.name}</p>
          <LogOutButton />
        </>
      )}
      {isOpenModalRegister && (
        <Modal onClose={handleToggleModalRegister}>
          <RegisterForm onClose={handleToggleModalRegister} />
        </Modal>
      )}
      {isOpenModalLogin && (
        <Modal onClose={handleToggleModalLogin}>
          <LoginForm onClose={handleToggleModalLogin} />
        </Modal>
      )}
    </div>
  );
};

export default AuthSection;
