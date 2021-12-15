import React, {useState,useEffect} from "react"

/**
 * Get window size
 * @returns {interger} size 
 * @example
 * const {width, height} = useWindowSise()
 * width > 1024 ? '...' : '...'
 * heigh > 800 ? '...' : '...'
 */
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        const handleResize= () => {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

export default useWindowSize;