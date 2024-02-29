import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { WorkListPanel } from './WorkListPanel'

const mockWorkListPanelProps = [
    {
        url: 'test',
        downloadUrl: 'test',
        pathname: 'test.jpg',
        size:2871,
        uploadedAt: faker.date.recent()
    },
    {
        url: 'test2',
        downloadUrl: 'test2',
        pathname: 'test2.jpg',
        size:2875,
        uploadedAt: faker.date.recent()
    }
]

describe('WorkListPanel', () => {
    it('should render WorkListPanel', () => {
        render(<WorkListPanel blobList={mockWorkListPanelProps}/>)
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(2)
    })
    it('should provide links with matching url', () => {
        render(<WorkListPanel blobList={mockWorkListPanelProps}/>)
        const links = screen.getAllByRole('link')
        expect(links[0]).toHaveAttribute('href', 'test')
        expect(links[1]).toHaveAttribute('href', 'test2')
    })
    it('should contain images for each link', () => {
        render(<WorkListPanel blobList={mockWorkListPanelProps}/>)
        const images = screen.getAllByRole('img')
        expect(images[0]).toHaveAttribute('src', 'test')
        expect(images[1]).toHaveAttribute('src', 'test2')
    })
})