
export default function Navbar(){
    return(
        <div>
            <nav>
                <div className="logo">
                    <img src="/src/assets/brand_logo.png" alt="" />
                </div>
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                    
                </ul>
                <button className="login">Login</button>
            </nav>
        </div>
    )
}