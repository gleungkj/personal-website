'use client'

import { IWebsiteContents } from '@/constants/websiteContents'
import { useState } from 'react'
import { EditButton } from '../../Button/EditButton'
import { EditForm } from '../../Form/EditForm'
import { DeleteButton } from '../../Button/DeleteButton'

import styles from '@/components/Panel/EditPanel/EditPanel.module.css'
import { NonAdminWarningPanel } from '../NonAdminWarningPanel'

interface IEditPanelProps {
    websiteContents: IWebsiteContents
    isAdmin: boolean
}

export const EditPanel = ({ websiteContents, isAdmin }: IEditPanelProps) => {
    const [isEditContentPanelOpen, setIsEditContentPanelOpen] = useState(false)
    const [isWarned, setIsWarned] = useState(false)

    return (
        <div className={styles.editPanel}>
            <div className={styles.panelButtons}>
                <EditButton
                    setPanelOpen={setIsEditContentPanelOpen}
                    isOpen={isEditContentPanelOpen}
                />
                <DeleteButton
                    id={websiteContents.id}
                    isAdmin={isAdmin}
                    setIsWarned={setIsWarned}
                />
            </div>
            {isWarned && <NonAdminWarningPanel />}
            {isEditContentPanelOpen && (
                <EditForm websiteContents={websiteContents} isAdmin={isAdmin} />
            )}
        </div>
    )
}
