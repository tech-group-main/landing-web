export const About = () => {
    return (
        <div id='about' className='w-full h-[100] relative select-none'>
            <div className='max-w-[1440px] h-full flex flex-row justify-between py-24 m-auto'>
                <div className='flex flex-col w-2/7 gap-10 border rounded-[50px] p-10'>
                    <h1 className='text-4xl'>О нас</h1>
                    <p className='text-balance'>
                        Google поддерживает и разрабатывает многочисленные интернет-сервисы и продукты.
                        К ним относятся электронная почта, календари и приложения для тайм-менеджмента,
                        сервисы облачного хранения данных, отправки мгновенных сообщений, проведения
                        видеозвонков и видеоконференций, картографирования и навигации, покупки книг различных форматов,
                        а также обмен видеозаписями.</p>
                </div>

                <div className='flex flex-row w-2/4 justify-around items-center'>
                    <div className='flex flex-col text-center'>
                        <h2 className='text-4xl'>100+</h2>
                        <p className='text-2xl'>Проектов</p>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='text-4xl text-center'>32</h2>
                        <p className='text-2xl'>Партнера</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-4xl text-center'>3</h2>
                        <p className='text-2xl'>Офиса</p>
                    </div>

                </div>
            </div>
        </div>
    );
};