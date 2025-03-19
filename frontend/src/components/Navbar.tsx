import {useState, useEffect} from "react";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);

        if (!toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className={`sticky md:text-lg top-0 w-full select-none min-h-9 max-md:h-full z-10 transition-all duration-300 ${scrolled ? 'bg-[#131313] ' : 'bg-transparent'}`}>
            <div className='md:p-0 md:py-6 md:max-w-[1280px] max-w-[600px] p-4 m-auto w-full h-full flex justify-between items-center'>
                <div className='flex flex-col transition-opacity justify-center content-center'>
                    <svg className='w-full' width="60" height="56" viewBox="0 0 60 56" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.47977 45.6926H0.704601V55.8634H15.3523V33.093L4.47977 22.315V3.79507H11.5771V23.833L22.7516 34.9146V55.8634H37.3992V33.093L26.3757 22.315V3.79507H33.7751V23.833L44.6476 34.9146V55.8634H59.4462V33.093L48.5737 22.315V3.79507H55.671V10.3226H59.4462V0H44.6476V23.833L55.671 34.9146V52.0683H48.5737V33.093L37.3992 22.315V0H22.7516V23.833L33.7751 34.9146V52.0683H26.3757V33.093L15.3523 22.315V0H0.402588V23.833L11.5771 34.9146V52.0683H4.47977V45.6926Z"
                            fill="white"/>
                    </svg>
                    <h3 className=''>TechGroup</h3>
                </div>

                <div className='hidden md:flex items-center gap-6'>
                    <ul className='flex cursor-pointer gap-6'>
                        <li className='hover:text-[#c1c1c1]'><a href='#about'>О компании</a></li>
                        <li className='hover:text-[#c1c1c1]'><a href='#services'>Услуги</a></li>
                        <li className='hover:text-[#c1c1c1]'><a href='#case'>Кейсы</a></li>
                        <li className='hover:text-[#c1c1c1]'><a href='#contact'>Контакты</a></li>
                    </ul>
                </div>
                <div className='md:hidden z-30' onClick={toggleMenu}>
                    {
                        toggle ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                                 fill="currentColor">
                                <path
                                    d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                                 fill="currentColor">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                            </svg>
                    }
                </div>
            </div>
            <div className={toggle ? 'fixed top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center bg-[#131313] w-full h-screen md:hidden' : 'hidden'}>
                <ul className="text-center text-xl">
                    <li className='p-6 hover:bg-[#1F1F1FFF]'><a href='#about' onClick={toggleMenu}>О компании</a></li>
                    <li className='p-6 hover:bg-[#1F1F1FFF]'><a href='#services' onClick={toggleMenu}>Разработка</a></li>
                    <li className='p-6 hover:bg-[#1F1F1FFF]'><a href='#case' onClick={toggleMenu}>Кейсы</a></li>
                    <li className='p-6 hover:bg-[#1F1F1FFF]'><a href='#contact' onClick={toggleMenu}>Контакты</a></li>
                </ul>
            </div>
        </div>
    );
};