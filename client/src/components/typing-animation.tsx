import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export default function TypingAnimation({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);

        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);

        if (currentCharIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, isDeleting, texts, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
}
