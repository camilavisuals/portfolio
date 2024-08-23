import React from 'react';
import { Carousel } from 'react-bootstrap';
import conteudo from '../assets/logos/conteudo.png';
import viralata from '../assets/logos/viralata.png';
import globoplay from '../assets/logos/globoplay.png';
import globo from '../assets/logos/globo.png';
import megatrax from '../assets/logos/megatrax.png';
import souzacruz from '../assets/logos/souzacruz.png';
import unimed from '../assets/logos/unimed.png';
import magalu from '../assets/logos/magalu.png';
import ubisoft from '../assets/logos/ubisoft.png';
import bradesco from '../assets/logos/bradesco.png';
import promoshin from '../assets/logos/promoshin.png';
import agm from '../assets/logos/agm.png';
import { useTranslation } from 'react-i18next';

export const CarouselLogo = () => {
  
  const { t } = useTranslation();

  const logos = [
    { src: conteudo, alt: 'Conteúdo Filmes' },
    { src: viralata, alt: 'Viralata Produções' },
    { src: globoplay, alt: 'Globoplay' },
    { src: globo, alt: 'TV Globo' },
    { src: megatrax, alt: 'Megatrax' },
    { src: souzacruz, alt: 'Souza Cruz' },
    { src: unimed, alt: 'Unimed' },
    { src: magalu, alt: 'Magazine Luiza' },
    { src: ubisoft, alt: 'Ubisoft Brasil' },
    { src: bradesco, alt: 'Bradesco' },
    { src: promoshin, alt: 'Promoshin' },
    { src: agm, alt: 'Adam Grubb Media' },
  ];

  return (
    <div className='div-carousel'>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {t('carousel.title')}
      </h2>
      <Carousel interval={2000} indicators={false} controls={true} className="logo-carousel">
        {logos.map((logo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block mx-auto logo-image"
              src={logo.src}
              alt={logo.alt}
              style={{ height: '80px' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};