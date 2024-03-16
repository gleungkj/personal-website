import { render, screen } from "@testing-library/react";
import { ExperiencePanel } from "./ExperiencePanel";
import * as contractedPanel from "@/components/Panel/ExperienceContractedPanel";
import * as expandedPanel from "@/components/Panel/ExperienceExpandedPanel";
import React from 'react'

jest.mock('./ExperienceContractedPanel', () => {
    return {
      __esModule: true,
      ...jest.requireActual('./ExperienceContractedPanel')
    };
  });

jest.mock('./ExperienceExpandedPanel', () => {
return {
    __esModule: true,
    ...jest.requireActual('./ExperienceExpandedPanel')
};
});

describe('ExperiencePanel', () => {
    it('should contain ExperienceContractedPanel by default', () => {

        const spy = jest.spyOn(contractedPanel, 'ExperienceContractedPanel')
        render(<ExperiencePanel />)
        const panel = screen.getByTestId('ExperiencePanel')
        expect(panel).toBeVisible()
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should NOT render ExperienceExpandedPanel if isExpanded is false', () => {

        const mockSetIsExpanded = jest.fn()
        const spy = jest.spyOn(expandedPanel, 'ExperienceExpandedPanel')
        jest.spyOn(React, 'useState').mockReturnValue([false, mockSetIsExpanded])
        render(<ExperiencePanel />)
        const panel = screen.getByTestId('ExperiencePanel')
        expect(panel).toBeVisible()
        expect(spy).toHaveBeenCalledTimes(0)
    })

    it('should render ExperienceExpandedPanel if isExpanded is true', () => {
        const mockSetIsExpanded = jest.fn()
        const spy = jest.spyOn(expandedPanel, 'ExperienceExpandedPanel')
        jest.spyOn(React, 'useState').mockReturnValue([true, mockSetIsExpanded])
        render(<ExperiencePanel />)
        const panel = screen.getByTestId('ExperiencePanel')
        expect(panel).toBeVisible()
        expect(spy).toHaveBeenCalledTimes(1)
    })
})