
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const config = require('./shared/config');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const filename = createFilePath({ node, getNode, basePath: `posts` });

        // get the date and title from the file name
        const [, date, title] = filename.match(
            /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
        );

        // create a new slug concatenating everything
        const slug = `/${date.split('-').join('/')}/${title}/`;

        createNodeField({ node, name: `slug`, value: slug })

        // save the date for later use
        createNodeField({ node, name: `date`, value: date })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const post = result.data.allMarkdownRemark.edges;

    post.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug
            }
        })
    });

    // Create blog-list pages
    const posts = post
    const postsPerPage = config.PAGINATION_PER_PAGE;
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: `/blog/${i + 1}`,
            component: path.resolve("./src/templates/blog-list.tsx"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
}
