import { render } from '@testing-library/react'
import { DeleteButton } from "./DeleteButton"
import { useRouter } from 'next/navigation'

const mockDeleteButtonProps = {
    id: '1234',
    isAdmin: false
}

jest.mock('next/navigation',() => ({
    useRouter: jest.fn().mockReturnValue({ query: {}})
  }))




describe('deleteButton', () => {
    it('should render deleteButton', () => {
        
        const { getByTestId } = render(<DeleteButton id={mockDeleteButtonProps.id} isAdmin={mockDeleteButtonProps.isAdmin}/>)
        const button = getByTestId("DeleteButton-1234")
        expect(button).toBeInTheDocument()
    })
})