import { fireEvent, render, screen } from '@testing-library/react'
import { AddContentButton } from './AddContentButton'


const mockContentButtonProps = {
    setPanelOpen: jest.fn(),
    isOpen: false
}

describe('addContentButton', () => {
    it('should render addContentButton', () => {
        render(<AddContentButton setPanelOpen={mockContentButtonProps.setPanelOpen} isOpen={mockContentButtonProps.isOpen}/>)
        const button = screen.getByRole('button')
        expect(button).toBeVisible()
    })

    it('should call setPanelOpen onClick', () => {
        const { getByText } = render(<AddContentButton setPanelOpen={mockContentButtonProps.setPanelOpen} isOpen={mockContentButtonProps.isOpen}/>)
        
        const button = getByText('Add Contents')

        fireEvent.click(button)
        expect(mockContentButtonProps.setPanelOpen).toHaveBeenCalled()
    })
})