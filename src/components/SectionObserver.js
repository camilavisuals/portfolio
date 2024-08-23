import { useEffect } from 'react';

function useSectionObserver(ids) {
    useEffect(() => {
        const observers = ids.map(id => {
            const section = document.getElementById(id);

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        window.history.replaceState(null, null, `#${id}`);
                    }
                },
                {
                    threshold: 0.5,
                }
            );

            if (section) {
                observer.observe(section);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [ids]);
}

export default useSectionObserver;