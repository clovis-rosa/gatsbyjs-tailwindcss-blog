import React from "react"

export default function Hero() {
  return (
    <section className="overflow-hidden max-w-screen-lg m-auto p-4 lg:p-8">
      <div className="container mx-auto flex flex-col items-center px-4 pt-16 pb-6 text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Quisquam
          <span className="text-purple-400"> laborum</span>
          <br />
          delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>

        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="bg-gray-100 w-2/3 sm:w-80 p-3 rounded-l-lg"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-purple-400 dark:bg-purple-400 dark:text-gray-900"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
