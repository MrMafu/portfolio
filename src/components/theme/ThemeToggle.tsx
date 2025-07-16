"use client";

import { useTheme } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer fixed bottom-4 left-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10 bg-[var(--foreground)] text-[var(--background)] transition-all duration-200"
            aria-label="Toggle theme">
            {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} size="lg" />
            ) : (
                <FontAwesomeIcon icon={faSun} size="lg" />
            )}
        </button>
    );
}