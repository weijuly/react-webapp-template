import { render, screen, waitFor } from '@testing-library/react'
import NavBar from '../../../src/client/components/NavBar'
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

describe('NavBar', () => {

    let store

    beforeEach(() => {
        store = mockStore(state)
    })


    it('should render NavBar with page title', async () => {
        render(
            <Provider store={store}>
                <NavBar />
            </Provider>
        )
        await waitFor(() => {
            expect(screen.getByText(state.page.title)).toHaveTextContent(state.page.title)
        })
    })
})
