import { AnimationProps } from 'framer-motion'

export const initialPanelFrame: AnimationProps['initial'] = {
    height: '3vh',
    width: 0,
}

export const animatedPanelFrameFromTree: AnimationProps['animate'] = {
    width: '75vw',
}

export const animatedPanelFrameOnLoad: AnimationProps['animate'] = {
    height: '40vh',
}

export const initialBusinessOwnerFrame: AnimationProps['initial'] = {
    y: 100,
    opacity: 0,
}
