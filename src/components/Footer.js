import React from "react";
import TwitterIcon from "../images/Twitter-Icon.png";
import FacebookIcon from "../images/Facebook-Icon.png";
import InstagramIcon from "../images/Instagram-Icon.png";
import GitHubIcon from "../images/GitHub-Icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer__icons">
                <li className="footer__iconList"><a className="footer__link" href="javascript:void(0)"><img alt="Twitter Icon" sr-only="icon" src={TwitterIcon}/></a></li>
                <li className="footer__iconList"><a className="footer__link" href="javascript:void(0)"><img alt="Facebook Icon" sr-only="icon" src={FacebookIcon}/></a></li>
                <li className="footer__iconList"><a className="footer__link" href="javascript:void(0)"><img alt="Instagram Icon" sr-only="icon" src={InstagramIcon}/></a></li>
                <li className="footer__iconList"><a className="footer__link" href="javascript:void(0)"><img alt="GitHub Icon" sr-only="icon" src={GitHubIcon}/></a></li>
            </ul>
        </div>
    );
}