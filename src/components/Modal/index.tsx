import React, { MouseEventHandler } from 'react'
import { DivModal } from './styles';


type ModalProps = {
    children?: React.ReactNode;
    closeModal?: MouseEventHandler<HTMLButtonElement>;
    visible?: boolean;
}

const Modal = ({children, closeModal, visible}: ModalProps) => {

  

  return (
    <>
      {
      visible &&
        <DivModal>
          <div>
            <div>
              {children}
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </DivModal>      
      }    
    </>


  )
}

export default Modal