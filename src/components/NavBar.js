import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import linkedin from '../assets/images/linkedin.png';
import behance from '../assets/images/behance.png';
import en from '../assets/images/en.png';
import pt from '../assets/images/ptbr.png';
import { VideoModal } from '../modals/VideoModal';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    }

    const handleBehanceClick = () => {
        window.open('https://www.behance.net/CamilaFernandes');
    }

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/camilafernandesdesign');
    }

    const handleDemoReelClick = () => {
        setVideoId('p5OfESbNVO4');
        setShow(true);
    };

    const handleClose = () => {setShow(false)}

    return (
        <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
            <Container className='navbar-collapse'>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            {t('navbar.home')}
                        </Nav.Link>
                        <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>
                            {t('navbar.aboutMe')}
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                            {t('navbar.projects')}
                        </Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                            {t('navbar.contact')}
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                id="dropdown-basic-button"
                                style={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    padding: '0',
                                }}
                            >
                                <img src={i18n.language === 'en' ? en : pt} alt={i18n.language === 'en' ? 'EN' : 'PT'} style={{ width: '24px' }} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: 0 }}>
                                <Dropdown.Item
                                    onClick={() => handleLanguageChange('en')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img src={en} alt="English" style={{ width: '24px' }} />
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => handleLanguageChange('pt')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img src={pt} alt="Português" style={{ width: '24px' }} />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className='social-icon'>
                            <button onClick={handleBehanceClick} className="nav-button"><img src={behance} alt='Behance' /></button>
                            <button onClick={handleLinkedInClick} className="nav-button"><img src={linkedin} alt='LinkedIn' /></button>
                        </div>
                        <button className='vvd' onClick={handleDemoReelClick}><span>{t('navbar.demoReel')}</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
            <VideoModal show={show} onClose={handleClose} videoId={videoId} />
        </Navbar>
    );
}