import "./style.css";
import { Icon } from '@iconify/react';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="conteiner">
                <div className="footer-item">
                    <div className="social">
                        <div className="social-stec">
                            <Icon className="profile-icon" icon="pajamas:paper-airplane" style={{ color: "#323232" }} />
                            <a href="" target="_blank">tg</a>
                        </div>
                        <div className="social-stec">
                            <Icon className="profile-icon" icon="material-symbols:youtube-activity" style={{ color: "#323232" }} />
                            <a href="https://www.youtube.com/" target="_blank">youtube</a>
                        </div>
                        <div className="social-stec">
                            <Icon className="profile-icon" icon="pajamas:github" style={{ color: "#323232" }} />
                            <a href="https://github.com/KuromiVoid1007" target="_blank">git</a>
                        </div>
                        <div className="social-stec">
                            <Icon className="profile-icon" icon="tabler:brand-gmail" style={{ color: "#323232" }} />
                            <a href="" target="_blank">mail</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;