import { useState, CSSProperties, MouseEventHandler } from "react"

const useDrag = (startingPosition: { x: number; y: number; }) => {
    const [dragInfo, setDragInfo] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        translation: startingPosition,
        lastTranslation: startingPosition,
    })

    const { isDragging } = dragInfo
    const handleMouseDown: MouseEventHandler
        = ({ clientX, clientY }) => {
            if (!isDragging)
                setDragInfo({
                    ...dragInfo,
                    isDragging: true,
                    origin: { x: clientX, y: clientY }
                })
        }

    const handleMouseMove: MouseEventHandler
        = ({ clientX, clientY }) => {
            if (isDragging) {
                const { origin, lastTranslation } = dragInfo
                setDragInfo({
                    ...dragInfo,
                    translation: {
                        x: Math.abs(clientX - (origin.x + lastTranslation.x)),
                        y: Math.abs(clientY - (origin.y + lastTranslation.y)),
                    }
                })
            }
        }

    const handleMouseUp = () => {
        if (isDragging) {
            const { translation } = dragInfo
            setDragInfo({
                ...dragInfo,
                isDragging: false,
                lastTranslation: { x: translation.x, y: translation.y }
            })
        }
    }

    const helloPosition: CSSProperties = {
        position: "absolute",
        right: `${dragInfo.translation.x}px`,
        bottom: `${dragInfo.translation.y}px`
    }

    return {
        helloPosition,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    }
}

export default useDrag