import { fireEvent, render, screen } from '@testing-library/react'
import { EditButton } from './EditButton'

const mockEditButtonProps = {
    setPanelOpen: jest.fn(),
    isOpen: false
}

describe('EditButton', () => {
    it('should render EditButton', () => {
        render(<EditButton setPanelOpen={mockEditButtonProps.setPanelOpen} isOpen={mockEditButtonProps.isOpen} />)
        const button = screen.getByRole('button')
        expect(button).toBeVisible()
    })

    it('should call setPanelOpen onClick', () => {
        const { getByText } = render(<EditButton setPanelOpen={mockEditButtonProps.setPanelOpen} isOpen={mockEditButtonProps.isOpen}/>)
        
        const button = getByText('Edit Contents')

        fireEvent.click(button)
        expect(mockEditButtonProps.setPanelOpen).toHaveBeenCalled()
    })
})