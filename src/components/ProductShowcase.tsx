import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
    return (
        <>
            <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2cab] py-[72px] sm:py-24">
                <div className="container">
                    <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">Intuitive Interface</h2>
                    <div className="max-w-xl mx-auto">
                        <p className="text-xl text-center text-white/70 mt-5">
                            Celebrate the joy of accomplishment with an app designed to track your progress, motivate
                            your efforts, celebrate your successes, one task ara time.
                        </p>
                    </div>
                    <Image src={appScreen} alt="app-screen" className="mt-14 mx-auto" />
                </div>
            </div>
        </>
    );
};
