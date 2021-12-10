import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://augnitive.com/wp-content/uploads/2019/10/reactbanner.png" alt="" />
        </div>
    )
}
