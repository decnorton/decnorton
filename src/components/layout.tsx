/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }: any) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />

            <div className="site-wrapper">
                <main>{children}</main>

                <footer className="site-footer">
                    © {new Date().getFullYear()} {data.site.siteMetadata.title}
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
