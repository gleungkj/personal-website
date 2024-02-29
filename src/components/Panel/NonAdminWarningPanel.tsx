import styles from "./NonAdminWarningPanel.module.css"



export const NonAdminWarningPanel = (): JSX.Element => {

    return (

        <div className={styles.nonAdminWarningPanel}>
            You must be an administrator to be able to use this feature.
        </div>
    )
}