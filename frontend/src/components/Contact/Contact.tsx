import {useState} from "react";
import * as React from "react";
import cube4 from "../../assets/cubes/cube4.png"
import cube5 from "../../assets/cubes/cube5.png"


interface NotificationProps {
    message: string;
    show: boolean;
}

export const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);
    const sendMessage = () => {

        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };
    return (
        <div id='contact' className='md:max-w-[1280px] max-md:px-2 max-w-[600px] h-full flex flex-row justify-between py-24 m-auto'>
            <div className='lg:w-2/4 w-full h-full flex flex-col rounded-[20px]'>
                <h1 className='md:text-6xl lg:w-2/3 text-4xl'>Связаться с нами</h1>
                <form className='flex flex-col py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7 mt-6 relative'
                      autoComplete='one-time-code'>
                    <div className='input-box relative'>
                        <input autoComplete="one-time-code"
                               id="email"
                               name="email"
                               type="text"
                               className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-100 focus:outline-none focus:borer-rose-600'
                               placeholder="Имя"
                               required/>
                        <label
                            htmlFor='email'
                            className='absolute left-0 -top-3.5 text-gray-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Имя</label>
                    </div>
                    <div className='input-box relative mt-6'>
                        <input autoComplete="one-time-code"
                               id="email"
                               name="email"
                               type="text"
                               className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-100 focus:outline-none focus:borer-rose-600'
                               placeholder="Email address"
                               required/>
                        <label
                            htmlFor='email'
                            className='absolute left-0 -top-3.5 text-gray-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Электронная
                            почта</label>
                    </div>
                    <div className='mt-6 flex flex-col gap-5'>
                        <label className='uppercase'>Сообщение</label>
                        <textarea placeholder='Сообщение'
                                  className='w-full px-8 resize-none py-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 h-60'
                                  required/>
                    </div>
                    <button type='submit'
                            onClick={sendMessage}
                            className='w-full h-12 mt-6 text-white uppercase place-self-center  bg-[#5D8AD9] hover:bg-[#537dc7] hover:cursor-pointer rounded-md px-8'>Отправить
                    </button>
                </form>
                <Notification message="Message sent successfully." show={showNotification}/>

            </div>
            <div className='lg:block relative hidden w-1/4 pointer-events-none'>
                <div className='h-full'>
                    <svg className='absolute -right-30 lg:block hidden -scale-50 blur-[200px]' width="611"
                         height="943" viewBox="0 0 611 943" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M787 471.5C787 731.902 663.207 943 510.5 943C357.793 943 0 731.902 0 471.5C678 943 357.793 0 510.5 0C663.207 0 787 211.098 787 471.5Z"
                            fill="#E1EDF5"/>
                    </svg>
                </div>
                <div className='lg:block hidden absolute top-0'>
                    <img className='' src={cube4} alt='cube'/>
                </div>
                <div>
                    <img className='lg:block hidden absolute top-80 right-50' src={cube5} alt='cube'/>
                </div>
            </div>
        </div>
    );
};

const Notification: React.FC<NotificationProps> = ({message, show}) => {
    return (
        show && (
            <div id="toast-simple"
                 className="fixed select-none z-20 top-25 right-10 flex items-center w-full max-w-xs p-4 space-x-4
                    rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200
                    rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800
                    animate-once animate-duration-[3000ms] animate-delay-1000 animate-ease-in animate-alternate-reverse animate-fade-left
                    "
                 role="alert">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                </svg>
                <div className="ps-4 text-sm font-normal">{message}</div>
            </div>
        )
    );
};