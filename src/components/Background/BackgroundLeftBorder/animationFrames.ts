import { AnimationProps } from "framer-motion";

export const initialPanelFrame: AnimationProps['initial'] = {
    mask: `linear-gradient(to bottom, 
        rgba(0,0,0, 0.5) 0,   rgba(0,0,0, 0.5) 40%, 
        rgba(0,0,0, 0.1) 95%, rgba(0,0,0, 0.1) 0
        ) 100% 50% / 100% 100% repeat-x`,
    WebkitMask: `linear-gradient(to bottom, 
        rgba(0,0,0, 0.5) 0,   rgba(0,0,0, 0.5) 40%, 
        rgba(0,0,0, 0.1) 95%, rgba(0,0,0, 0.1) 0
        ) 100% 50% / 100% 100% repeat-x`,
    y: "-100%"
}

export const animatedLeftBorderOnLoad: AnimationProps['animate'] = {
    y: "0%"
}