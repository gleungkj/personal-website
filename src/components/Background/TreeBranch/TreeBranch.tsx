'use client'

import styles from '@/components/Background/TreeBranch/TreeBranch.module.css'

export const TreeBranch: React.FC = (): JSX.Element => {
    return <div className={styles.treeBranch}><div className={styles.treeNode} /><div className={styles.treeArm} /></div>
}