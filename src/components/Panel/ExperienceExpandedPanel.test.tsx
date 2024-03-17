import { fireEvent, render, screen } from "@testing-library/react"
import { ExperienceExpandedPanel } from "./ExperienceExpandedPanel"

const mockExperienceExpandedPanelProps = {
    isExpanded: false,
    setPanelExpanded: jest.fn()
}

describe('ExperienceExpandedPanel', () => {
    it('should render ExperienceExpandedPanel', () => {
        render(<ExperienceExpandedPanel {...mockExperienceExpandedPanelProps}/>)
        const panel = screen.getByTestId('experienceExpandedPanel')
        expect(panel).toBeVisible()
    })

    it('should call setPanelExpanded if clicked', () => {
        render(<ExperienceExpandedPanel {...mockExperienceExpandedPanelProps}/>)
        const closeButton = screen.getByRole('button')
        fireEvent.click(closeButton)
        expect(mockExperienceExpandedPanelProps.setPanelExpanded).toHaveBeenCalledTimes(1)
    })
})