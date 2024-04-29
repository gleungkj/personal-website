import { IWebsiteContents, websitePageType } from '@/constants/websiteContents'
import { render, screen } from '@testing-library/react'
import { BusinessNamePanel } from './BusinessNamePanel'
import { AnimationScope } from 'framer-motion'
import * as Framer from 'framer-motion'
import React from 'react'

beforeEach(() => {
    const mockScope = {
        current: Element,
        animations: [],
    } as unknown as AnimationScope
    const mockAnimate = jest.fn()
    jest.spyOn(Framer, 'useAnimate').mockReturnValue([mockScope, mockAnimate])

    jest.spyOn(React, 'useEffect').mockImplementation(() => {
        return jest.fn()
    })
})

const mockBusinessNamePanelData: IWebsiteContents = {
    id: '1234',
    page: websitePageType.home,
    field: 'Title',
    content: 'Occupation',
}

describe('BusinessNamePanel', () => {
    it('should render BusinessNamePanel', () => {
        render(<BusinessNamePanel data={mockBusinessNamePanelData} />)
        const panel = screen.getByTestId('businessNamePanel')
        expect(panel).toBeVisible()
    })

    it(`should render ${mockBusinessNamePanelData.field} and ${mockBusinessNamePanelData.content} onto panel`, () => {
        render(<BusinessNamePanel data={mockBusinessNamePanelData} />)
        const field = screen.getByText(mockBusinessNamePanelData.field)
        expect(field).toBeVisible()
        const content = screen.getByText(mockBusinessNamePanelData.content)
        expect(content).toBeVisible()
    })
})
