import { Link } from "@heroui/react";
import { ThemeSwitch } from './../theme/ThemeSwitch';

const Navbars = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">Shanto</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/product">Product</Link></li>
                    </ul>
                    <div>
                        <ThemeSwitch></ThemeSwitch>
                    </div>
                </header>
            </nav>
        </div>
    )
}

export default Navbars