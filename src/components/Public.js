import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>LandingPage</h1>
            </header>
            <main>
                <Link to="/login">Login</Link>
            </main>
            <footer>
            </footer>
        </section>

    )
    return content
}
export default Public