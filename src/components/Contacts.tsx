"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faCircleUser, faComment, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Contacts({ id }: { id: string }) {
    const [state, handleSubmit, reset] = useForm("mrblznjd"); // Formspree form endpoint, change this to your own form endpoint.

    return (
        <div id={id} className="min-h-screen flex flex-col items-center justify-center px-4 py-8 scroll-mt-16">
            {/* Submitting overlay */}
            {state.submitting && (
                <div className="fixed inset-0 flex items-center justify-center bg-[var(--background)]/60 z-10">
                    <p className="text-xl font-semibold animate-pulse">Submitting…</p>
                </div>
            )}

            {/* Submitted overlay */}
            {state.succeeded && (
                <div
                    onClick={reset}
                    className="fixed inset-0 flex items-center justify-center bg-[var(--background)]/60 z-10 cursor-pointer">
                    <p className="text-xl font-semibold text-center px-4">
                        Email sent successfully!
                        <br/>
                        <span className="text-blue-400">(Click anywhere to close this)</span>
                    </p>
                </div>
            )}

            <h1 className="text-3xl font-bold mb-6 md:mb-8 md:text-4xl">
                Contact Me! <FontAwesomeIcon icon={faAt} className="text-blue-400" />
            </h1>

            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl lg:gap-12">
                {/* Contact form section */}
                <div className="w-full sm:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                            </div>
                            <input
                                required
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className="w-full pl-10 pr-3 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>

                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faCircleUser} className="text-gray-400" />
                            </div>
                            <input
                                required
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="w-full pl-10 pr-3 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>

                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />

                        <div className="relative">
                            <div className="absolute top-0 left-0 pl-3 pt-3 pointer-events-none">
                                <FontAwesomeIcon icon={faComment} className="text-gray-400" />
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                className="pl-10 pr-3 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent w-full h-40 resize-none"
                            />
                        </div>

                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="cursor-pointer w-full px-4 py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors duration-200 ease-in-out shadow-md">
                            Send Message <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>

                {/* Contact information section */}
                <div className="w-full sm:w-1/2">
                    <h2 className="text-xl font-bold mb-4 text-center md:text-2xl">
                        Or you can find me below here!
                    </h2>
                    
                    {/* Social links */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6 md:gap-4">
                        {[
                            { icon: faGithub,    url: "https://github.com/MrMafu",                              label: "GitHub"    },
                            { icon: faLinkedin,  url: "https://www.linkedin.com/in/kinan-radiaputra-aa052a372", label: "LinkedIn"  },
                            { icon: faXTwitter,  url: "https://x.com/mafuuuu",                                  label: "Twitter"   },
                            { icon: faInstagram, url: "https://www.instagram.com/mafuu.__",                     label: "Instagram" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 flex items-center justify-center border border-[var(--border)] rounded-full hover:border-none hover:bg-blue-400 hover:text-[var(--hover)] transition-colors duration-200 ease-in-out shadow-sm md:w-16 md:h-16"
                                aria-label={social.label}>
                                <FontAwesomeIcon icon={social.icon} size="2xl" />
                            </a>
                        ))}
                    </div>

                    {/* Contact cards */}
                    <div className="space-y-4">
                        {[
                            { 
                                icon: faEnvelope, 
                                title: "Email", 
                                value: "kinanradiaputra@gmail.com"
                            },
                            {
                                icon: faDiscord,
                                title: "Discord",
                                value: "mafu__."
                            }
                        ].map((contact, index) => (
                            <div 
                                key={index}
                                className="flex items-center border border-[var(--border)] rounded-lg p-3 md:p-4"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-400 text-white mr-3 md:w-12 md:h-12 md:mr-4">
                                    <FontAwesomeIcon icon={contact.icon} size="lg" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 md:text-sm">{contact.title}</p>
                                    <p className="font-medium text-sm md:text-base">{contact.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}