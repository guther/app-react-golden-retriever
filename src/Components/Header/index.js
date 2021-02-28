import { Link } from "react-router-dom"
import "./styles.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <Link className="logo" to="/" style={{ backgroundImage: "url(/img/logo.png)" }}>
                    <p>Golden Retriever</p>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">A Raça</Link>
                        </li>
                        <li>
                            <Link to="/condicaofisica">Condição Física</Link>
                        </li>
                        <li>
                            <Link to="/personalidade">Personalidade</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <svg style={{ backgroundColor: "cadetblue" }} xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fff"><path d="M0 100 C 20 0 50 0 100 100 Z"></path></svg>
        </>
    )
}

export default Header;