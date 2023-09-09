import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Trailer = ({ movie }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 transition duration-500 hover:bg-gray-600" onClick={openModal}>Play Trailer</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ReactPlayer url={movie?.video} />
            </Modal>
        </div>
    );
}

export default Trailer