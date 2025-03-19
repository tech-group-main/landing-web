import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import project1 from "../../assets/projects/project1.jpeg"
import project2 from "../../assets/projects/project2.png"
import project3 from "../../assets/projects/project3.jpg"

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
            const titleMobile = card.querySelector(".project-title-mobile");
            const imageMobile = card.querySelector(".project-image-mobile");

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
                    delay: 1,
                    display: 'flex',
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%",
                        end: "bottom 70%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                titleMobile,
                {y: 100,},
                {
                    y: 0,
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
                imageMobile,
                {y: 100},
                {
                    y: 0,
                    duration: 1,
                    delay: 1,
                    display: 'flex',
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div id='case' className='w-full h-full select-none pointer-events-none'>
            <div className='md:block hidden'>
                <div className='h-full border-b'>
                    <div className='max-w-[1280px] m-auto'>
                        <h3 className='uppercase text-[64px]'>Кейсы</h3>
                    </div>
                </div>
                <div ref={container} className='max-w-[1280px] h-full py-24 m-auto flex flex-col gap-20'>
                    <div
                        ref={projectRef}
                        className='w-full flex flex-row max-xl:flex-col items-center gap-10 justify-between project-container'
                    >
                        <img
                            src={project1}
                            width='1920px'
                            height='1080px'
                            className='xl:project-image max-xl:w-full w-2/3 h-full rounded-2xl project-image-mobile'
                            alt='project'
                        />
                        <div
                            className='project-title flex flex-col items-center p-12 rounded-2xl gap-10 project-info'>
                            <h1 className='xl:text-5xl text-3xl'>Разработка и сопровождение проекта</h1>
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
                    <div ref={container} className='max-w-[1280px] h-full py-24 m-auto flex flex-col gap-20'>
                        <div
                            ref={projectRef}
                            className='w-full flex flex-row max-xl:flex-col items-center gap-10 justify-between project-container'
                        >
                            <img
                                src={project2}
                                width='1920px'
                                height='1080px'
                                className='xl:project-image max-xl:w-full w-2/3 h-full rounded-2xl project-image-mobile'
                                alt='project'
                            />
                            <div
                                className='project-title flex flex-col items-center p-12 rounded-2xl gap-10 project-info'>
                                <h1 className='xl:text-5xl text-3xl'>Разработка и сопровождение проекта</h1>
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
                    <div ref={container} className='max-w-[1280px] h-full py-24 m-auto flex flex-col gap-20'>
                        <div
                            ref={projectRef}
                            className='w-full flex flex-row max-xl:flex-col items-center gap-10 justify-between project-container'
                        >
                            <img
                                src={project3}
                                width='1920px'
                                height='1080px'
                                className='xl:project-image max-xl:w-full w-2/3 h-full rounded-2xl project-image-mobile'
                                alt='project'
                            />
                            <div
                                className='project-title flex flex-col items-center p-12 rounded-2xl gap-10 project-info'>
                                <h1 className='xl:text-5xl text-3xl'>Разработка и сопровождение проекта</h1>
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
            <div className='md:hidden block px-2'>
                <h3 className='uppercase text-5xl'>Кейсы</h3>
                <div ref={container} className='mt-10 max-w-[600px]'>
                    <div
                        ref={projectRef}
                        className='w-full flex flex-col items-center gap-10 justify-between project-container'
                    >
                        <img
                            src={project1}
                            className='w-full project-image-mobile rounded-2xl'
                            alt='project-mobile'
                        />
                        <div
                            className='project-title-mobile rounded-2xl'>
                            <h1 className='text-2xl'>Разработка и сопровождение проекта</h1>
                        </div>
                    </div>
                </div>
                <div ref={container} className='mt-10 max-w-[600px]'>
                    <div
                        ref={projectRef}
                        className='w-full flex flex-col items-center gap-10 justify-between project-container'
                    >
                        <img
                            src={project2}
                            className='w-full project-image-mobile rounded-2xl'
                            alt='project-mobile'
                        />
                        <div
                            className='project-title-mobile rounded-2xl'>
                            <h1 className='text-2xl'>Разработка и сопровождение проекта</h1>
                        </div>
                    </div>
                </div>
                <div ref={container} className='mt-10 max-w-[600px]'>
                    <div
                        ref={projectRef}
                        className='w-full flex flex-col items-center gap-10 justify-between project-container'
                    >
                        <img
                            src={project3}
                            className='w-full project-image-mobile rounded-2xl'
                            alt='project-mobile'
                        />
                        <div
                            className='project-title-mobile rounded-2xl'>
                            <h1 className='text-2xl'>Разработка и сопровождение проекта</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};