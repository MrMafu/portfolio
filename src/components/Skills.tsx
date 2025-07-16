"use client";

import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./theme/ThemeContext";

import SkillCard from "./cards/SkillCard";

type Skill = {
    label: string;
    src: string;
    darkSrc?: string;
}

type Tab = {
    id: string;
    name: string;
    skills: string[];
}

const tabs: Tab[] = [
    {
        id: "languages",
        name: "Languages",
        skills: ["Java", "JavaScript", "TypeScript", "Python", "PHP"]
    },
    {
        id: "backend",
        name: "Backend Techs",
        skills: ["Node.js", "Express.js", "Next.js", "Laravel"]
    },
    {
        id: "frontend",
        name: "Frontend Techs",
        skills: ["HTML5", "CSS", "React", "Next.js", "Tailwind CSS"]
    },
    {
        id: "databases",
        name: "Databases",
        skills: ["MySQL", "PostgreSQL"]
    },
    {
        id: "tools",
        name: "Tools / Others",
        skills: ["GitHub", "Git", "Unity", "Flutter"]
    }
];

const skills: Skill[] = [
    { label: "Java",         src: "/images/techs/java.svg"                                                          },
    { label: "JavaScript",   src: "/images/techs/javascript.svg"                                                    },
    { label: "TypeScript",   src: "/images/techs/typescript.svg"                                                    },
    { label: "Python",       src: "/images/techs/python.svg"                                                        },
    { label: "PHP",          src: "/images/techs/php.svg"                                                           },
    { label: "Node.js",      src: "/images/techs/nodejs.svg"                                                        },
    { label: "Express.js",   src: "/images/techs/expressjs-black.svg", darkSrc: "/images/techs/expressjs-white.svg" },
    { label: "Next.js",      src: "/images/techs/nextjs-black.svg",    darkSrc: "/images/techs/nextjs-white.svg"    },
    { label: "Laravel",      src: "/images/techs/laravel.svg"                                                       },
    { label: "HTML5",        src: "/images/techs/html5.svg"                                                         },
    { label: "CSS",          src: "/images/techs/css.svg"                                                           },
    { label: "React",        src: "/images/techs/react.svg"                                                         },
    { label: "Tailwind CSS", src: "/images/techs/tailwindcss.svg"                                                   },
    { label: "MySQL",        src: "/images/techs/mysql.svg"                                                         },
    { label: "PostgreSQL",   src: "/images/techs/postgresql.svg"                                                    },
    { label: "GitHub",       src: "/images/techs/github-black.svg",    darkSrc: "/images/techs/github-white.svg"    },
    { label: "Git",          src: "/images/techs/git.svg"                                                           },
    { label: "Unity",        src: "/images/techs/unity-black.svg",     darkSrc: "/images/techs/unity-white.svg"     },
    { label: "Flutter",      src: "/images/techs/flutter.svg"                                                       },
];

export default function Skills({ id }: { id: string }) {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState<string>("languages");

    const currentTab = tabs.find(tab => tab.id === activeTab);
    const skillsToShow = skills.filter(skill => currentTab?.skills.includes(skill.label));

    return (
        <div id={id} className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 md:mb-8 md:text-4xl">
                My Skills <FontAwesomeIcon icon={faGears} className="text-blue-400" />
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`cursor-pointer px-4 py-2 text-sm md:text-base rounded-full transition-colors duration-200 ease-in-out ${
                            activeTab === tab.id
                                ? "bg-blue-400 text-white"
                                : "bg-blue-400/15"
                        }`}>
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Skills section */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 md:gap-6">
                {skillsToShow.map((skill) => (
                    <SkillCard
                        key={skill.label}
                        label={skill.label}
                        src={theme === "dark" && skill.darkSrc ? skill.darkSrc : skill.src}
                    />
                ))}
            </div>
        </div>
    )
}