    export const About = () => {
    return (
        <div id='about' className='w-full h-[100] relative select-none'>
            <div className='max-w-[1440px] h-full flex flex-row justify-between py-24 m-auto'>
                <div className='flex flex-col w-3/7 gap-20 rounded-[50px] py-10'>
                    <h1 className='text-5xl'>О нас</h1>
                    <p className='text-balance font-light text-2xl'>
                        Google поддерживает и разрабатывает многочисленные интернет-сервисы и продукты.
                        К ним относятся электронная почта, календари и приложения для тайм-менеджмента,
                        сервисы облачного хранения данных, отправки мгновенных сообщений, проведения
                        видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов,
                        а также обмен видеозаписями.</p>
                </div>

                <div className='flex flex-row w-2/4 justify-around items-center'>
                    <div className='flex flex-col text-center'>
                        <h2 className='text-5xl'>100+</h2>
                        <p className='text-[32px]'>Проектов</p>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='text-5xl text-center'>32</h2>
                        <p className='text-[32px]'>Партнера</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-5xl text-center'>3</h2>
                        <p className='text-[32px]'>Офиса</p>
                    </div>

                </div>
            </div>
        </div>
    );
};