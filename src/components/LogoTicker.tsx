import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
    {id: 1, src: acmeLogo, alt: "Acme Logo"},
    {id: 2, src: quantumLogo, alt: "Quantum Logo"},
    {id: 3, src: echoLogo, alt: "Echo Logo"},
    {id: 4, src: celestialLogo, alt: "Celestial Logo"},
    {id: 5, src: pulseLogo, alt: "Pulse Logo"},
    {id: 6, src: apexLogo, alt: "Apex Logo"},
];

export const LogoTicker = () => {
    return (
        <>
            <div className="bg-black text-white py-[72px] sm:py-24 ">
                <div className="container">
                    <h2 className="text-xl text-center text-white/60">Trusted by the world's most innovative Team.</h2>

                    <div className="overflow-hidden mt-9 before:content-[' '] after:contents-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] ">
                        <div className="flex gap-16">
                            {images.map(({id, src, alt}) => (
                                <Image src={src} alt={alt} className="flex-none= h-8 " key={id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
