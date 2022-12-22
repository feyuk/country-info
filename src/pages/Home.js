import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import CountryItem from '../components/CountryItem'

export default function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    const res = await fetch(`https://restcountries.com/v2/all`)
    const data = await res.json()
    await setCountries(data)
  }

  const searchCountry = async (term) => {
    if (term === '') {
      await getCountries()
      return
    }

    const res = await fetch(`https://restcountries.com/v2/name/${term}`)
    const data = await res.json()

    if (data.status === 404) return

    await setCountries(data)
  }

  const filterByRegion = async (region) => {
    if (region === '') return
    const res = await fetch(`https://restcountries.com/v2/region/${region}`)
    const data = await res.json()
    await setCountries(data)
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white">
      <Header />

      <div className="container mx-auto pb-24">
        <div className="flex flex-col sm:flex-row mb-8 sm:mb-12 px-4">
          <div className="relative flex w-full sm:w-1/2 md:w-1/3 flex-wrap items-stretch mb-10 sm:mb-0 sm:mr-auto">
            <span className="absolute h-full flex items-center pl-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 512 512" fill="currentColor"><path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"/></svg>
            </span>
            <label className="sr-only" for="search">Search for a country</label>
            <input type="search" id="search" placeholder="Search for a country..." className="text-sm pl-18 p-3 sm:py-4 shadow-md rounded-md w-full border-0 dark:bg-gray-700 dark:placeholder-gray-300 dark:placeholder-opacity-100" onChange={(term) => searchCountry(term.target.value)} />
          </div>

          <label for="filter" className="sr-only">Filter by Region</label>
          <select name="filter" id="filter" className="form-select w-48 py-3 px-4 sm:py-4 sm:px-6 shadow-md rounded-md border-0 dark:bg-gray-700" onChange={(val) => filterByRegion(val.target.value)}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 lg:gap-18 px-14 sm:px-4">
          {countries.map((country, index) => {
            return (
              <Link to={'/country'} state={{ country }} key={index}>
                <CountryItem
                  title={country.name}
                  image_url={country.flag}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
