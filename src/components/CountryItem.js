import React from 'react'

export default function CountryItem({title, image_url, population, region, capital}) {
  return (
    <div className="container h-full rounded-md shadow-md bg-white dark:bg-gray-700 dark:text-white">
      <div className="aspect-w-13 aspect-h-8">
        <img src={image_url} alt="" className="w-full object-cover rounded-tl-md rounded-tr-md" />
      </div>

      <div className="px-6 pt-7 pb-10">
        <h2 className="font-bold text-lg mb-4">{title}</h2>

        <ul className="text-sm space-y-2">
          <li><strong>Population:</strong> <span>{population}</span></li>
          <li><strong>Region:</strong> <span>{region}</span></li>
          <li><strong>Capital:</strong> <span>{capital}</span></li>
        </ul>
      </div>
    </div>
  )
}
