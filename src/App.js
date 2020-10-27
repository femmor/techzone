import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// React Icons
import {FaHome} from "react-icons/fa"

// Styled Components
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <h1><FaHome /> Techzone</h1>
      <Button>Click me</Button>
    </div>
  );
}

const Button = styled.button`
  background: var(--primary-color);
  color: var(--mainWhite);
  font-size: ${(props) => props.large ? "3rem" : "inherit"};
`

export default App;
