import ArrowIcon from "@/assets/icons/arrow-w.svg";
import CursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
export const Hero = () => {
    return (
        <>
            <div className="bg-black py-[72px]  text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">
                <div className="container relative">
                    <div className="flex items-center justify-center">
                        <a href="#" className="border py-1 px-2 rounded-lg inline-flex gap-3 border-white/30">
                            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
                                Version 2.0 is here{" "}
                            </span>
                            <span className="inline-flex items-center gap-1 ">
                                <span>Read More</span>
                                <ArrowIcon />
                            </span>
                        </a>
                    </div>
                    <div className="flex justify-center mt-8 ">
                        <div className="inline-flex relative">
                            <h1 className="text-7xl font-bold tracking-tighter text-center inline-flex sm:text-9xl">
                                One task <br />
                                at a time.
                            </h1>
                            <Image
                                src={CursorImage}
                                alt="cusor"
                                height={200}
                                width={200}
                                className="absolute right-[500px] top-[108px] hidden sm:inline "
                            />
                            <Image
                                src={messageImage}
                                alt="Message Image"
                                height={200}
                                width={200}
                                className="absolute top-[56px] left-[498px] hidden sm:inline "
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center text-xl mt-8 max-w-md">
                            Celebrate the joy of accomplishment with an app designed to track your progress, motivate
                            your efforts and celebrate your success.
                        </p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-white text-black py-3 px-5 rounded-lg font-medium z-10">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] blur-md sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1000px] sm:py-24"></div>
            </div>
        </>
    );
};
