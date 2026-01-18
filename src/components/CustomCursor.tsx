import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
        };

        const handleHover = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        // Check if the element is a button, link, or has a 'pointer' cursor
        const isClickable =
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            window.getComputedStyle(target).cursor === 'pointer';
        
        setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
        window.removeEventListener('mousemove', moveMouse);
        window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-[9999]"
        style={{
            translateX: cursorX,
            translateY: cursorY,
            scale: isHovering ? 1.5 : 1,
            backgroundColor: isHovering ? "rgba(59, 130, 246, 0.2)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100, mass: 0.5 }}
        />
    );
};

export default CustomCursor;