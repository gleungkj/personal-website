import { websitePageType } from "@/constants/websiteContents";
import { fireEvent, render, screen } from '@testing-library/react'
import { AddContentPanel } from "./AddContentPanel";
import React from "react"

const mockAddContentPanelProps = {
    pageType: websitePageType,
    isAdmin: false
}

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))



describe('AddContentPanel', () => {
    it('should render AddContentPanel', () => {
        render(<AddContentPanel pageType={mockAddContentPanelProps.pageType.about} isAdmin={mockAddContentPanelProps.isAdmin}/>)
        const panel = screen.getByTestId('addContentPanel')
        expect(panel).toBeVisible()
    })
    it('should not have AddContentForm component if isAddContentPanel is false', () => {
        const result = render(<AddContentPanel pageType={mockAddContentPanelProps.pageType.about} isAdmin={mockAddContentPanelProps.isAdmin}/>)
        const addContentFormResult = result.container.querySelector('addContentForm')
        expect(addContentFormResult).toBe(null)
    })
    it('should open AddContentForm component if isAddContentPanel is true', () => {
        render(<AddContentPanel pageType={mockAddContentPanelProps.pageType.about} isAdmin={mockAddContentPanelProps.isAdmin}/>)
        const button = screen.getByText('Add Contents')
        fireEvent.click(button)
        const panel = screen.getByTestId('addContentForm')
        expect(panel).toBeVisible()
    })
})