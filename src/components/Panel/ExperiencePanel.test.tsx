import { render, screen } from "@testing-library/react";
import { ExperiencePanel } from "./ExperiencePanel";
import * as contractedPanel from "@/components/Panel/ExperienceContractedPanel";
import * as expandedPanel from "@/components/Panel/ExperienceExpandedPanel/ExperienceExpandedPanel";
import React from 'react'
import { IWebsiteContents, websitePageType } from "@/constants/websiteContents";

jest.mock('./ExperienceContractedPanel', () => {
    return {
      __esModule: true,
      ...jest.requireActual('./ExperienceContractedPanel')
    };
  });

jest.mock('../Panel/ExperienceExpandedPanel/ExperienceExpandedPanel', () => {
return {
    __esModule: true,
    ...jest.requireActual('../Panel/ExperienceExpandedPanel/ExperienceExpandedPanel')
};
});

const mockExperiencePanelData: IWebsiteContents = {
    id: '1234',
    page: websitePageType.home,
    field: '',
    content: ''
}

beforeEach(() => {
    jest.spyOn(contractedPanel, 'ExperienceContractedPanel').mockReturnValue(<div></div>)
    jest.spyOn(expandedPanel, 'ExperienceExpandedPanel').mockReturnValue(<div></div>)
})

afterEach(() => {
    jest.clearAllMocks()
})

describe('ExperiencePanel', () => {
    it('should contain ExperienceContractedPanel by default', async () => {

        const spy = jest.spyOn(contractedPanel, 'ExperienceContractedPanel')
        await render(<ExperiencePanel experienceData={mockExperiencePanelData}/>)
        const panel = await screen.getByTestId('ExperiencePanel')
        expect(panel).toBeVisible()
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should NOT render ExperienceExpandedPanel if isExpanded is false', () => {

        const mockSetIsExpanded = jest.fn()
        const spy = jest.spyOn(expandedPanel, 'ExperienceExpandedPanel')
        jest.spyOn(React, 'useState').mockReturnValue([false, mockSetIsExpanded])
        render(<ExperiencePanel experienceData={mockExperiencePanelData}/>)
        const panel = screen.getByTestId('ExperiencePanel')
        expect(panel).toBeVisible()
        expect(spy).toHaveBeenCalledTimes(0)
    })

    it('should render ExperienceExpandedPanel if isExpanded is true', () => {
        const mockSetIsExpanded = jest.fn()
        const spy = jest.spyOn(expandedPanel, 'ExperienceExpandedPanel')
        jest.spyOn(React, 'useState').mockReturnValue([true, mockSetIsExpanded])
        render(<ExperiencePanel experienceData={mockExperiencePanelData}/>)
        const panel = screen.getByTestId('ExperiencePanel')
        expect(panel).toBeVisible()
        expect(spy).toHaveBeenCalledTimes(1)
    })
})