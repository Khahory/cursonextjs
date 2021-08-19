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
            <style jsx>
                {`
                  nav {
                    padding-top: 10px;
                  }

                  a {
                    padding: 0 10px;
                  }
                `}
            </style>
        </nav>
    )
}

export default Navbar
