import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { WorkListPanel } from './WorkListPanel'
import { ImagePanel } from './ImagePanel'

beforeEach(() => {
    jest.clearAllMocks()
})

jest.mock('./ImagePanel')


const mockWorkListPanelProps = [
    {
        url: 'test',
        downloadUrl: 'test',
        pathname: 'test.jpg',
        size:2871,
        uploadedAt: faker.date.recent()
    }
]

const mockWorkListPanelProps2 = [
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

const mockLoggedInUserDetails = {
    id: '1234',
    isAdmin: false
}

describe('WorkListPanel', () => {
    it('should render WorkListPanel', () => {
        render(<WorkListPanel blobList={mockWorkListPanelProps} loggedInUserDetails={mockLoggedInUserDetails}/>)
        const panel = screen.getByTestId("workListPanel")
        expect(panel).toBeVisible()
    })
    it('should call imagePanel based on blobList length', () => {
        render(<WorkListPanel blobList={mockWorkListPanelProps} loggedInUserDetails={mockLoggedInUserDetails}/>)
        expect(ImagePanel).toHaveBeenCalledTimes(1)

        jest.clearAllMocks()

        render(<WorkListPanel blobList={mockWorkListPanelProps2} loggedInUserDetails={mockLoggedInUserDetails}/>)
        expect(ImagePanel).toHaveBeenCalledTimes(2)
    })
})