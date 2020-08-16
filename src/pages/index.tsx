import { graphql, Link } from 'gatsby'
import React from 'react'
import { BlogListCard } from '../components/blog-list-card';

import Layout from '../components/layout'
import { SEO } from '../components/seo'

function IndexPage({ data }: any) {
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Home"/>

            {posts.map(({ node }: any) => (
                <BlogListCard key={node.id}
                              post={{
                                  slug: node.fields.slug,
                                  title: node.frontmatter.title,
                                  date: node.frontmatter.date,
                                  excerpt: node.excerpt,
                              }}>

                </BlogListCard>
            ))}

            <div className="pagination">
                <Link className="index-read-more" to='/blog/2' rel="prev">
                    More posts
                </Link>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
            limit: 6
        ) {
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

export default IndexPage
