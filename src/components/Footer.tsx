import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="flex flex-col items-center py-2 bg-blue-400 text-white gap-3 md:flex-row md:justify-around md:gap-4">
            <p className="order-2 md:order-1">Designed and Built by MrMafu</p>
            <p className="order-3 md:order-2">Copyright © {year} MrMafu</p>
            
            {/* Social links */}
            <div className="order-1 flex items-center gap-4 mb-2 md:order-3 md:mb-0">
                {[
                    { icon: faGithub, url: "https://github.com/MrMafu", label: "GitHub" },
                    { icon: faLinkedin, url: "https://www.linkedin.com/in/kinan-radiaputra-aa052a372", label: "LinkedIn" },
                    { icon: faXTwitter, url: "https://x.com/mafuuuu", label: "Twitter" },
                    { icon: faInstagram, url: "https://www.instagram.com/mafuu.__", label: "Instagram" }
                ].map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex flex-col items-center justify-center"
                        aria-label={social.label}>
                        <FontAwesomeIcon icon={social.icon} size="lg" />
                    </a>
                ))}
            </div>
        </footer>
    )
}