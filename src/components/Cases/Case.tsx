export const Case = () => {
    return (
        <div id='case' className='w-full h-[100] select-none'>
            <div className='relative'>
                <div className='h-full px-24 border-b'>
                    <div className='flex flex-row items-center justify-between'>
                        <h3 className='uppercase text-[64px]'>Кейсы</h3>
                    </div>
                </div>
                <div className='relative py-12 px-24'>
                    <div className='sticky h-screen top-12 flex flex-row items-center gap-20'>
                        <img src='src/assets/png/project1.png' className='w-full' alt='project'/>
                        <div className='bg-[#131313] w-full'>
                            <h1 className='text-5xl'>Разработка и сопровождение</h1>
                        </div>
                    </div>
                    <div className='sticky h-screen top-12 flex flex-row items-center gap-20'>
                        <img src='src/assets/png/project1.png' className='w-full' alt='project'/>
                        <div className='bg-[#131313] w-full'>
                            <h1 className='text-5xl'>Разработка дизайн-макета</h1>
                        </div>
                    </div>
                    <div className='sticky h-screen top-12 flex flex-row items-center gap-20'>
                        <img src='src/assets/png/project1.png' className='w-full' alt='project'/>
                        <div className='bg-[#131313] w-full'>
                            <h1 className='text-5xl'>Хранение и анализирование данных</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};