import { fireEvent, render } from '@testing-library/react'
import { DeleteButton } from "./DeleteButton"
import * as deleteById from '../services/deleteById'

const mockDeleteButtonProps = {
    id: '1234',
    isAdmin: false,
    setIsWarned: jest.fn()
}

const mockDeleteButtonPropsAdmin = {...mockDeleteButtonProps}

jest.mock('next/navigation',() => ({
    useRouter: jest.fn().mockReturnValue({ query: {}})
  }))

jest.mock('../services/deleteById')

describe('deleteButton', () => {
    it('should render deleteButton', () => {
        
        const { getByText } = render(<DeleteButton id={mockDeleteButtonProps.id} isAdmin={mockDeleteButtonProps.isAdmin} setIsWarned={mockDeleteButtonProps.setIsWarned}/>)
        const button = getByText("Delete Contents")
        expect(button).toBeInTheDocument()
    })

    it('should be disabled if isAdmin is false', () => {
        const { getByText } = render(<DeleteButton id={mockDeleteButtonProps.id} isAdmin={mockDeleteButtonProps.isAdmin} setIsWarned={mockDeleteButtonProps.setIsWarned}/>)
        const button = getByText("Delete Contents")
        expect(button).toBeDisabled()
    })

    it('should be enabled if isAdmin is true', () => {
        
        mockDeleteButtonPropsAdmin.isAdmin = true

        const { getByText } = render(<DeleteButton id={mockDeleteButtonPropsAdmin.id} isAdmin={mockDeleteButtonPropsAdmin.isAdmin} setIsWarned={mockDeleteButtonProps.setIsWarned}/>)
        const button = getByText("Delete Contents")
        expect(button).toBeEnabled()

    })

    it('should call deleteEntryById onClick', () => {

        jest.spyOn(deleteById, 'deleteEntryById').mockImplementation(async () => {})

        mockDeleteButtonPropsAdmin.isAdmin = true

        const { getByText } = render(<DeleteButton id={mockDeleteButtonPropsAdmin.id} isAdmin={mockDeleteButtonPropsAdmin.isAdmin} setIsWarned={mockDeleteButtonProps.setIsWarned}/>)

        const button = getByText("Delete Contents")

        fireEvent.click(button)
        expect(deleteById.deleteEntryById).toHaveBeenCalled()
    })
    
})