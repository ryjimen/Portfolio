import { useState, useEffect } from "react"

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]



function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect (() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        // Adds an event listener that triggers handleScroll when the page is scrolled.
        window.addEventListener("scroll", handleScroll)

        // Cleanup function to remove the scroll listener when the component is unmounted.
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`flex fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container flex items-center justify between">
                <a className="text-xl font-bold text-primary flex items-center"
                href="/">
                    <span className="relative z-10">
                        <span className="text-glow">R. Jimenez</span>
                    </span>
                </a>
            </div>
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href = {item.href}>
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar