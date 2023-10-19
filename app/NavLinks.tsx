import Link from "next/link";

function NavLinks() {
    return (
        <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-purple-400 underline-offset-4 font-bold text-lg'}`}>
            {category}
        </Link>
    )
}

export default NavLinks