import { fireEvent, render, screen } from "@testing-library/react"
import { ExperienceExpandedPanel } from "./ExperienceExpandedPanel"
import { IWebsiteContents, websitePageType } from "@/constants/websiteContents"
import * as Framer from 'framer-motion'
import { AnimationScope } from "framer-motion"
import React from "react"

beforeEach(() => {
    const mockScope = {
        current: Element,
        animations: []
    } as unknown as AnimationScope
    const mockAnimate = jest.fn()
    jest.spyOn(Framer, 'useAnimate').mockReturnValue([mockScope, mockAnimate])

    jest.spyOn(React, 'useEffect').mockImplementation(() => {
        return jest.fn()
    })
})

const mockExperienceExpandedPanelData: IWebsiteContents = {
    id: '1234',
    page: websitePageType.home,
    field: '',
    content: ''
}

const mockExperienceExpandedPanelProps = {
    data: mockExperienceExpandedPanelData,
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