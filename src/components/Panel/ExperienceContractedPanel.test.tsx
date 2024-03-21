import { fireEvent, render, screen } from "@testing-library/react"
import { ExperienceContractedPanel } from "./ExperienceContractedPanel"
import { IWebsiteContents, websitePageType } from "@/constants/websiteContents"
import * as Framer from 'framer-motion'
import { AnimationScope } from "framer-motion"

beforeEach(() => {
    const mockScope = {
        current: Element,
        animations: []
    } as unknown as AnimationScope
    const mockAnimate = jest.fn()
    jest.spyOn(Framer, 'useAnimate').mockReturnValue([mockScope, mockAnimate])
})

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

    it('should call setPanelExpanded if clicked', async () => {
        render(<ExperienceContractedPanel 
            {...mockExperienceContractPanelProps}/>)
        const panel = await screen.getByTestId('experienceContractedPanel')
        await fireEvent.click(panel)
        expect(mockExperienceContractPanelProps.setPanelExpanded).toHaveBeenCalledTimes(1)
    })
})