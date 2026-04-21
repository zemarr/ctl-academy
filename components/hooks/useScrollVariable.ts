import { useEffect, useRef, useState } from 'react';

export function useScrollVariable() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    // Only set isVisible to true when the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 } // Trigger as soon as 1% is visible
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // If not visible, do not attach the scroll listener
    if (!isVisible) return;

    let requestRef: number;
    const updateProperty = () => {
      if (containerRef.current) {
        // Optimization: Use transform-style variables or direct offsets
        // Setting a CSS variable allows CSS-only parallax which is smoother
        containerRef.current.style.setProperty('--scroll-y', `${window.scrollY}px`);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(updateProperty);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProperty(); // Initial sync

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(requestRef);
    };
  }, [isVisible]);

  return containerRef;
}