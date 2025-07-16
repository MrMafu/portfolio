"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

// Typewriter
function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Backend Developer",
                    "I can do Frontend too!",
                    "Indie Game Developer",
                    "I like problem-solving.",
                    "I also love cats."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50
            }}
        />
    )
}

export default function Hero({ id }: { id: string }) {
    return (
        <div id={id} className="flex flex-col h-screen">
            {/* Spacer (matches navbar height) */}
            <div style={{ height: "var(--navbar-height)" }} />
            <div className="flex flex-col-reverse items-center justify-center flex-1 px-4 md:flex-row md:justify-between md:px-8 lg:px-12">
                {/* Header */}
                <div className="mt-8 text-center md:text-left md:mt-0">
                    <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                        Hello there, I'm <span className="text-blue-400">MrMafu</span> <FontAwesomeIcon icon={faMugHot} />
                    </h1>

                    <p className="mt-2 text-base md:text-lg">
                        You can just call me <span className="text-blue-400">mafu</span>.
                    </p>

                    <div className="mt-2 text-base text-blue-400 md:mt-4 md:text-lg">
                        <Type />
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-3 mt-4 md:justify-start md:gap-4">
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
                                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] rounded-lg hover:border-none hover:bg-blue-400 hover:text-[var(--hover)] transition-colors duration-200 ease-in-out shadow-sm"
                                aria-label={social.label}>
                                <FontAwesomeIcon icon={social.icon} size="lg" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image profile */}
                <Image
                    src="/images/profile.jpeg"
                    alt="MrMafu's profile"
                    width={500}
                    height={500}
                    className="rounded-full object-cover shadow-md w-50 h-50 md:w-60 md:h-60 lg:w-80 lg:h-80"
                />
            </div>
        </div>
    )
}