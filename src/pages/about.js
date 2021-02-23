import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function About({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About us" />

      <section className="dark:text-gray-100 py-16">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 dark:text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 dark:text-4xl font-bold leading-none text-center sm:dark:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Bio />
      </div>
    </Layout>
  )
}
