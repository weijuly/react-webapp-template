import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const React = require('react')
const PropTypes = require('prop-types')

const PageContent = ({ page }) => {
    return (
        <div className="container">
            <h1><small>welcome to </small>{page.title}</h1>
            <Button variant='primary'>button</Button>
        </div>
    )
}

PageContent.propTypes = {
    page: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ page: state.page })

export default connect(mapStateToProps)(PageContent)
