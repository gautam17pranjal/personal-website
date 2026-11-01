import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {trackEvent} from "@/module/core/lib/service/analytics.service";

// the initial theme is applied by the inline script in pages/_document.tsx to avoid a flash on load
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));

        // follow the system theme until the visitor picks one explicitly
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onSystemChange = (event: MediaQueryListEvent) => {
            if (localStorage.getItem("theme")) return;
            document.documentElement.classList.toggle("dark", event.matches);
            setIsDark(event.matches);
        };
        media.addEventListener("change", onSystemChange);
        return () => media.removeEventListener("change", onSystemChange);
    }, []);

    const toggleTheme = () => {
        const nextIsDark = !isDark;
        document.documentElement.classList.toggle("dark", nextIsDark);
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");
        setIsDark(nextIsDark);
        trackEvent("theme_toggle", {theme: nextIsDark ? "dark" : "light"});
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 p-1 sm:p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-500"
        >
            {
                // render a fixed-size placeholder until mounted so server and client markup match
                isDark === null ? <span className="block h-5 w-5" />
                    : isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />
            }
        </button>
    )
}

export default ThemeToggle;
