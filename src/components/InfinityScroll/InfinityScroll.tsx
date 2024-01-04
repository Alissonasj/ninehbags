import { useEffect, useRef } from 'react';

const InfinityScroll = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    };

    useEffect(() => {
        if (divRef.current) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    console.log('Observando', entry);
                }
            }, options);

            observer.observe(divRef.current);

            return () => {
                observer.disconnect(); // Cleanup when the component unmounts
            };
        }
    }, [divRef.current]); // Include divRef.current in the dependency array

    return <div ref={divRef} />;
};

export default InfinityScroll;
