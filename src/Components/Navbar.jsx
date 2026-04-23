'use client'
import { Button, Link } from '@heroui/react'
import { signOut, useSession } from '@/lib/auth-client'

const Navbar = () => {
    const { data, isPending } = useSession()
    if (isPending) {
        return <div>Loading...</div>
    }
    const user = data?.user;
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold text-4xl bg-linear-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">Shanto</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/server-action">Server-Action</Link></li>
                    </ul>
                    <div className='flex gap-5 items-center'>
                        {
                            user ? <> <h2>{user.name}</h2>
                            <Button onClick={()=>signOut()}>SignOut</Button>
                            </>
                                :
                                <>
                                <Link href='/auth/signin'>SingIn</Link>
                                </>
                        }
                    </div>
                </header>
            </nav>
        </div>
    )
}

export default Navbar