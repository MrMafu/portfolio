import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

interface Props {
    link: string;
    title: string;
    desc: string;
    src?: string;
}

export default function ProjectCard({ link, title, desc, src }: Props) {
    return (
        <div className="project-card h-full flex flex-col space-y-2 p-4 border border-[var(--border)] rounded-lg shadow-sm">
            <div className="aspect-video rounded-lg overflow-hidden flex items-center justify-center">
                {src ? (
                    <Image
                        src={src}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <FontAwesomeIcon icon={faFolderOpen} className="text-5xl text-blue-400" />
                )}
            </div>
            <h1 className="text-base font-semibold text-blue-400 md:text-lg">{title}</h1>
            <p className="flex-grow text-sm md:text-base">{desc}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start group cursor-pointer px-4 py-2 bg-blue-400 text-white rounded-lg transition-colors duration-200 ease-in-out hover:bg-blue-500"
                aria-label={title}>
                Open <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
        </div>
    )
}