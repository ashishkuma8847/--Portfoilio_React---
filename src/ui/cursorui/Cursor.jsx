import { useEffect } from 'react';
import { useTheme } from '../Themetoggel/ThemeProvider';

export const MouseTrail = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    let moveTimeout;
    let isMoving = false;

    circles.forEach(circle => {
      circle.x = 0;
      circle.y = 0;
    });

    const startMove = () => {
      isMoving = true;
      circles.forEach(circle => {
        circle.classList.remove('circle-merge');
      });
    };

    const stopMove = () => {
      isMoving = false;
      circles.forEach(circle => {
        circle.classList.add('circle-merge'); // merge into cursor
      });
    };

    window.addEventListener('mousemove', e => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      startMove();
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(stopMove, 100); // stop detection
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.transform = `translate(-50%, -50%) scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.55;
        y += (nextCircle.y - y) * 0.55;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return Array.from({ length: 40 }).map((_, i) => (
    <div key={i} className={`${!theme ? "bg-white" : "bg-black"} circle  z-50`}></div>
  ));
};