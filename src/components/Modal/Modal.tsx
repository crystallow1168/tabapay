import './Modal.css';

interface ModalProps {
  itemName: string;
  open: boolean;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const { itemName, open, onClose } = props;

  return (
    <div className={`${'modal'} ${open ? 'display-block' : 'display-none'}`}>
      <div className='modal-main'>
        <h3>Notification</h3>
        <div>
          You have selected menu item:{' '}
          <span className='font-weight-bold'>{itemName}</span>!!
        </div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
