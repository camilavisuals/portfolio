import { Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/photo.jpeg';

export const AboutMe = () => {
    const { t } = useTranslation();

    const startYear = 2016;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    return (
        <div id="aboutMe" className="about-content-wrapper">
            <h2>{t('aboutMe.title')}</h2>
            <div className="about-row">
                <Col>
                    <div className="about-img">
                        <img src={photo} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="about-text">
                        <p>
                            {t('aboutMe.intro', { years: yearsOfExperience })}
                        </p>
                        <p>
                            {t('aboutMe.personalNote')}
                        </p>
                    </div>
                </Col>
            </div>
        </div>
    )
};