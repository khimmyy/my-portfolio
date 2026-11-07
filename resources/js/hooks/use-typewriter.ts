import { useEffect, useState } from 'react';

/** Types each word out, deletes it, then moves on to the next one — forever. */
export function useTypewriter(words: string[], speed = 100, pause = 1200) {
    const [wordIndex, setWordIndex] = useState(0);
    const [length, setLength] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const word = words[wordIndex % words.length];

    useEffect(() => {
        const fullyTyped = !deleting && length === word.length;
        const timeout = setTimeout(
            () => {
                if (fullyTyped) {
                    setDeleting(true);
                } else if (deleting && length === 0) {
                    setDeleting(false);
                    setWordIndex((i) => (i + 1) % words.length);
                } else {
                    setLength((l) => l + (deleting ? -1 : 1));
                }
            },
            fullyTyped ? pause : deleting ? speed / 2 : speed,
        );

        return () => clearTimeout(timeout);
    }, [deleting, length, word, words.length, speed, pause]);

    return word.substring(0, length);
}
