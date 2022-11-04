import styles from 'styled-components';

type PaginationProps = {
  nPages: number;
  currentPage: number;
  setCurrentPage: (arg: number) => void;
};

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const iterable = nPages + 1;
  const pageNumbers = [...Array(iterable).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <PaginationStyled>
      <Ul>
        <Li onClick={prevPage}>Anterior</Li>
        {pageNumbers.map(pgNumber => (
          <Li
            key={pgNumber}
            active={currentPage === pgNumber}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </Li>
        ))}
        <Li className="page-item" onClick={nextPage}>
          Siguiente
        </Li>
      </Ul>
    </PaginationStyled>
  );
};

export default Pagination;

const PaginationStyled = styles.nav`
  background-color:  ${({ theme }) => theme.backgroundButton};
  border-radius: 5px;
  max-width: 100%;
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 20px;
`;

const Ul = styles.ul`
  display: flex;
  list-style: none;
`;

interface LiStyledProps {
  active?: boolean;
}

const Li = styles.li<LiStyledProps>`
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  box-saizing: border-box;
  color: ${({ theme, active }) =>
    active ? theme.menu_link_active : theme.colorButtonCircle};
  ${({ active, theme }) =>
    active
      ? `
    background: 
      linear-gradient(to bottom right, ${theme.primary} 0%, ${theme.primary_scale1} 100%) !important;
      box-shadow: 0 7px 12px 0 ${theme.primary_scale2};
      border-radius: 5px;
    `
      : ''}
  &:hover {
    color: ${({ theme }) => theme.menu_link_active};
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.primary} 0%, ${theme.primary_scale1} 100%) !important`};
    box-shadow: 0 7px 12px 0 ${({ theme }) => theme.primary_scale2};
    border-radius: 5px;
  }
`;
