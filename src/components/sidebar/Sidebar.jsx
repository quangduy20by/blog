import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src="./image/img5.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel omnis repudiandae quis est id maiores recusandae praesentium aliquam ut ipsa.</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">REACT</li>
                    <li className="sideBarListItem">PHP</li>
                    <li className="sideBarListItem">JAVA</li>
                    <li className="sideBarListItem">VUEJS</li>
                    <li className="sideBarListItem">ANGULAR</li>
                    <li className="sideBarListItem">NODEJS</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FLOW US</span>
                <div className="sideBarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
