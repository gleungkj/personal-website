import { fireEvent, render, screen } from "@testing-library/react"
import { ExperienceContractedPanel } from "./ExperienceContractedPanel"
import { IWebsiteContents, websitePageType } from "@/constants/websiteContents"

const mockExperienceContractedPanelData: IWebsiteContents = {
    id: '1234',
    page: websitePageType.home,
    field: '',
    content: ''
}

const mockExperienceContractPanelProps = {
    data: mockExperienceContractedPanelData,
    isExpanded: false,
    setPanelExpanded: jest.fn()
}

describe('ExperienceContractedPanel', () => {

    it('should render ExperienceContractedPanel', () => {
        render(<ExperienceContractedPanel {...mockExperienceContractPanelProps}/>)
        const panel = screen.getByTestId('experienceContractedPanel')
        expect(panel).toBeVisible()
    })

    it('should call setPanelExpanded if clicked', () => {
        render(<ExperienceContractedPanel {...mockExperienceContractPanelProps}/>)
        const panel = screen.getByTestId('experienceContractedPanel')
        fireEvent.click(panel)
        expect(mockExperienceContractPanelProps.setPanelExpanded).toHaveBeenCalledTimes(1)
    })
})