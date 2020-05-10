import { render, screen, waitFor } from '@testing-library/react'
import PageContent from '../../../src/client/components/PageContent'
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime'

const mockStore = configureStore([])

const state = {
    page: {
        title: 'sample-title'
    }
}

describe('PageContent', () => {

    let store

    beforeEach(() => {
        store = mockStore(state)
    })

    it('should render PageContent with page title', async () => {
        render(
            <Provider store={store}>
                <PageContent />
            </Provider>
        )
        await waitFor(() => {
            const header = screen.getByText(state.page.title)
            expect(header).toHaveTextContent(`welcome to ${state.page.title}`)
        })
    })
})
