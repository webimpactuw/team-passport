import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="home-link">Home</a>
                <div className="nav-elements">
                    <ul>
                        <li><a href="#">Section 1</a></li>
                        <li><a href="#">Section 2</a></li>
                        <li><a href="#">Section 3</a></li>
                        <li><a href="#">Section 4</a></li>
                        <li><a href="#">Section 5</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
