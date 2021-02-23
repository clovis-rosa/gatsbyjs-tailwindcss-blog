import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NotFound from "../../content/assets/svg/notfound.svg"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <section className="min-h-full flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <div className="container flex flex-col items-center justify-center max-w-md px-5 mx-auto my-8 space-y-8 text-center">
              <NotFound />
            </div>
            <p className="text-2xl font-semibold md:dark:text-3xl text-gray-800 dark:text-gray-400">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-purple-400 hover:bg-purple-500 text-gray-800 dark:bg-purple-400 dark:hover:bg-purple-500 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
