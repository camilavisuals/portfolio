import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import whatsapp from '../assets/images/whatsapp.png';
import email from '../assets/images/email.png';
import linkedin from '../assets/images/linkedin.svg';

export const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: ''
    });
    const [emailError, setEmailError] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            if (isValidEmail(value)) {
                setEmailError('');
            } else {
                setEmailError(t('contact.emailError'));
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError) {
            toast.error(t('contact.toastInvalidEmail'));
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject
        };

        emailjs.send('service_gxs1el6', 'template_tjj2j39', templateParams, '6y59MNrnk_prHp4O-')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                toast.success(t('contact.toastSuccess'));
            }, (error) => {
                console.log('Failed to send email:', error.text);
                toast.error(t('contact.toastError'));
            });
    };

    useEffect(() => {
        if (selectedOption === 'whatsapp') {
            window.open('https://api.whatsapp.com/send?phone=5521995282353');
        } else if (selectedOption === 'linkedin') {
            window.open('https://www.linkedin.com/in/camilafernandesdesign');
        }
    }, [selectedOption]);

    return (
        <div id="contact" className="contact">
            <h2 style={{ textAlign: 'center' }}>{t('contact.title')}</h2>
            <p>{t('contact.description')}</p>
            <div className="d-flex justify-content-center button-group-mobile mb-5">
                <Button
                    className="custom-button me-3"
                    onClick={() => setSelectedOption('whatsapp')}
                >
                    <img src={whatsapp} alt='WhatsApp' className="icon-contact" />
                    {t('contact.whatsappButton')}
                </Button>
                <Button
                    className="custom-button me-3"
                    onClick={() => setSelectedOption('email')}
                >
                    <img src={email} alt='Email' className="icon-contact" />
                    {t('contact.emailButton')}
                </Button>
                <Button
                    className="custom-button"
                    onClick={() => setSelectedOption('linkedin')}
                >
                    <img src={linkedin} alt='LinkedIn' className="icon-contact" />
                    {t('contact.linkedinButton')}
                </Button>
            </div>
            {selectedOption === 'email' && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>{t('contact.nameLabel')}</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder={t('contact.namePlaceholder')}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>{t('contact.emailLabel')}</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder={t('contact.emailPlaceholder')}
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!emailError}
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='email-error'>
                            {emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formSubject">
                        <Form.Label>{t('contact.subjectLabel')}</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="subject"
                            rows={3}
                            placeholder={t('contact.subjectPlaceholder')}
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex mb-5 justify-content-center">
                        <Button variant="outline-light" type="submit">
                            {t('contact.submitButton')}
                        </Button>
                    </div>
                </Form>
            )}
        </div>
    );
};