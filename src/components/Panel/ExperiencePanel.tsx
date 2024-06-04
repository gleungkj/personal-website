'use client'

import { useState } from 'react'
import { ExperienceContractedPanel } from './ExperienceContractedPanel/ExperienceContractedPanel'
import { ExperienceExpandedPanel } from './ExperienceExpandedPanel/ExperienceExpandedPanel'
import { IWebsiteContents } from '@/constants/websiteContents'

interface IExperiencePanel {
    experienceData: IWebsiteContents
}

export const ExperiencePanel = ({
    experienceData,
}: IExperiencePanel): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div data-testid="ExperiencePanel">
            {isExpanded && (
                <ExperienceExpandedPanel
                    data={experienceData}
                    isExpanded={isExpanded}
                    setPanelExpanded={setIsExpanded}
                />
            )}
            <ExperienceContractedPanel
                data={experienceData}
                isExpanded={isExpanded}
                setPanelExpanded={setIsExpanded}
            />
        </div>
    )
}
