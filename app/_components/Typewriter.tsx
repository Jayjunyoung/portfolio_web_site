"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  pauseDelay?: number;
}

export default function Typewriter({
  texts,
  typingSpeed = 150,
  pauseDelay = 2000,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        const nextIndex = (textIndex + 1) % texts.length;
        setTextIndex(nextIndex);
        setDisplayText("");
        setCharIndex(0);
      }, pauseDelay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, typingSpeed, pauseDelay]);

  return <span className="text-2xl">{displayText}</span>;
}
