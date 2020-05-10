import { render, screen, waitFor } from '@testing-library/react'
import PageLayout from '../../../src/client/components/PageLayout'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime'

describe('PageLayout', () => {
    it('should display content', async () => {
        render(<PageLayout />)
        //await waitFor(() => screen.getByText('this is nuts'))
        //expect(screen.getByText('this is nuts')).toHaveTextContent('this is nuts')
    })
})
