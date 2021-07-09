import React from 'react';
import "./Footer.css";
import { GrLinkedin } from 'react-icons/gr';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* colomn 1 */}
                    <div className="col">
                        <h4>MANUEL LINI</h4>
                        <ul className="list-unstyled">
                            <li>3393056462</li>
                            <li>Artogne(BS), Italia</li>
                            <li>Via valeriana 31</li>
                        </ul>
                    </div>
                    {/* colomn 3 */}
                    <div className="col">
                        <h4>SOCIAL</h4>
                        <ul className="list-unstyled">
                            <li><a className="scrollMapp" href="https://www.linkedin.com/in/manuel-lini-a553941bb/"><GrLinkedin size={25}/> Linkedin</a></li>
                            <li><a className="scrollMapp" href="https://github.com/LiniManuel"><AiFillGithub size={25}/> GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} MANUEL LINI | ALL RIGHT RESERVED | TERMS OF SERVICE | PRIVACY
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;