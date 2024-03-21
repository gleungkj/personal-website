import { AnimationProps } from "framer-motion"

export const initialPanelFrame: AnimationProps['initial'] = {
    y: "10vh",
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: "10vw",
    marginRight: "10vw",
    background: "floralwhite",
    minHeight: 0,
    opacity: 0,
    borderRadius: "2vh"
}

export const animatedPanelFrameOnOpen: AnimationProps['animate'] = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10vh",
    marginBottom: "10vh",
    marginLeft: "10vw",
    marginRight: "10vw",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    zIndex: "30",
    minHeight: "30vh",
    opacity: 1
}

export const initialContentFrame: AnimationProps['initial'] = {
    opacity: 0
}

export const animatedContentFrameOnOpen: AnimationProps['animate'] = {
    opacity: 1
}