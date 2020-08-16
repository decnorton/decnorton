import { graphql, Link } from "gatsby"
import React from "react"
import { BlogListCard } from "../components/blog-list-card"

import Layout from "../components/layout"
import { SEO } from "../components/seo"

export default class BlogList extends React.Component<any> {
    render() {
        let { data } = this.props
        let { currentPage, numPages } = this.props.pageContext
        const posts = data.allMarkdownRemark.edges
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        console.log(currentPage)
        const prevPage = `/blog/${(currentPage - 1).toString()}`
        const nextPage = `/blog/${(currentPage + 1).toString()}`

        return (
            <Layout>
                <SEO title="Home" />

                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

                {posts.map(({ node }: any) => (
                    <BlogListCard
                        key={node.id}
                        post={{
                            slug: node.fields.slug,
                            title: node.frontmatter.title,
                            date: node.frontmatter.date,
                            excerpt: node.excerpt,
                        }}
                    ></BlogListCard>
                ))}

                <div className="pagination">
                    {!isFirst && (
                        <Link to={prevPage} rel="prev" className="pagination-previous">
                            &larr; Previous
                        </Link>
                    )}

                    {Array.from({ length: numPages }, (_, i) => (
                        <Link
                            key={`pagination-number${i + 1}`}
                            to={`/blog/${i + 1}`}
                            className="pagination-page"
                            activeClassName="pagination-page-active"
                        >
                            {i + 1}
                        </Link>
                    ))}

                    {!isLast && (
                        <Link to={nextPage} rel="next" className="pagination-previous">
                            Next &rarr;
                        </Link>
                    )}
                </div>
            </Layout>
        )
    }
}

export const query = graphql`
    query blogListQuery($skip: Int = 0, $limit: Int = 6) {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
            totalCount
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`
