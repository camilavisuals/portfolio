import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const VideoModal = ({ show, onClose, videoId }) => {
    const { t } = useTranslation();
    const handleClose = () => { onClose(); };

    return (
        <Modal
            show={show}
            onHide={onClose}
            size="xl"
            style={{ marginTop: '6%' }}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body style={{ padding: 0 }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0,
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={t('videoModal.iframeTitle')}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t('videoModal.closeButton')}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};