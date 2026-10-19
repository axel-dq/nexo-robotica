'use client';

import { useState, useEffect, useMemo } from 'react';

export default function TypewriterList({
    items,
    speed = 40
}: {
    items: string[],
    speed?: number,
    delayBetweenItems?: number
}) {
    // Process items once using useMemo to avoid infinite re-renders
    const processedItems = useMemo(() => {
        return items.map((item) => item);
    }, [items]);

    // Track the current character index for EVERY item simultaneously
    const [charIndices, setCharIndices] = useState<number[]>(() => items.map(() => 0));

    useEffect(() => {
        // Check if all items are fully typed out
        const allFinished = processedItems.every((item, i) => charIndices[i] >= item.length);
        if (allFinished) return;

        const timer = setTimeout(() => {
            setCharIndices(prevIndices =>
                prevIndices.map((currCharIdx, i) => {
                    const targetLength = processedItems[i].length;
                    // Increment character index if this item isn't finished yet
                    return currCharIdx < targetLength ? currCharIdx + 1 : currCharIdx;
                })
            );
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndices, processedItems, speed]);

    return (
        <ol className="whitespace-pre-wrap flex flex-col justify-around font-corporate list-none">
            {processedItems.map((item, index) => {
                const displayedText = item.substring(0, charIndices[index]);
                return (
                    <li
                        key={index}
                        className={`${index === processedItems.length - 1 ? 'mt-auto' : 'my-5'} flex gap-2 min-h-20`}
                    >
                        <div>{index + 1} \ </div> {displayedText}
                    </li>
                );
            })}
        </ol>
    );
}
