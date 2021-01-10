import './styles.css';
import { Reactomponent as YoutubeIcon } from './youtube.svg';
import { Reactomponent as LinkedinIcon } from './linkedin.svg';
import { Reactomponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="http://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="http://www.lindekin/school/devsuperior" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="http://www.instagram.com/devsuperior.ig" target="_new">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    );
}
export default Footer;