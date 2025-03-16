export const Services = () => {
    return (
        <div id='services' className='w-full h-[100] relative select-none'>
            <div className='max-w-[1440px] h-full m-auto py-40 relative'>
                <div className='absolute right-10 top-[-100px]'>
                    <img src='src/assets/cubes/cube1.png' alt='cube'/>
                </div>
                <div className='w-2/7 h-64'>
                    <h1 className='text-5xl font-bold uppercase'>Какие услуги мы предоставляем?</h1>
                </div>
                <div className=''>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='p-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                            <h2 className='text-3xl uppercase'>Верстка сайтов</h2>
                            <p className='text-lg'>-менеджмента, сервисы облачного хранения данных, отправки мгновенных сообщений, проведения видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов, а также обмен видеозаписями.</p>
                        </div>
                        <div className='p-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                            <h2 className='text-3xl uppercase'>Разработка системы сбора данных</h2>
                            <p className='text-lg'>отправки мгновенных сообщений, проведения видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов, а также обмен видеозаписями.</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-full gap-5 mt-5'>
                        <div className='flex flex-row gap-5'>
                            <div className='p-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                                <h2 className='text-3xl uppercase'>3D Моделирование</h2>
                                <p className='text-lg'>видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов, а также обмен видеозаписями.</p>
                            </div>
                            <div className='p-10 hover:scale-105 transition rounded-[20px] flex flex-col gap-4'>
                                <h2 className='text-3xl uppercase'>Дизайн</h2>
                                <p className='text-lg'>относятся электронная данных, отправки видеоконференций, покупки книг различных форматов, а также обмен видеозаписями.</p>
                            </div>

                        </div>
                        <a href='#contact' className='p-10 hover:scale-105 transition rounded-[20px] hover:cursor-pointer hover:bg-[#4E4E4E] duration-200 flex flex-col gap-4'>
                            <div>
                                <h2 className='text-lg uppercase'>Не нашли здесь того чего нужно?</h2>
                                <p className='text-lg'>Разработаем индивидуальное предложение.</p>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
};