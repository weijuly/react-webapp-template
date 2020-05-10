import NavBar from './NavBar'
import PageContent from './PageContent'
import { connect } from 'react-redux'

const React = require('react')

const PageLayout = () => {
    return (
        <div id="pageLayout">
            <NavBar />
            <PageContent />
        </div>
    )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(PageLayout)
