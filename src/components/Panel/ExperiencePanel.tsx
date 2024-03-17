'use client'

import { useState } from 'react'
import { ExperienceContractedPanel } from './ExperienceContractedPanel'
import { ExperienceExpandedPanel } from './ExperienceExpandedPanel'
import { IWebsiteContents } from '@/constants/websiteContents'

interface IExperiencePanel {
    experienceData: IWebsiteContents[]
}

export const ExperiencePanel = (): JSX.Element => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div data-testid='ExperiencePanel'>
        {isExpanded && <ExperienceExpandedPanel isExpanded={isExpanded} setPanelExpanded={setIsExpanded}/>}
        <ExperienceContractedPanel isExpanded={isExpanded} setPanelExpanded={setIsExpanded}/>
        </div>
    )
}