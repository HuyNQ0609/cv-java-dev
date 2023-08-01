import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function PersonalInfo() {
    function handleContact() {
    }

    function handleDownload() {
    }

    return (
        <div className={"container pt-lg-4"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <img className={"w-75"}
                         src="/images/image01.png"
                         alt={""}/>
                </div>
                <div className={"col-8"}>
                    <h2>I am Huy.</h2>
                    <p>I'm a Web Developer who has just graduated and has less than 1 year of experience in the field
                        of information technology. Despite my limited experience, I have acquired the knowledge to
                        create basic web pages. My goal is to become a professional web developer and contribute to
                        building the best web applications.
                    </p>
                    <p>I am always seeking opportunities to learn and improve my skills, as well as getting involved in
                        exciting projects to apply what I have learned. I aspire to become a key member of a development
                        team, always ready to support my colleagues and integrate into a new working environment.
                    </p>
                    <p>I believe that dedication and perseverance will help me achieve success in this field. I am
                        passionate about web development and excited to continue growing in this ever-evolving
                        industry.
                    </p>
                    <div className={"row pt-lg-3"}>
                        <div className={"col-7"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th><small>PHONE</small></th>
                                    <td className={"px-lg-5"}>(84)-976620098</td>
                                </tr>
                                <tr>
                                    <th><small>EMAIL</small></th>
                                    <td className={"px-lg-5"}>nguyenhuy06092001@gmail.com</td>
                                </tr>
                                <tr>
                                    <th><small>ADDRESS</small></th>
                                    <td className={"px-lg-5"}>167 Phuong Mai, Dong Da, Ha Noi</td>
                                </tr>
                                <tr>
                                    <th><small>SOCIAL</small></th>
                                    <td className={"px-lg-5"}>
                                        <FontAwesomeIcon className={"pe-lg-3"} icon={faFacebook}/>
                                        <FontAwesomeIcon className={"pe-lg-3"} icon={faGithub}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={"col-5"}>
                            <div>
                                <button type={"submit"}
                                        onClick={handleContact()}
                                        className={"btn btn-primary w-50"}>
                                    Contact me
                                </button>
                            </div>
                            <div className={"pt-4"}>
                                <button type={"submit"}
                                        onClick={handleDownload()}
                                        className={"btn btn-secondary w-50"}>
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}