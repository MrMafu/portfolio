"use client";

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ProjectCard from "./cards/ProjectCard";

type Project = {
    link: string;
    title: string;
    desc: string;
    src?: string;
}

const projects: Project[] = [
    {
        link: "https://github.com/MrMafu/js-simple-calculator",
        title: "JS Simple Calculator",
        src: "/images/projects/js-simple-calculator.png",
        desc: "A simple & responsive calculator web application built using HTML, CSS, and JavaScript.",
    },
    {
        link: "https://mrmafu.itch.io/echoes",
        title: "Echoes",
        src: "/images/projects/echoes.png",
        desc: "Echoes is a 2D top-down puzzle and maze game that plunges players into the depths of a pitch-black maze.",
    },
    {
        link: "https://github.com/MrMafu/login-register-form",
        title: "PHP Login & Register Form",
        desc: "A simple login & register form built with PHP, MySQL, CSS.",
    },
]

export default function Projects({ id }: { id: string }) {
    // Tracks the card
    const [startIndex, setstartIndex] = useState(0);
    // Number of cards to show per view
    const [cardsPerView, setcardsPerView] = useState(3);
    // Stores the height of the tallest card
    const [maxHeight, setMaxHeight] = useState(0);

    const totalProjects = projects.length;

    // Adjust visible cards based on screen size
    useEffect(() => {
        const handleResize = () => {
            // Mobile
            if (window.innerWidth < 768) setcardsPerView(1);
            // Tablet
            else if (window.innerWidth < 1024) setcardsPerView(2);
            // Desktop
            else setcardsPerView(3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate max card height for current view
    useEffect(() => {
        const updateHeights = () => {
            const cards = document.querySelectorAll('.project-card');
            let max = 0;
            
            // Find tallest card in the current view
            cards.forEach(card => {
                if (card.clientHeight > max) max = card.clientHeight;
            });

            setMaxHeight(max);
        };

        // Delay to ensure DOM updates complete
        setTimeout(updateHeights, 50);
    }, [startIndex, cardsPerView]);

    // Navigation control flags
    const canGoBack = startIndex === 0;
    const canGoForward = startIndex >= totalProjects - cardsPerView;

    // Navigation handlers
    const goToPrev = () => {
        // Move backward
        if (!canGoBack) setstartIndex(prev => prev - 1);
    };

    const goToNext = () => {
        // Move forward
        if (!canGoForward) setstartIndex(prev => prev + 1);
    };

    return (
        <div id={id} className="min-h-screen flex flex-col items-center justify-center px-4 py-8 space-y-6 md:space-y-8 scroll-mt-10 md:scroll-mt-16">
            <h1 className="text-3xl font-bold md:text-4xl">
                My Projects <FontAwesomeIcon icon={faFolderOpen} className="text-blue-400" />
            </h1>

            <div className="relative w-full max-w-6xl">
                {/* Previous button */}
                {!canGoBack && (
                    <button
                        onClick={goToPrev}
                        className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-10 rounded-full bg-[var(--foreground)] text-[var(--background)] p-3 w-10 h-10 shadow-lg transition-all"
                        aria-label="Previous projects">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                    </button>
                )}

                {/* Next button */}
                {!canGoForward && (
                    <button
                        onClick={goToNext}
                        className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 flex items-center z-10 rounded-full bg-[var(--foreground)] text-[var(--background)] p-3 w-10 h-10 shadow-lg transition-all"
                        aria-label="Next projects">
                        <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                    </button>
                )}

                {/* Carousel container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${startIndex * (100 / totalProjects)}%)`,
                            width: `${(totalProjects / cardsPerView) * 100}%`
                        }}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-2"
                                style={{
                                    width: `${100 / totalProjects}%`,
                                    minHeight: maxHeight > 0 ? `${maxHeight}px` : "auto"
                                }}>
                                <div className="px-2 h-full">
                                    <ProjectCard
                                        link={project.link}
                                        title={project.title}
                                        desc={project.desc}
                                        src={project.src}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-center">
                Find more in my{" "}
                <a
                    href="https://github.com/MrMafu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 transition-colors duration-200 ease-in-out hover:text-blue-500"
                    aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                    {" "}GitHub{" "}
                </a>
                page!
            </h2>
        </div>
    )
}