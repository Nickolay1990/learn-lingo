import { useThemeStore } from "../../stores/theme.store";
import css from "./ThemeButton.module.css";

const ThemeButton = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <button className={css.buttonTheme} onClick={toggleTheme}>
      {theme}
    </button>
  );
};
export default ThemeButton;
