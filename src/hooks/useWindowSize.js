import {useEffect, useState} from "react";

export const useWindowHeight = () => {
    const [dimensions, setDimensions] =  useState( {
        width: 0,
        height: 0,
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDimensions({
                width: window.innerHeight,
                height: window.innerHeight,
            });
        });
    }, []);

    return dimensions;
};