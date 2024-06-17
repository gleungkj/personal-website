import { useEffect, useState } from 'react'

interface windowSizeProps {
    windowWidth: number
    windowHeight: number
}

export const useWindowSize = (): windowSizeProps => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ])

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', windowSizeHandler)

        return () => {
            window.removeEventListener('resize', windowSizeHandler)
        }
    }, [])

    return {
        windowWidth: windowSize[0],
        windowHeight: windowSize[1],
    }
}
