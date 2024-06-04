import { AnimationProps, TargetAndTransition } from 'framer-motion'

export const initialPanelFrame: AnimationProps['initial'] = {
    height: '3vh',
    width: 0,
    color: 'rgba(0,0,0,0)',
}

export const animatedPanelFrameFromTree: AnimationProps['animate'] = {
    width: '75vw',
}

export const animatedPanelFrameOnLoad: AnimationProps['animate'] = {
    height: '20vh',
    opacity: 1,
    color: 'rgba(3, 3, 39,1)',
}

export const animatedFrameOnClick: AnimationProps['animate'] = {
    scale: 0.95,
    transition: { duration: 0.5 },
}

export const animatedFrameOnHover: TargetAndTransition = {
    scale: 1.05,
    transition: { duration: 0.25 },
    opacity: 1,
}
