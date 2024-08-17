import Logo from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Image from "next/image";

export const Navbar = () => {
    return (
        <>
            <div className="bg-black">
                <div className="px-5">
                    <div className=" py-4 flex items-center justify-between">
                        <div className="relative">
                            <div className="">
                                <Image src={Logo} alt="Logo" className="relative h-12 w-12" />
                            </div>
                        </div>
                        <div className="border border-white border-opacity-30 inline-flex justify-center items-center rounded-lg p-2 md:hidden">
                            <MenuIcon className="text-white" />
                        </div>
                        <nav className="hidden md:flex items-center gap-7">
                            <a href="#" className="text-opacity-60 text-white hover:text-opacity-35 transition ease-in">
                                About
                            </a>
                            <a href="#" className="text-opacity-60 text-white hover:text-opacity-35 transition ease-in">
                                Features
                            </a>
                            <a href="#" className="text-opacity-60 text-white hover:text-opacity-35 transition ease-in">
                                Updates
                            </a>
                            <a href="#" className="text-opacity-60 text-white hover:text-opacity-35 transition ease-in">
                                Help
                            </a>
                            <a href="#" className="text-opacity-60 text-white hover:text-opacity-35 transition ease-in">
                                Customers
                            </a>
                            <a href="#" className="text-opacity-60 text-white hover:text-opacity-35 transition ease-in">
                                Community
                            </a>
                            <button className="bg-white font-semibold tracking-tight rounded-lg  hover:text-opacity-35 transition p-2 ">
                                Get for Free
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
