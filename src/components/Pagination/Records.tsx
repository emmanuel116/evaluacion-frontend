import Card from '../Card';
import styles from 'styled-components';

type RecordsProps = {
  data: {
    id: number;
    name: string;
    last_name: string;
    birthday: number;
  }[];
};

const Records = ({ data }: RecordsProps) => {
  
  const formatDate = (date: number) => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  return (
    <Card title="Employees" color="">
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>City</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length > 0 ? (
            data.map(employe => {
              return (
                <Tr key={employe.id}>
                  <Td>{employe.id}</Td>
                  <Td>{employe.name}</Td>
                  <Td>{employe.last_name}</Td>
                  <Td>{`${formatDate(employe.birthday)}`}</Td>
                </Tr>
              );
            })
          ) : (
            <Tr>
              <Td colSpan={4}>Sin Resultados</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Card>
  );
};

export default Records;

const Table = styles.table`
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0;
  box-sizing: border-box;
`;

const Thead = styles.thead`
  border: ${({ theme }) => theme.border};
`;

const Tbody = styles.thead`
  border: ${({ theme }) => theme.border};
`;

const Tr = styles.tr`
  border: ${({ theme }) => theme.border};
`;
const Th = styles.th`
  padding: 0.75rem;
  text-align: left;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
  `;

interface TdProps {
  children: React.ReactNode | React.ReactNode[];
}

const Td = styles.td<TdProps>`
  padding: 0.75rem;
  font-size: 0.8rem;
`;
