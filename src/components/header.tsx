import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteDescription }: any) => (
    <header className="site-header">
        <h1 style={{ margin: 0 }}>
            <Link to="/">{siteTitle}</Link>
        </h1>

        <p>{siteDescription}</p>
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
