import styled from 'styled-components';
import { SyntheticEvent, useContext } from 'react';
import { createPortal } from 'react-dom';
import CloseButton from '../../6_shared/ui/Buttons/CloseButton';
import { AppContext } from '../../1_app/App';

interface ModalProp {
  isActive: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

export default function Modal({ isActive, closeModal, children }: ModalProp) {
  if (!isActive) return null;

  return createPortal(
    <ModalConteiner onClick={closeModal}>
      <ModalContent onClick={(e: SyntheticEvent) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}/>
        {children}
      </ModalContent>
    </ModalConteiner>,
    document.body
  );
}

const ModalConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5;
`;

const ModalContent = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: clamp(300px, 41vw, 600px);
  border-radius: 25px;
  background-color: var(--color-light-alt);
`;
