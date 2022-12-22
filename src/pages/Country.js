import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'

export default function Country() {
  const location = useLocation()
  const state = location.state.country

  const renderBorders = () => {
    const stateBorders = state.borders
    if (!stateBorders) return
    
    const borders = stateBorders.map(border => {
      return (
        <li className="text-sm mb-2 mr-2 px-8 py-1 shadow-sm inline-block dark:bg-gray-700" key={border}>{border}</li>
      )
    })

    return borders
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-800 dark:text-white">
      <Header />

      <div className="container mx-auto pb-24">
        <div className="mt-10 mb-14 lg:my-20 px-4">
          <Link to="/" className="px-10 py-2 bg-white shadow-lg rounded-lg dark:bg-gray-700 dark:text-white">
            <span>&larr;</span><span className="ml-4">Back</span>
          </Link>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 px-4">
          <div className="image-flag">
            <img src={state.flag} alt="" className="block w-full" width="560" height="400" />
          </div>
          
          <div className="lg:pt-10 lg:pl-6">
            <h2 className="font-bold text-2xl lg:text-3xl mb-8">{state.name}</h2>

            <div className="grid md:grid-cols-2 gap-y-6 dark:text-gray-300">
              <ul className="mr-4">
                <li className="mb-2.5">
                  <strong className="font-semibold">Native Name:</strong> <span>{state.nativeName}</span>
                </li>
                <li className="mb-2.5">
                  <strong className="font-semibold">Population:</strong> <span>{state.population}</span>
                </li>
                <li className="mb-2.5">
                  <strong className="font-semibold">Region:</strong> <span>{state.region}</span>
                </li>
                <li className="mb-2.5">
                  <strong className="font-semibold">Sub Region:</strong> <span>{state.subRegion}</span>
                </li>
                <li className="mb-2.5">
                  <strong className="font-semibold">Capital:</strong> <span>{state.capital}</span>
                </li>
              </ul>

              <ul>
                <li className="mb-2.5">
                  <strong className="font-semibold">Top Level Domain:</strong> <span>{state.topLevelDomain[0]}</span>
                </li>
                <li className="mb-2.5">
                  <strong className="font-semibold">Currencies:</strong> <span className="text-sm comma"><span>{state.currencies.map((cur, index) => <span key={index}>{cur.name}</span>)}</span></span>
                </li>
                <li className="mb-2.5">
                  <strong className="font-semibold">Languages:</strong> <span className="text-sm comma">{state.languages.map((lang, index) => <span key={index}>{lang.name}</span>)}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-14 dark:text-gray-300">
              <p className="font-semibold whitespace-nowrap mb-3 sm:mr-4 lg:inline-block">
                Border Countries:
              </p>

              <ul className="lg:inline-block">
                {renderBorders()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
