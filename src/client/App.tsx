import PageLayout from './components/PageLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer'

const ReactDOM = require('react-dom')
const React = require('react')

const store = createStore(reducer)

ReactDOM.render(
    (<Provider store={store}>
        <PageLayout />
    </Provider>),
    document.getElementById('root'))
