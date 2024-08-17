import Instagram from "@/assets/icons/insta.svg";
import XIcon from "@/assets/icons/x-social.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";
import PintrestIcon from "@/assets/icons/pinterest.svg";
import TiltokIcons from "@/assets/icons/tiktok.svg";

export const Footer = () => {
    return (
        <footer className="py-5 bg-black text-white/60 border-t border-white/20">
            <div className="container">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                    <div className="text-center">&copy; 2024 FAKE company INC. All rights reserved.</div>
                    <ul className="flex justify-center gap-2.5">
                        <li>
                            <Instagram />
                        </li>
                        <li>
                            <XIcon />
                        </li>
                        <li>
                            <PintrestIcon />
                        </li>
                        <li>
                            <YouTubeIcon />
                        </li>
                        <li>
                            <TiltokIcons />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
