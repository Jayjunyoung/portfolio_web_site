"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  pauseDelay?: number;
  onType?: () => void;
}

export default function Typewriter({
  texts,
  typingSpeed = 120,
  pauseDelay = 1000,
  onType,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        if (onType) {
          onType();
        }
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
  }, [charIndex, textIndex, texts, typingSpeed, pauseDelay, onType]);

  return <span className="text-sm sm:text-2xl">{displayText}</span>;
}
