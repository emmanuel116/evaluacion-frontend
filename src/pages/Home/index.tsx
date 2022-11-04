import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setTitle, getEmployees } from '../../actions';
import Records from '../../components/Pagination/Records';
import Pagination from '../../components/Pagination';
import styles from 'styled-components';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Form from '../../components/Form';

type HomeProps = {
  setTitle: (arg: any) => void;
  getEmployees: () => void;
  employees: {
    id: number;
    name: string;
    last_name: string;
    birthday: number;
  }[];
};

interface IEmployee {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
}

const Home = ({ setTitle, getEmployees, employees }: HomeProps) => {
  useEffect(() => {
    const topbar = {
      title: 'Home',
    };
    setTitle(topbar);
    getEmployees();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (employees && employees.length > 0) {
      setData(employees);
    }
  }, [employees]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [data, setData] = useState<IEmployee[]>([]);

  if (!employees) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      const searchWord = target.value.toLowerCase();
      if (searchWord !== '') {
        const filteredEmployees = employees.filter(employe =>
          employe.name
            .concat(employe.last_name)
            .toLowerCase()
            .includes(searchWord)
        );
        if (filteredEmployees.length > 0) {
          setData(filteredEmployees);
        } else {
          setData([]);
        }
      } else {
        setData(employees);
      }
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <HomeStyled>
      <Card title="Buscador" color="">
        <Input title="Buscar..." onChange={handleSearch} />
      </Card>
      <Records data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Form />
    </HomeStyled>
  );
};

const mapStateToProps = (state: any) => {
  return {
    employees: state.reducerApp.employees,
  };
};

const mapDispatchToProps = {
  setTitle,
  getEmployees,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const HomeStyled = styles.div`
display: flex;
flex-direction: column;
`;
