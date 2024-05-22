import Modal from 'react-modal';
import css from './ImageModal.module.css'
Modal.setAppElement('#root')


export default function ImageModal({onOpen, onClose, children}) {
    return (
        <Modal
            isOpen={onOpen}
            overlayClassName={css.overlay}
            className={css.content}
            onRequestClose={() => onClose(false)}
            ariaHideApp={false}
        >
            
            {children}

        </Modal>
)}