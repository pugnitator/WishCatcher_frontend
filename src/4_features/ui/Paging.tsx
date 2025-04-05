import styled from 'styled-components';
import Button, { buttonColors } from '../../6_shared/ui/buttons/Button';
import nextIcon from '../../assets/icons/nextIcon.svg';
import backIcon from '../../assets/icons/backIcon.svg';

interface PagingProp {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Paging({
  totalPages,
  currentPage,
  setCurrentPage,
}: PagingProp) {
  const onClickBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    console.log('Next', )
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <PagingItem
        isLink={false}
        btnColor={buttonColors.white}
        onClick={onClickBack}
      >
        <img
          src={backIcon}
          alt="Перейти к прошлой странице"
          width="9px"
          height="4.5px"
          loading="lazy"
        />
      </PagingItem>
      <PageNumber>
        <span>{`${currentPage} из ${totalPages}`}</span>
      </PageNumber>
      <PagingItem
        isLink={false}
        btnColor={buttonColors.white}
        onClick={onClickNext}
      >
        <img
          src={nextIcon}
          alt="Перейти к следующей странице"
          width="9px"
          height="4.5px"
          loading="lazy"
        />
      </PagingItem>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const PagingItem = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  background-color: transparent;
  color: var(--color-dark);
`;
