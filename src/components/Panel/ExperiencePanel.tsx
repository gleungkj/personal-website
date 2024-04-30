'use client'

import { useState } from 'react'
import { ExperienceContractedPanel } from './ExperienceContractedPanel/ExperienceContractedPanel'
import { ExperienceExpandedPanel } from './ExperienceExpandedPanel/ExperienceExpandedPanel'
import { IWebsiteContents } from '@/constants/websiteContents'
import { motion } from 'framer-motion'

interface IExperiencePanel {
    experienceData: IWebsiteContents
}

export const ExperiencePanel = ({
    experienceData,
}: IExperiencePanel): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div data-testid="ExperiencePanel">
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
        </motion.div>
    )
}
