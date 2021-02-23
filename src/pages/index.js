import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <Hero />
      <ul className="list-none overflow-hidden rounded-lg max-w-screen-lg m-auto p-4 lg:p-8 dark:text-gray-100">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article itemScope itemType="http://schema.org/Article">
                <Link
                  to={post.fields.slug}
                  itemProp="url"
                  className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 
                  hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
                >
                  <h3
                    itemProp="headline"
                    className="text-gray-900 dark:text-gray-200 leading-none mt-0 mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"
                  >
                    {title}
                  </h3>
                  <time
                    dateTime=""
                    className="p-small font-medium row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-300 dark:text-gray-400"
                  >
                    {post.frontmatter.date}
                  </time>

                  <p
                    className="text-base leading-normal clamp-2 mt-1 ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
