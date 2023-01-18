import React from "react";
import ProfileImage from "../images/Profile-Image.png";
import EmailIcon from "../images/Email-Icon.png";
import LinkedinIcon from "../images/Email-Icon.png";

export default function Info() {
    return (
        <div className="info">
            <img alt="Profile Image" sr-only="image" src={ProfileImage} className="info__image" />
            <div className="info__box">
                <h2 className="info__name">Laura Smith</h2>
                <p className="info__position">Frontend Developer</p>
                <p className="info__website">laurasmith.website</p>
                <div className="info__social">
                    <a href="javascript(0);" className="info__btn info__btn--1"><img alt="Email Icon" sr-only="icon"  src={EmailIcon}className="info__icon"/><span>Email</span></a>
                    <a href="javascript(0);" className="info__btn info__btn--2"><img alt="Linkedin Icon" sr-only="icon"  src={LinkedinIcon} className="info__icon"/><span>Linkedin</span></a>
                </div>
            </div>
        </div>
    );
}