import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VideoModal } from '../modals/VideoModal';
import superbotao from '../assets/thumbnails/superbotao.png';
import espacohall from '../assets/thumbnails/espacohall.png';
import posh from '../assets/thumbnails/posh.png';
import chadebebe from '../assets/thumbnails/chadebebe.webp';
import meetical from '../assets/thumbnails/meetical.png';
import bradesco from '../assets/thumbnails/bradesco.png';
import hadron from '../assets/thumbnails/hadron.png';
import centrestone from '../assets/thumbnails/centrestone.png';
import ringo from '../assets/thumbnails/ringo.png';
import corteva from '../assets/thumbnails/corteva.png';
import centrestone2 from '../assets/thumbnails/centrestone2.png';
import centrestone3 from '../assets/thumbnails/centrestone3.png';
import maxesam from '../assets/thumbnails/maxesam.png';
import toast from '../assets/thumbnails/toast.png';
import lawfirm from '../assets/thumbnails/lawfirm.png';
import fausto from '../assets/thumbnails/fausto.png';
import sobrehumanos from '../assets/thumbnails/sobrehumanos.png';
import ballet from '../assets/thumbnails/ballet.png';
import souzacruz from '../assets/thumbnails/souzacruz.png';
import neoenergia from '../assets/thumbnails/neoenergia.png';
import unimedrio from '../assets/thumbnails/unimedrio.png';
import megareel2019 from '../assets/thumbnails/megareel2019.png';
import megareel2022 from '../assets/thumbnails/megareel2022.png';
import prosecurity from '../assets/thumbnails/prosecurity.png';
import aiabooth from '../assets/thumbnails/aiabooth.png';
import linhatenue from '../assets/thumbnails/linhatenue.png';
import wam from '../assets/thumbnails/wam.png';
import collab from '../assets/thumbnails/collab.png';
import ringo2 from '../assets/thumbnails/ringo2.png';
import cresus from '../assets/thumbnails/cresus.png';
import jackpotbob from '../assets/thumbnails/jackpotbob.png';
import lucky8 from '../assets/thumbnails/lucky8.png';
import poseidon from '../assets/thumbnails/poseidon.png';
import gplaymaratona from '../assets/thumbnails/gplaymaratona.png';
import bienal from '../assets/thumbnails/bienal.png';
import inovateca from '../assets/thumbnails/inovateca.png';
import ctgbrasil from '../assets/thumbnails/ctgbrasil.png';
import lancamentofpm from '../assets/thumbnails/lancamentofpm.png';
import papelex from '../assets/thumbnails/papelex.png';
import retrato from '../assets/thumbnails/retrato.png';
import bbb21 from '../assets/thumbnails/bbb21.png';
import geguia from '../assets/thumbnails/geguia.png';
import bbb21on from '../assets/thumbnails/bbb21on.png';
import globoplayup from '../assets/thumbnails/globoplayup.png';
import globoplayhuggies from '../assets/thumbnails/globoplayhuggies.png';
import pegaessaref from '../assets/thumbnails/pegaessaref.png';
import cenaaberta from '../assets/thumbnails/cenaaberta.png';
import aaa from '../assets/thumbnails/aaa.png';
import rio2c2019 from '../assets/thumbnails/rio2c2019.png';
import gplayface from '../assets/thumbnails/gplayface.png';
import royaalshort from '../assets/thumbnails/royaalshort.png';
import cakebake from '../assets/thumbnails/cakebake.png';
import aiaboothshort from '../assets/thumbnails/aiaboothshort.png';
import innout from '../assets/thumbnails/innout.png';
import pmax from '../assets/thumbnails/pmax.png';
import pmax2 from '../assets/thumbnails/pmax2.png';
import cresusshort from '../assets/thumbnails/cresusshort.png';
import jackpotbobshort from '../assets/thumbnails/jackpotbobshort.png';
import lucky8short from '../assets/thumbnails/lucky8short.png';
import globoplay2019 from '../assets/thumbnails/globoplay2019.png';
import globoplay2020 from '../assets/thumbnails/globoplay2020.png';
import globoplay2021 from '../assets/thumbnails/globoplay2021.png';
import globoplay2022 from '../assets/thumbnails/globoplay2022.png';
import globoplay2023 from '../assets/thumbnails/globoplay2023.png';
import botoprime from '../assets/thumbnails/botoprime.png';
import silimed from '../assets/thumbnails/silimed.png';
import supergasbras from '../assets/thumbnails/supergasbras.png';
import edf from '../assets/thumbnails/edf.png';
import njexecutor from '../assets/thumbnails/njexecutor.png';
import unimedriooutubro from '../assets/thumbnails/unimedriooutubro.png';
import docesbolacoes from '../assets/thumbnails/docesbolacoes.webp';
import tickettoride from '../assets/thumbnails/tickettoride.webp';
import ubisoftbgs from '../assets/thumbnails/ubisoftbgs.jpg';
import ubisoftforward from '../assets/thumbnails/ubisoftforward.png';
import sacubisoft from '../assets/thumbnails/sacubisoft.webp';
import royaal from '../assets/thumbnails/royaal.webp';
import conquer from '../assets/thumbnails/conquer.png';
import { useTranslation } from 'react-i18next';

const VideoThumbnail = ({ video, handleShow, handleMouseEnter, handleMouseLeave, hoveredVideo, category }) => {
    const { id, thumbnail, alt } = video;

    const wrapperClassName = category === 'Social Media Short'
        ? 'tab-content-inside-wrapper-vertical'
        : 'tab-content-inside-wrapper';

    const divClassName = category === 'Social Media Short'
        ? 'col-md-2 d-flex justify-content-center mb-3 mt-3'
        : 'col-md-3 d-flex justify-content-center mb-3 mt-3';

    return (
        <div className={divClassName}>
            {hoveredVideo === id ? (
                <div onMouseLeave={() => handleMouseLeave()} className={wrapperClassName}>
                    <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
                        title="YouTube video player"
                        className='tab-content-inside-wrapper-iframe'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <img
                    src={thumbnail}
                    alt={alt}
                    className={wrapperClassName}
                    onClick={() => handleShow(id)}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                />
            )}
        </div>
    );
};

const toCamelCase = (str) => {
    return str
        .replace(/-\s*(.)/g, (match, group1) => group1.toUpperCase())
        .replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (match, group1) => group1.toLowerCase());
};

export const Projects = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [activeKey, setActiveKey] = useState('2D Animation');

    const handleShow = (videoId) => {
        setVideoId(videoId);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleMouseEnter = (videoId) => {
        const timeout = setTimeout(() => {
            setHoveredVideo(videoId);
        }, 1000);
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setHoveredVideo(null);
    };

    const videoData = {
        "2D Animation": [
            { id: 'H3iVYPMer2A', thumbnail: superbotao, alt: 'Superbotão' },
            { id: 's2q58KuQAEs', thumbnail: espacohall, alt: 'Vídeo de Segurança Espaço Hall' },
            { id: 'Cc72p2ANyas', thumbnail: posh, alt: 'POSH - Security Briefing - Gangway' },
            { id: 'A_aE-oATL5s', thumbnail: chadebebe, alt: 'Lista Chá de Bebê Magalu' },
            { id: 'T2m2eWMQtbo', thumbnail: meetical, alt: 'Meetical Software' },
            { id: '1hsjQqSKdW4', thumbnail: bradesco, alt: 'Bradesco' },
            { id: 'bSfsWyTL9Sk', thumbnail: hadron, alt: 'Hadron International' },
            { id: 'H-5MsgZHz9Q', thumbnail: centrestone, alt: 'Centrestone Jewellery Insurance #2' },
            { id: 'nDRH6hha0Q8', thumbnail: ringo, alt: 'Ringo Jewellery Insurance' },
            { id: 'A7CCjTp6Vwk', thumbnail: corteva, alt: 'Corteva - Floxcor Product' },
            { id: 'TXdkanhlY0Y', thumbnail: centrestone2, alt: 'Centrestone Jewellery Insurance #5' },
            { id: 'R8iBpB098oA', thumbnail: centrestone3, alt: 'Superbotão' },
        ],
        "Hand-drawn Animation": [
            { id: 'D7MhNRaImko', thumbnail: maxesam, alt: 'Max e Sam' },
            { id: '1hbXaAO7MvI', thumbnail: toast, alt: 'Toast' },
            { id: 'hmxQHRNeedc', thumbnail: lawfirm, alt: 'The Law Firm Growth Machine' },
            { id: 'HRcsX29JppE', thumbnail: fausto, alt: 'Fausto Rivas - Rossis Popcorn Family Saga' },
        ],
        "Institutional Video": [
            { id: '9DGwSua371w', thumbnail: sobrehumanos, alt: 'Sobre Humanos' },
            { id: 'pJ4NixRfJeA', thumbnail: ballet, alt: 'Ballet: Melhores Momentos' },
            { id: 'tqASKjIkQyA', thumbnail: souzacruz, alt: 'Souza Cruz' },
            { id: 'gSkbKTuGTCQ', thumbnail: neoenergia, alt: 'Neoenergia: Programa de Visitas' },
            { id: '5XtpZ2xwhQ4', thumbnail: unimedrio, alt: 'UTI Web' },
            { id: 'wCbnMyYmsI4', thumbnail: megareel2019, alt: 'Demoreel 2019' },
            { id: 'ELWhZq7RTIM', thumbnail: megareel2022, alt: 'Demoreel 2022' },
            { id: 'qnOMNLys8yw', thumbnail: prosecurity, alt: 'Pro Security - Golf Simulator' },
            { id: '6bM2y-wbGEE', thumbnail: aiabooth, alt: 'AIA Booth' },
        ],
        "Intro": [
            { id: 'XMDeDPKkRKM', thumbnail: linhatenue, alt: 'Linha Tênue' },
        ],
        "Logo Animation": [
            { id: 'Aj80i1AxUIw', thumbnail: wam, alt: 'WAM Publicidade' },
            { id: '5RZ5OcDsruI', thumbnail: collab, alt: 'Collaborative Solutions Inc' },
            { id: 'j3EJCu8kF9I', thumbnail: ringo2, alt: 'Ringo Jewellery Insurance - Logo Animation' },
            { id: 'WKKJs7_2lw0', thumbnail: cresus, alt: 'Cresus Casino' },
            { id: 'afGX5XkCM8E', thumbnail: jackpotbob, alt: 'Jackpot Bob' },
            { id: 'JLtPjGmxPqw', thumbnail: lucky8, alt: 'Lucky8' },
        ],
        "Motion Graphics": [
            { id: 'yrTy2TmY0H8', thumbnail: poseidon, alt: 'Vídeo de Segurança Poseidon' },
            { id: 'V2aO0N0b-LA', thumbnail: bienal, alt: 'Bienal do Livro 2021' },
            { id: 'wMTxPC7o69M', thumbnail: inovateca, alt: 'Inovateca' },
            { id: 'MUp_55XdpeI', thumbnail: ctgbrasil, alt: 'CTG Brasil: Mini documentário' },
        ],
        "Promo": [
            { id: 'uh_UKMmLVU8', thumbnail: lancamentofpm, alt: 'Lançamento FPM' },
            { id: 'RLLaBxTnZKA', thumbnail: papelex, alt: 'Papelex' },
            { id: 'JOSAzFsbMTY', thumbnail: retrato, alt: 'Retrato' },
            { id: 's9sBGZQrAGw', thumbnail: bbb21, alt: 'BBB21' },
            { id: 'YfjPN7taqLs', thumbnail: geguia, alt: 'GE Guia' },
            { id: '7nDxB4kOB2s', thumbnail: bbb21on, alt: 'BBB21 ON' },
            { id: 'ONfnnr4lLag', thumbnail: globoplayup, alt: 'Globoplay UP' },
            { id: 'NdDT2VUPB0s', thumbnail: gplaymaratona, alt: 'Globoplay: Maratona Patrocinada' },
            { id: 'MGmL7vkwZ0o', thumbnail: globoplayhuggies, alt: 'Globoplay Huggies' },
            { id: 'hn5x-nJtC3M', thumbnail: pegaessaref, alt: 'Pega Essa Ref' },
            { id: 'RFR9JBo9T7M', thumbnail: cenaaberta, alt: 'Cena Aberta' },
            { id: 'YWjljBYSh88', thumbnail: aaa, alt: 'AAAHoosier'}
        ],
        "Social Media Short": [
            { id: 'akRnDUKGaIs', thumbnail: rio2c2019, alt: 'Rio2C 2019' },
            { id: 'vQaeK-04iQU', thumbnail: gplayface, alt: 'Globoplay Face' },
            { id: '14TD3UceD84', thumbnail: royaalshort, alt: 'Royaal Casino' },
            { id: 'pFv_1EOP7Hs', thumbnail: cakebake, alt: 'The Cake Bake Shop: Mothers Day' },
            { id: 'V5M8QJcEQ6c', thumbnail: aiaboothshort, alt: 'AIA Booth Short' },
            { id: 'tGph168geyk', thumbnail: innout, alt: 'In n Out' },
            { id: 'aC7uR2qeTKY', thumbnail: pmax, alt: 'Pmax' },
            { id: 'vY4wuEuzLj0', thumbnail: pmax2, alt: 'Pmax 2' },
            { id: 'Zy3zHotafEk', thumbnail: cresusshort, alt: 'Cresus Casino' },
            { id: 'ubmZJfwjgHo', thumbnail: jackpotbobshort, alt: 'Jackpot Bob'},
            { id: 'CnRD7Ax1Q7c', thumbnail: lucky8short, alt: 'Lucky8' },
        ],
        "Titles": [
            { id: 'yQ-j7iIUT9M', thumbnail: globoplay2019, alt: 'Globoplay 2019' },
            { id: 'Rh6nZ4r8Nfg', thumbnail: globoplay2020, alt: 'Globoplay 2020' },
            { id: 'UbRHvQU8QKQ', thumbnail: globoplay2021, alt: 'Globoplay 2021' },
            { id: '14_A-Kll9Gg', thumbnail: globoplay2022, alt: 'Globoplay 2022' },
            { id: 'mI81-6wLicU', thumbnail: globoplay2023, alt: 'Globoplay 2023' },
        ],
        "Video Presentation": [
            { id: 'ednRTRc2TTM', thumbnail: botoprime, alt: 'Botoprime' },
            { id: 'IEKwrmidB3A', thumbnail: silimed, alt: 'Silimed' },
        ],
        "Whiteboard Animation": [
            { id: 'PG2NglQd_nI', thumbnail: supergasbras, alt: 'Supergasbras' },
            { id: 'QWX07i1s4ao', thumbnail: edf, alt: 'EDF' },
            { id: 'hs6EQZaYFKc', thumbnail: njexecutor, alt: 'NJ Executor' },
        ],
        "YouTube": [
            { id: 'A02rO0aw6kM', thumbnail: unimedriooutubro, alt: 'Unimed Rio Outubro' },
            { id: 'zWP9MYaF9uQ', thumbnail: docesbolacoes, alt: 'Doces Bolacões' },
            { id: 'da8UKczmyoY', thumbnail: tickettoride, alt: 'Ticket to Ride' },
            { id: 'PAlTDkaDaY0', thumbnail: ubisoftbgs, alt: 'Ubisoft BGS' },
            { id: 'P59IlN6BynA', thumbnail: ubisoftforward, alt: 'Ubisoft Forward' },
            { id: 'uxPS7IDW9nc', thumbnail: sacubisoft, alt: 'SAC Ubisoft' },
            { id: 'B-9VjRxSGpM', thumbnail: royaal, alt: 'Royaal Casino' },
            { id: 'TU1dJp-D4eU', thumbnail: conquer, alt: 'Conquer Your Mountain' },
        ],
    };

    const renderVideos = (category) => {
        const sortedVideos = [...videoData[category]].reverse();
        return sortedVideos.map((video) => (
            <VideoThumbnail
                key={video.id}
                video={video}
                hoveredVideo={hoveredVideo}
                handleShow={handleShow}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                category={category}
            />
        ));
    };

    return (
        <div className="project" id="projects">
            <h2>{t('projects.title')}</h2>
            <p>{t('projects.description')}</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="2D Animation" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {Object.keys(videoData).map(key => (
                        <Nav.Item key={key}>
                            <Nav.Link eventKey={key}>{t(`projects.tabs.${toCamelCase(key)}`)}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Tab.Content>
                    {Object.keys(videoData).map((category) => (
                        <Tab.Pane eventKey={category} key={category}>
                            <div className='tab-content-wrapper'>
                                <div className="row d-flex justify-content-center">
                                    {renderVideos(category)}
                                </div>
                            </div>
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Tab.Container>
            <VideoModal show={show} onClose={handleClose} videoId={videoId} />
        </div>
    );
}