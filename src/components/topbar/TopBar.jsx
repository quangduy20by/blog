import {Link} from "react-router-dom";
import "./topbar.css";
export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="toplistItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="toplistItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="toplistItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="toplistItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="toplistItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="./image/img3.png" alt="" />
                    ) :(
                        <ul className="topList">
                            <li className="toplistItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                            </li>
                            <li className="toplistItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                            </li>

                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
