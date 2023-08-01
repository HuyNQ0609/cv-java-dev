import "../css/header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav className={"navbar"}>
            <div className={"container"}>
                <div className={"row w-100"}>
                    <div className={"col-md-4 person-name"}>
                        <span className={"name-cv"}>Huy.</span>
                        <span className={"name-cv-color"}>Nguyen</span>
                    </div>
                    <div className={"col-md-8 flex-container fw-bold mt-3"}>
                        <div className={"flex-item me-5"}>
                            <Link to={"/about"}>About me</Link>
                        </div>
                        <div className={"flex-item me-5"}>
                            <Link to={"/skill"}>Skills</Link>
                        </div>
                        <div className={"flex-item me-5"}>
                            <Link to={"/experience"}>Experience</Link>
                        </div>
                        <div className={"flex-item me-5"}>
                            <Link to={"/education"}>Education</Link>
                        </div>
                        <div className={"flex-item me-5"}>
                            <Link to={"/project"}>Projects</Link>
                        </div>
                        <div className={"flex-item me-5"}>
                            <Link to={"/certificate"}>Certificates</Link>
                        </div>
                        <div className={"flex-item me-5"}>
                            <Link to={"/contact"}>Contact me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}