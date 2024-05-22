import Modal from 'react-modal';
Modal.setAppElement('#root')


export default function ImageModal({onOpen, onClose, children}) {
    return (
        <Modal
            isOpen={onOpen}
            onRequestClose={() => onClose(false)}
        >
            
            {children}

        </Modal>
)}