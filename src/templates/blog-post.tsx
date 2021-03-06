import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { SEO } from '../components/seo';

export default function BlogPost({ data }: any) {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />

            <article className="article">
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
