import { useEffect, useRef } from 'react';

const InfinityScroll = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {                
                console.log('Observando... ', entry);
            }
        }, options);

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return <div ref={divRef} />;
};

export default InfinityScroll;
