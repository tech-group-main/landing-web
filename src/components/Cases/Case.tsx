import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

export const Case = () => {
    gsap.registerPlugin(ScrollTrigger);
    const projectRef = useRef(null)
    const container = useRef(null)

    useGSAP(() => {
        const projectCards = gsap.utils.toArray<HTMLElement>(".project-container");

        projectCards.forEach(card => {
            gsap.fromTo(
                card,
                {opacity: 0},
                {
                    opacity: 1,
                    duration: 1,
                    delay: 2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                }
            );

            const title = card.querySelector(".project-title");
            const image = card.querySelector(".project-image");

            gsap.fromTo(
                title,
                {x: 100,},
                {
                    x: 0,
                    duration: 1,
                    delay: 2,
                    display: 'flex',
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                image,
                {x: -100},
                {
                    x: 0,
                    duration: 1,
                    delay: 2,
                    display: 'flex',
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div id='case' className='w-full h-[100] select-none'>
            <div className=''>
                <div className='h-full border-b'>
                    <div className='max-w-[1440px] m-auto'>
                        <h3 className='uppercase text-[64px]'>Кейсы</h3>
                    </div>
                </div>
                <div ref={container} className='max-w-[1440px] h-full py-24 m-auto flex flex-col gap-20'>
                    <div
                        ref={projectRef}
                        className='grid grid-cols-2 w-full gap-10 project-container'
                    >
                        <img
                            src='src/assets/projects/project1.jpeg'
                            className='project-image rounded-2xl'
                            alt='project'
                        />
                        <div className='h-full bg-[#131313]'>
                            <div
                                className='project-title flex flex-col p-12 rounded-2xl gap-10 bg-[#1c1c1c] project-info'>
                                <h1 className='text-4xl'>Разработка и сопровождение проекта</h1>
                                <div className='text-lg flex flex-row gap-2 flex-wrap'>
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Some tag</span>
                                    <span
                                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Some tag</span>
                                    <span
                                        className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">Some tag</span>
                                    <span
                                        className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-green-400 border border-green-400">Some tag</span>
                                    <span
                                        className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Some tag</span>
                                    <span
                                        className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Some tag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={projectRef}
                        className='w-full relative project-container'
                    >
                        <img
                            src='src/assets/projects/project2.png'
                            className='project-card w-full rounded-2xl'
                            alt='project'
                        />
                        <div
                            className='project-card absolute w-full bottom-0 left-0 bg-[#1c1c1c] p-2 text-lg flex flex-row gap-2 flex-wrap rounded-b-lg'>
                            <span
                                className="bg-[#131313] inline-flex gap-1 text-primary py-1 px-4 rounded-lg items-center justify-between text-xs capitalize hover:bg-gray-gray1">
                                <img
                                    alt=" " src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/php.svg" decoding="async"
                                    data-nimg="1" className="object-cover w-6 h-6 mr-1" loading="lazy"
                                    style={{
                                        color: 'transparent',
                                        width: '24',
                                        height:'24',
                                    }}
                                />
                                <span className="capitalize lg:inline leading-5 text-lg">PHP</span>
                            </span>
                            <span
                                className="bg-[#131313] inline-flex gap-1 text-primary py-1 px-4 rounded-lg items-center justify-between text-xs capitalize hover:bg-gray-gray1">
                                <img
                                    alt=" " src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg" decoding="async"
                                    data-nimg="1" className="object-cover w-6 h-6 mr-1" loading="lazy"
                                    style={{
                                        color: 'transparent',
                                        width: '24',
                                        height:'24',
                                }}/>
                                <span className="capitalize lg:inline leading-5 text-lg">JavaScript</span>
                            </span>
                            <span
                                className="bg-[#131313] inline-flex gap-1 text-primary py-1 px-4 rounded-lg items-center justify-between text-xs capitalize hover:bg-gray-gray1">
                                <img
                                    alt=" " src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg" decoding="async"
                                    data-nimg="1" className="object-cover w-6 h-6 mr-1" loading="lazy"
                                    style={{
                                        color: 'transparent',
                                        width: '24',
                                        height:'24',
                                }}/>
                                <span className="capitalize lg:inline leading-5 text-lg">TailwindCSS</span>
                            </span>

                        </div>
                    </div>
                    <div
                        ref={projectRef}
                        className='w-full flex flex-row items-center gap-10 justify-between project-container'
                    >
                        <img
                            src='src/assets/projects/project3.jpg'
                            className='project-image w-2/3 rounded-2xl project-image'
                            alt='project'
                        />
                        <div
                            className='project-title w-1/3 flex flex-col items-center p-12 rounded-2xl gap-10 bg-[#1c1c1c] project-info'>
                            <h1 className='text-5xl'>Разработка и сопровождение проекта</h1>
                            <div className='text-lg flex flex-row gap-2 flex-wrap'>
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Some tag</span>
                                <span
                                    className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Some tag</span>
                                <span
                                    className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">Some tag</span>
                                <span
                                    className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-green-400 border border-green-400">Some tag</span>
                                <span
                                    className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Some tag</span>
                                <span
                                    className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Some tag</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};