import { useInView } from 'react-intersection-observer'
import styles from './ViewportRenderer.module.css'

interface ViewportRendererProps {
    children: React.ReactNode
}

export const ViewportRenderer = ({
    children,
}: ViewportRendererProps): JSX.Element => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '10%',
    })
    return (
        <div
            ref={ref}
            className={styles.viewportRenderer}
            data-testid="ViewportRenderer"
        >
            {inView && <div>{children}</div>}
        </div>
    )
}
