import React, { useState, useEffect } from "react";
// import { useTheme } from "../hooks/useTheme";

interface AutoTypingProps {
    texts: string[]; // Array of texts to type
    speed?: number; // Typing speed (ms per character)
    deleteSpeed?: number; // Deleting speed (ms per character)
    pauseTime?: number; // Pause time before deleting (ms)
}

const AutoTyping: React.FC<AutoTypingProps> = ({
    texts,
    speed = 100,
    deleteSpeed = 50,
    pauseTime = 1500,
}) => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);

    // const { theme } = useTheme(); // ⬅️ use theme
    const theme = "dark"

    useEffect(() => {
        const current = loop % texts.length;
        const fullText = texts[current];

        const timer = setTimeout(
            () => {
                setText((prev) =>
                    isDeleting
                        ? fullText.substring(0, prev.length - 1)
                        : fullText.substring(0, prev.length + 1)
                );

                if (!isDeleting && text === fullText) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                } else if (isDeleting && text === "") {
                    setIsDeleting(false);
                    setLoop((prev) => prev + 1);
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timer);
    }, [text, isDeleting, texts, loop, speed, deleteSpeed, pauseTime]);

    // Dynamic colors based on theme
    const textColor = theme === "dark" ? "text-white" : "text-black";

    return (
        <div
            className={`text-5xl md:text-9xl font-bold text-center h-[50px] transition-colors duration-300 ${textColor}`}
        >
            {text}
            <span className="animate-ping">|</span>
        </div>
    );
};

export default AutoTyping;