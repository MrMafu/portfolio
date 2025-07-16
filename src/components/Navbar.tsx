"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faFolderOpen, faGears, faHouse, faMugHot } from "@fortawesome/free-solid-svg-icons";

const navItems = [
    { id: "home", icon: faHouse, label: "Home" },
    { id: "about", icon: faMugHot, label: "About" },
    { id: "skills", icon: faGears, label: "Skills" },
    { id: "projects", icon: faFolderOpen, label: "Projects" },
    { id: "contacts", icon: faAt, label: "Contacts" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            // Get the navbar height for offset calculation
            const navbar = document.querySelector("header");
            const navbarHeight = navbar?.clientHeight || 0;
            const scrollPosition = window.scrollY + navbarHeight + 50;

            // Find the current active section
            const sections = navItems.map(item => {
                const element = document.getElementById(item.id);
                return element ? {
                    id: item.id,
                    offsetTop: element.offsetTop,
                    offsetBottom: element.offsetTop + element.clientHeight
                } : null;
            }).filter(Boolean);

            // Determine the active section based on scroll position
            const currentSection = sections.find(
                section =>
                    scrollPosition >= section!.offsetTop &&
                    scrollPosition < section!.offsetBottom
            );

            if (currentSection && currentSection.id !== activeSection) {
                setActiveSection(currentSection.id);
            }
        };

        handleScroll();

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    // Set navbar height as CSS variable
    useEffect(() => {
        const setNavbarHeight = () => {
            const navbar = document.querySelector("header");
            if (navbar) {
                const height = navbar.offsetHeight;
                document.documentElement.style.setProperty("--navbar-height", `${height}px`);
            }
        };

        setNavbarHeight();
        window.addEventListener("resize", setNavbarHeight);

        return () => window.removeEventListener("resize", setNavbarHeight);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        // Smooth scrolling here depends on the browser (which may vary)
        // TODO: make a custom scrolling or use a polyfill
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="w-full fixed top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-4 py-3 md:py-4 md:px-8 lg:px-12">
            <div className="flex items-center gap-3">
                <Image
                    src="/images/profile.jpeg"
                    alt="MrMafu's profile"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                />
                <h1 className="text-xl font-semibold text-blue-400">MrMafu</h1>
            </div>
            <ul className="flex items-center gap-4 text-sm sm:text-base md:gap-8 lg:gap-12 md:text-lg">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer flex items-center gap-1 sm:gap-2 transition-colors ease-in-out ${activeSection === item.id
                                ? "text-blue-400 font-medium underline decoration-2 underline-offset-6"
                                : "hover:text-blue-400"
                            }`}
                        onClick={() => scrollToSection(item.id)}>
                        <FontAwesomeIcon icon={item.icon} />
                        <span className="hidden sm:inline">{item.label}</span>
                    </li>
                ))}
            </ul>
        </header>
    );
}