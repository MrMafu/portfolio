import React from "react";
import Image from "next/image";

interface Props {
    label: string;
    src: string;
}

export default function SkillCard({ src, label }: Props) {
    return (
        <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center justify-center p-2 bg-blue-400/15 rounded-full w-18 h-18 md:p-3 md:w-20 md:h-20">
                <Image src={src} alt={label} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <p className="text-sm md:text-base">{label}</p>
        </div>
    )
}