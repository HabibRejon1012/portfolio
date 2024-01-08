import { useEffect, useState } from "react";

type DarkModeOptions = "light" | "dark"
export const useDarkMode = () => {
    const [currentMode, setCurrentMode] = useState<DarkModeOptions | null>(null)
  useEffect(() => {
    validateDarkMode();
  }, []);

  const validateDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        updateMode("dark")
    } else {
        updateMode("light")
    }
    console.log("llegue")
  };

  const updateMode = (mode: "light" | "dark") => {
    document.body.setAttribute("data-color-mode", mode);
      localStorage.theme = mode;
      setCurrentMode(mode)
  }

  const toggleMode = () => {
    if (currentMode !== "dark") {
        updateMode("dark")
    } else {
        updateMode("light")
    }
  };

  return {
    toggleMode,
    currentMode
  };
};
