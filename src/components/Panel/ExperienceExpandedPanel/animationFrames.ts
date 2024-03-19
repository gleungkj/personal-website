import { AnimationProps } from "framer-motion"

export const initialFrame: AnimationProps['initial'] = {
    y: "10vh",
    height: "5vh",
    marginLeft: "10vw",
    marginRight: "10vw",
    background: "floralwhite",
    contentVisibility: "hidden"
}

export const animatedFrame: AnimationProps['animate'] = {
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
}

export const animatedContent: AnimationProps['animate'] = {
    contentVisibility: "visible",    
}