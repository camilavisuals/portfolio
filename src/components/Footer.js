import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    const yearNow = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <nav className="text-center mt-3 mb-3">
                        <a href="#home" className="footer-link">{t('footer.home')}</a>
                        <span style={{ marginLeft: 10, marginRight: 10 }}> | </span>
                        <a href="#aboutMe" className="footer-link">{t('footer.aboutMe')}</a>
                        <span style={{ marginLeft: 10, marginRight: 10 }}> | </span>
                        <a href="#projects" className="footer-link">{t('footer.projects')}</a>
                        <span style={{ marginLeft: 10, marginRight: 10 }}> | </span>
                        <a href="#contact" className="footer-link">{t('footer.contact')}</a>
                    </nav>
                </Row>
                <Row className="text-center">
                    <Col size={12}>
                        <p>{yearNow} ®Camila Design & Animation - {t('footer.rights')}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}