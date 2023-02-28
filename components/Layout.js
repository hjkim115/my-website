import Footer from "./Footer"
import Nav from "./Header"

const Layout = ({ children }) => {
    return (
        <>
            <Nav/>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
