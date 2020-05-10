import { render } from '@testing-library/react'
import PageLayout from '../../../src/client/components/PageLayout'
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime'

const mockStore = configureStore([])

describe('PageLayout', () => {

    let store

    beforeEach(() => {
        store = mockStore({
            page: {
                title: 'template-project'
            }
        })
    })

    it('should render PageLayout properly', async () => {
        render(
            <Provider store={store}>
                <PageLayout />
            </Provider>
        )
    })
})
