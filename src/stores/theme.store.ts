import { create } from "zustand";

type Theme = "yellow" | "green" | "blue" | "pink" | "orange";

const themes: Theme[] = ["yellow", "green", "blue", "pink", "orange"];

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (localStorage.getItem("theme") as Theme) || "yellow",

  toggleTheme: () =>
    set((state) => {
      const currentIndex = themes.indexOf(state.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      const newTheme = themes[nextIndex];

      localStorage.setItem("theme", newTheme);

      return { theme: newTheme };
    }),

  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
