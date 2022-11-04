import { useState } from 'react';
import { connect } from 'react-redux';
import { createEmploye } from '../../actions';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import styles from 'styled-components';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
registerLocale('es', es);

type FormProps = {
  createEmploye: (arg: { [k: string]: FormDataEntryValue }) => void;
};

const Form = ({ createEmploye }: FormProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formatDate(startDate) !== formatDate(new Date())) {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      formData.append(
        'birthday',
        formatDate(startDate)?.toString() || ''
      );
      const data = Object.fromEntries(formData);
      createEmploye(data);
      setStartDate(new Date());
      form.reset();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Seleccione una fecha de nacimiento',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  const formatDate = (date: any) => {
    let month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
  };

  return (
    <Card title="Formulario" color="">
      <FormStyled onSubmit={handleSubmit} id="form">
        <Label>Nombre</Label>
        <Input type="text" name="name" maxLength="30" required />
        <Label>Apellidos</Label>
        <Input type="text" name="last_name" maxLength="30" requie />
        <Label>Fecha de nacimiento</Label>
        <StyledCalendar
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          locale="es"
          onSelect={setStartDate}
          onChange={setStartDate}
        />
        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </FormStyled>
    </Card>
  );
};

const mapDispatchToProps = {
  createEmploye,
};

export default connect(null, mapDispatchToProps)(Form);

interface CalendarStyledProps {
  onChange: any;
}

const StyledCalendar = styles(DatePicker)<CalendarStyledProps>`
  padding: 0.375rem 0.75rem;
  box-sizing: border-box;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  outline-color: ${({ theme }) => theme.border};
  color: var(--dark);
  background-color: var(--white);
  background-clip: padding-box;
  border-radius: 3px;
  border: ${({ theme }) => theme.border};
  box-shadow: none;
  margin-top: 0.375rem;
  margin-bottom: 0.7rem;
  border-style: solid;
  border-radius: 7px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const FormStyled = styles.form`
  display: flex;
  flex-direction: column;
`;

const ButtonStyled = styles(Button)`
  margin-right: 0;
`;

const Label = styles.label`
    font-size: 0.875rem;
    margin-top: 0.375rem;
    margin-bottom: 0.375rem;
    padding-left: 0.375rem;
`;
