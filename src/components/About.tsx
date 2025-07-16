import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function About({ id }: { id: string }) {
    return (
        <div id={id} className="min-h-screen flex flex-col items-center justify-center px-4 py-8 scroll-mt-10 md:scroll-mt-16">
            <h1 className="text-3xl font-bold md:text-4xl">
                About Me <FontAwesomeIcon icon={faMugHot} className="text-blue-400" />
            </h1>

            {/* Image profile */}
            <Image
                src="/images/profile.jpeg"
                alt="MrMafu's profile"
                width={500}
                height={500}
                className="flex-shrink-0 mt-4 rounded-full object-cover shadow-md w-38 h-38 md:w-48 md:h-48"
            />

            {/* Text box */}
            <div className="w-full max-w-3xl mt-4 p-4 space-y-2 rounded-md text-base border border-[var(--border)] shadow-lg md:text-lg">
                <p>
                    Hey there! I'm a <span className="text-blue-400">programmer</span> who enjoys working
                    on the foundational side of things, particularly with
                    <span className="text-blue-400"> backend development</span>. I like building the
                    systems that make applications run smoothly behind the scenes and I'm always keen on
                    bringing unique ideas into creation. And while that's where I focus most of my energy,
                    I'm also comfortable with <span className="text-blue-400">frontend development </span>
                    and can contribute to making user interfaces enjoyable!
                </p>
                <p>
                    Outside of applications, I'm also an <span className="text-blue-400">indie game
                    developer</span>. I really enjoy the creative process of building game worlds and
                    crafting engaging experiences. At the core of it all, whether it's optimizing a
                    backend process or bringing a game idea to life, I find a lot of satisfaction in
                    <span className="text-blue-400"> problem-solving</span> with code.
                </p>
            </div>
        </div>
    )
}