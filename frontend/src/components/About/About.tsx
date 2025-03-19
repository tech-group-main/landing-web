import cube2 from "../../assets/cubes/cube2.png"
import cube3 from "../../assets/cubes/cube3.png"

export const About = () => {
    return (
        <div id='about' className='w-full h-full relative pointer-events-none select-none'>
            <div className='md:max-w-[1280px] max-w-[600px] max-md:px-2 h-full flex flex-row justify-between py-24 m-auto'>
                <div className='flex flex-col md:w-3/7 gap-20 rounded-[50px] py-10'>
                    <h1 className='md:text-5xl text-4xl'>О нас</h1>
                    <p className='text-balance font-light md:text-2xl'>
                        Мы - компания, созданная с целью решить все ваши бизнес проблемы и автоматизировать процессы
                        с помощью современных и креативных решений.
                    </p>
                </div>

                <div className='md:flex hidden flex-row w-2/4 justify-around items-center'>
                    <img className='select-none' src={cube2} alt='cube'/>
                    <img className='max-xl:hidden' src={cube3} alt='cube'/>
                </div>
            </div>
        </div>
    );
};