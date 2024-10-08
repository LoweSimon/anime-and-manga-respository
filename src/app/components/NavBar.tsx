import Link from "next/link";

export default function NavBar() {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start container">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>

            {/* Mobile Navbar */}
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/anime-zone">Anime Zone</ Link></li>
                    <li><Link href="/all-anime">All Anime</ Link></li>
                    <li><Link href="/all-manga">All Manga</ Link></li>
                </ul>
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/anime-zone">Anime Zone</ Link></li>
                <li><Link href="/all-anime">All Anime</ Link></li>
                <li><Link href="/all-manga">All Manga</ Link></li>
                </ul>
            </div>
        </div>
    )
}