export const Contact = () => {
    return (
        <div id='contact' className='w-full h-[100] relative select-none'>
            <div className='max-w-[1440px] h-full flex flex-row justify-between py-24 m-auto'>
                <div className='w-2/4 h-full flex flex-col border rounded-[20px] p-20'>
                    <h1 className='text-6xl w-2/3'>Связаться с нами</h1>
                    <form className='flex flex-col py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7 mt-6' autoComplete='one-time-code'>
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
                                className='w-full h-12 mt-6 text-white uppercase place-self-center  bg-[#5D8AD9] hover:bg-[#537dc7] hover:cursor-pointer rounded-md px-8'>Отправить
                        </button>
                    </form>

                </div>
                <div className='lg:block relative hidden'>
                    <div className='relative'>
                        <svg className='absolute -scale-70 -z-10 -top-10 -right-80 overflow-hidden blur-[200px]' width="611" height="943" viewBox="0 0 611 943" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M787 471.5C787 731.902 663.207 943 510.5 943C357.793 943 0 731.902 0 471.5C678 943 357.793 0 510.5 0C663.207 0 787 211.098 787 471.5Z" fill="#E1EDF5"/>
                        </svg>
                    </div>
                    <div className='relative'>
                        <img className='' src='src/assets/cubes/cube4.png'/>

                    </div>
                    <div>
                        <img className='' src='src/assets/cubes/cube5.png'/>
                    </div>
                </div>
            </div>
        </div>
    );
};