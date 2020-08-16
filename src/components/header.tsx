import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }: any) => (
    <header className="site-header">
        <div className="site-wrapper">
            <div className="site-header-left">
                <h1 style={{ margin: 0 }}>
                    <Link to="/">{siteTitle}</Link>
                </h1>

                <p>{siteDescription}</p>
            </div>

            <div className="site-header-right">
                <Link to="/about" className="link">
                    About
                </Link>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
    siteDescription: ``,
}

export default Header
