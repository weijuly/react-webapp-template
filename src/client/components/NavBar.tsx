import { connect } from 'react-redux'

const React = require('react')
const PropTypes = require('prop-types')

const NavBar = ({ page }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="#">{page.title}</a>
        </nav>
    )
}

NavBar.propTypes = {
    page: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ page: state.page })

export default connect(mapStateToProps)(NavBar)
