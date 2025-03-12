import styled from 'styled-components';
import Button from './Button';
import closeIcon from '../../../assets/icons/closeIcon.svg';
import { buttonColors } from './Button';

export default function CloseButton() {
  return (
    <Wraper isLink={false} btnColor={buttonColors.white}>
      <img
        src={closeIcon}
        alt="Close button"
        width="30px"
        height="30px"
        loading="lazy"
      />
    </Wraper>
  );
}

const Wraper = styled(Button)`
  position: absolute;
  right: 0px;
  top: 3px;

  width: fit-content;
  height: fit-content;
  padding: 0;

  background-color: transparent;

  &:hover {
    opacity: 0.7;
    background-color: transparent;
  }
`;
