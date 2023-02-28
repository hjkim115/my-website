import Link from "next/link"
import footerStyles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.footer_content}>
            <p>My Website</p>
            <ul className={footerStyles.pages}>
                <li>
                    <Link href="/aboutMe">About me</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="https://medium.com/@hjkim6321">Medium</Link>
                </li>
            </ul>
            </div>
            <div className={footerStyles.footer_bottom}>
                <p>copyright &copy;2023 My Website. designed by <span>Hyunjae Kim</span></p>
            </div>
        </footer>
    )
}

export default Footer
