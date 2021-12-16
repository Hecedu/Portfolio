import React from 'react'
import { useEffect, useState } from 'react'
import Typist from 'react-typist'

interface TypistLoopProps {
    strings: string[];
}
export default function TypistLoop({ strings }:TypistLoopProps) {
    const [repeatBool, setRepeatBool] = useState(true);
    useEffect(() => {
        setRepeatBool(true);
    }, [repeatBool]);
    function shuffleArray(array : string[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(strings);
    return (
        <div>
            {
                repeatBool ? (
                    <Typist avgTypingDelay={70} cursor={{ show: true }} onTypingDone={() => setRepeatBool(false)}>
                        {strings.map((string) => {
                            return (
                                [
                                    <span className="fs-2 fw-normal fst-italic">{string}</span>,
                                    <Typist.Backspace count={string.length} delay={800} />
                                ]
                            )
                        })}
                    </Typist >
                ) : (
                    <></>
                )}
        </div>
    )
}
