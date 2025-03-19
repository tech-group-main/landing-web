import cube from "../../assets/cubes/cube1.png"

export const Services = () => {
    return (
        <div id='services' className='w-full h-full relative select-none'>
            <div className='md:max-w-[1280px] max-w-[768px] max-md:px-2 h-full m-auto py-44 relative'>
                <div className='absolute right-10 top-[50px] pointer-events-none'>
                    <img className='md:block hidden' src={cube} alt='cube'/>
                </div>
                <div className='md:w-2/7 md:h-64'>
                    <h1 className='md:text-5xl text-4xl font-bold uppercase'>Какие услуги мы предоставляем?</h1>
                </div>
                <div className=''>
                    <div className='md:grid md:grid-cols-2 max-md:grid-rows-5 gap-5'>
                        <div className='py-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                            <h2 className='text-3xl uppercase'>Верстка сайтов</h2>
                            <p className='text-lg'>-менеджмента, сервисы облачного хранения данных, отправки мгновенных сообщений, проведения видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов, а также обмен видеозаписями.</p>
                        </div>
                        <div className='py-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                            <h2 className='text-3xl uppercase'>Разработка системы сбора данных</h2>
                            <p className='text-lg'>отправки мгновенных сообщений, проведения видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов, а также обмен видеозаписями.</p>
                        </div>
                    </div>
                    <div className='md:flex flex-row w-full gap-5 mt-5'>
                        <div className='md:flex flex-row gap-5'>
                            <div className='py-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                                <h2 className='text-3xl uppercase'>3D Моделирование</h2>
                                <p className='text-xl'>видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов, а также обмен видеозаписями.</p>
                            </div>
                            <div className='py-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                                <h2 className='text-3xl uppercase'>Дизайн</h2>
                                <p className='text-lg'>относятся электронная данных, отправки видеоконференций, покупки книг различных форматов, а также обмен видеозаписями.</p>
                            </div>

                        </div>
                        <a href='#contact' className='py-5 md:px-5 md:w-3/5 h-fit hover:scale-105 transition rounded-[20px] hover:cursor-pointer hover:bg-[#4E4E4E] duration-200 flex flex-col gap-4'>
                            <div className='flex flex-col gap-1 relative overflow-hidden'>
                                <h2 className='text-3xl max-md:text-3xl uppercase'>Не нашли то что нужно?</h2>
                                <p className='text-lg'>
                                    Разработаем индивидуальное предложение.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};