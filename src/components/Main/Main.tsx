import {useEffect, useRef, useState} from "react";
import * as React from "react";

export const Main: React.FC = () => {
    interface Circle {
        id: number;
        x: number;
        y: number;
        originalX: number;
        originalY: number;
        radius: number;
    }

    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const [circles, setCircles] = useState<Circle[]>([
        {id: 2, x: 550, y: 367, originalX: 550, originalY: 367, radius: window.innerWidth * 0.11},
        {id: 3, x: 400, y: 231, originalX: 400, originalY: 152, radius: window.innerWidth * 0.07},
        {id: 1, x: 450, y: 152, originalX: 450, originalY: 100, radius: window.innerWidth * 0.05},
    ]);

    const handleMouseMove = (event: MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.current = event.clientX - rect.left;
            mouseY.current = event.clientY - rect.top;
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        const animateCircles = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth - 20;
                const containerHeight = containerRef.current.clientHeight - 20;

                setCircles((prevCircles) => {
                    return prevCircles.map(circle => {
                        const dx = mouseX.current - circle.x;
                        const dy = mouseY.current - circle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        const maxDistance = Math.max(containerWidth, containerHeight);

                        const repulsionForce = Math.max(0, 1 - distance / maxDistance);

                        const offsetX = -dx * repulsionForce * 0.03;
                        const offsetY = -dy * repulsionForce * 0.03;

                        let newX = circle.x + offsetX;
                        let newY = circle.y + offsetY;

                        newX += (circle.originalX - newX) * 0.02;
                        newY += (circle.originalY - newY) * 0.02;

                        newX = Math.max(circle.radius, Math.min(containerWidth - circle.radius, newX));
                        newY = Math.max(circle.radius, Math.min(containerHeight - circle.radius, newY));

                        const originalX = Math.max(circle.radius, Math.min(containerWidth - circle.radius, circle.originalX));
                        const originalY = Math.max(circle.radius, Math.min(containerHeight - circle.radius, circle.originalY));

                        return {...circle, x: newX, y: newY, originalX, originalY};
                    });
                });
            }
            requestAnimationFrame(animateCircles);
        };

        const animationFrame = requestAnimationFrame(animateCircles);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className='w-full h-[100] relative select-none'>
            <div className='max-w-[1440px] h-full flex flex-row py-44 m-auto'>
                <div className='flex justify-between h-96 bg-blend-color flex-col gap-5'>
                    <h1 className='text-[64px]/[1] w-3/4 font-light'>Ваше индивидуальное IT решение для бизнеса</h1>
                    <div className='text-2xl flex flex-col mt-auto'>
                        <p>IT автоматизация бизнеса</p>
                        <p>Работа в аутсорс</p>
                        <p>Лендинг</p>
                        <p>Сайт</p>
                    </div>
                </div>
                <div ref={containerRef} className="max-w-[1000px] right-0 absolute circle-container blur-2xl w-full mix-blend-color-dodge min-h-[35rem] h-full overflow-hidden">
                    {circles.map((circle) => (
                        <svg
                            key={circle.id}
                            className={`circle circle-${circle.id} absolute animate-glow transition`}
                            style={{
                                left: `${circle.x - circle.radius}px`,
                                top: `${circle.y - circle.radius}px`,
                                width: `${circle.radius * 2}px`,
                                height: `${circle.radius * 2}px`,
                            }}
                            viewBox={`0 0 ${circle.radius * 2} ${circle.radius * 2}`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx={circle.radius}
                                cy={circle.radius}
                                r={circle.radius}
                                fill={circle.id === 1 ? "#F1F9FF" : circle.id === 2 ? "#ACC5A7" : "#C7E9FA"}
                            />
                        </svg>
                    ))}

                </div>
            </div>
        </div>
    );
};