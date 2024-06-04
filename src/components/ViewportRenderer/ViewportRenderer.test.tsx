import { render, screen } from '@testing-library/react'
import { ViewportRenderer } from './ViewportRenderer'
import * as ReactIntersectionObserverMock from 'react-intersection-observer/test-utils'

const MockChildComponent = (): JSX.Element => {
    return <div data-testid="mockChildComponent">mockChildComponent</div>
}

describe('ViewportRenderer', () => {
    it('should render ViewportRenderer but no children by default', () => {
        render(
            <ViewportRenderer>
                <MockChildComponent />
            </ViewportRenderer>
        )
        ReactIntersectionObserverMock.mockAllIsIntersecting(false)
        const panel = screen.getByTestId('ViewportRenderer')
        expect(panel).toBeVisible()
        expect(
            screen.queryByTestId('mockChildComponent')
        ).not.toBeInTheDocument()
    })
    it('should render children', () => {
        render(
            <ViewportRenderer>
                <MockChildComponent />
            </ViewportRenderer>
        )
        ReactIntersectionObserverMock.mockAllIsIntersecting(true)
        const panel = screen.getByTestId('ViewportRenderer')
        expect(panel).toBeVisible()
        expect(screen.queryByTestId('mockChildComponent')).toBeInTheDocument()
    })
})
