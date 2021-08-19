import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <Link href={'/user'}>
                <a>Usuarios</a>
            </Link>
            <Link href={'/post'}>
                <a>Posts</a>
            </Link>
        </nav>
    )
}

export default Navbar
