import Link from "next/link"
import headerStyles from "../styles/Header.module.css"

const Nav = () => {
    return (
        <header>
            <p className ={headerStyles.logo}>My Website</p>
            <nav>
                <ul className={headerStyles.nav__links}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/aboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <a href="https://medium.com/@hjkim6321">Medium</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
