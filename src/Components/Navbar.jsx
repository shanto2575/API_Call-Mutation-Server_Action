import { Link } from '@heroui/react'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/server-action">Server-Action</Link></li>
                    </ul>
                    <div></div>
                </header>
            </nav>
        </div>
    )
}

export default Navbar