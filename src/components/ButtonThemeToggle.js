import React from "react"
import { ThemeContext } from "../context/themeContext"

export default function ButtonThemeToggle() {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isLight() {
    return theme === "light"
  }

  const ToggleTheme = _ => {
    setTheme(isLight() ? "dark" : "light")
  }

  return (
    <button
      className="h-10 w-10 flex justify-center items-center focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300"
      aria-label={isLight() ? "Activate Dark Mode" : "Activate Light Mode"}
      title={isLight() ? "Activate Dark Mode" : "Activate Light Mode"}
      onClick={ToggleTheme}
      type="button"
      id="switchTheme"
    >
      {console.log(theme, `============> isLight`)}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="h-4 w-4 text-gray-800 dark:text-gray-200"
      >
        {theme === "light" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </button>
  )
}
