import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      setDarkMode(current => current = !current)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(current => current = !current)
    }
  }

  return (
    <header className="shadow-md py-6 bg-white dark:bg-gray-700 dark:text-white mb-6 sm:mb-12">
      <div className="container mx-auto flex items-center px-4">
        <h1 className="font-bold text-xl sm:text-2xl">
          <Link to="/">Where in the world?</Link>
        </h1>

        <div className="ml-auto font-medium">
          <button className="flex items-center" onClick={() => toggleDarkMode()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5" viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg><span className="font-semibold ml-2">Dark Mode</span>
          </button>
        </div>
      </div>
    </header>
  )
}
