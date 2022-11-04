import styles from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <Div>
      <Input placeholder="Buscar..." />
      <Button>
        <BsSearch />
      </Button>
    </Div>
  )
}

export default SearchBar

const Div = styles.div`
background-color: transparent;
color: ${({ theme }) => theme.colorButtonCircle};
position: relative;
margin-left: 30px;
@media (max-width: 768px) {
  display: none;
}

`
const Input = styles.input`
border-radius: 20px;    
border: ${({ theme }) => theme.border};
font-size: 14px;
box-size: border-box;
padding:.5rem 1.5rem;
width: 250px;
background-color: ${({ theme }) => theme.backgroundButton};
`

const Button = styles.button`
curson: pointer;
position: absolute;
background-color: transparent;
height: 40px;
top: 55%;
right: 10px;
transform: translateY(-50%);
color: #b4bdce;
transition: none;
font-size: 16px;
border: none;
`
