import { useState } from 'react';
import logo from '../../public/assets/img/header/logo.svg'; 

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="py-8 lg:pt-6 lg:pb-14">
            <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
                <div className="flex justify-center lg:justify-normal">
                    <a href="#"><img src={logo} alt="Logo" /></a>
                </div>

                <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-10">
                    <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
                        <i className="ri-map-pin-2-fill text-accent"></i>
                        <div className="text-secondary">Hay Zaitoune, Tikiouine, Agadir</div>
                    </div>

                    <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
                        <i className="ri-phone-fill text-accent"></i>
                        <div className="text-secondary">(+212 689 89 00 00)</div>
                    </div>

                    <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">Book now</button>

                    {/* Mobile Navigation */}
                    <nav className={`mnav bg-white fixed w-[300px] top-0 h-screen ${isNavOpen ? 'left-0' : '-left-[300px]'} shadow-2xl lg:hidden transition-all duration-300 z-20`}>
                        <div className="mnav_close_btn bg-black  flex justify-center items-center w-8 h-8 rounded-tr-lg rounded-br-lg absolute top-8 right-[-32px] cursor-pointer transition-all" onClick={toggleNav}>
                            <i className={`mnav_close_btn_icon ${isNavOpen ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'} text-2xl text-white`}></i>
                        
                        </div>

                        <div className="px-12 flex flex-col gap-y-12">
                            <a href="#"><img src={logo} alt="Logo" /></a>

                            <ul className="flex flex-col gap-y-5">
                                <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Home</a></li>
                                <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Doctors</a></li>
                                <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Department</a></li>
                                <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Services</a></li>
                                <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Blog</a></li>
                                <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Contact</a></li>
                            </ul>

                            <form className="relative flex gap-x-10">
                                <label>
                                    <i className="ri-search-line text-2xl text-accent"></i>
                                </label>
                                <input type="text" placeholder="Search" className="outline-none w-[160px] border-b-2 focus:border-accent placeholder-italic" />
                            </form>
                        </div>
                    </nav>

                    {/* Desktop Navigation */}
                    <nav className="bg-white absolute left-0 w-full bottom-[-86px] h-16 rounded-[10px] hidden lg:flex shadow-custom1 lg:items-center lg:justify-between lg:px-[50px]">
                        <ul className="flex gap-x-4">
                            <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Home</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Doctors</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Department</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Services</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Blog</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-all duration-300">Contact</a></li>
                        </ul>

                        <form className="relative flex gap-x-10">
                            <label className="flex justify-center items-center">
                                <i className="ri-search-line text-2xl text-accent"></i>
                            </label>
                            <input type="text" placeholder="Search" className="outline-none w-[100px] focus:w-[180px] border-b-2 focus:border-accent placeholder-italic transition-all duration- " />
                        </form>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
