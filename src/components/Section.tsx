import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    /** id for anchor linking */
    id?: string;
    /** full viewport height (Hero) */
    fullHeight?: boolean;
}

export default function Section({
    id,
    fullHeight = false,
    className = '',
    children
}: SectionProps) {
    return (
        <section
            id={id}
            className={
                `${fullHeight ? 'h-screen' : 'min-h-screen'} ` +
                `bg-[var(--background)] text-[var(--foreground)] ` +
                className
            }>
            {children}
        </section>
    );
}