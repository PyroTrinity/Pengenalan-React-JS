export default function Hero(){
    return(
        <hero className="bg-white  w-full top-24 start-0">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <a href="#">
                            <div className="bg-[#3F83F8] flex max-w-max mb-12 items-center bg-cream text-utama font-semibold rounded-full text-sm px-5 text-center" role="">
                                <p className="p-2">More than Faster</p>
                                <img src="public/images/cherry.png" alt=""/>
                            </div>
                        </a>
                        <h1 className="max-w-2xl mb-4 text-4xl font-utama font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Claim Best R on <br></br>Fast <span  className="text-utama font-hero italic">Food</span> & <br></br><span className="text-utama  font-hero italic">Restaurants</span> </h1>
                        <p className="max-w-2xl mb-6 font-poppins text-text_ utama lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our job is to filling your tummy with delicious food <br></br>and  with fast and free delivery</p>
                        <div className="flex items-center">
                            <a href="#" className="inline-flex items-center justify-center px-7 py-3 mr-6 mr-3 text-base font-normal text-center text-white rounded-full bg-utama hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Get started
                            </a>
                            <a href="#" className="inline-flex items-center justify-center text-base font-medium text-center">
                                <button type="button" className="text-white bg-kuning hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 22">
                                        <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="sr-only">Icon description</span>
                                </button>
                                <p className="p-2">Watch Video</p>
                            </a> 
                        </div>    
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="public/images/image-46.png" alt=""/>
                    </div>                
                </div>
            </section>
        </hero>
    )
}