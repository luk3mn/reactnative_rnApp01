import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color: #DDD;
  height: 200px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex: 1;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="yellow"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="yellow"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="yellow"></Quadrado>  
      </Header>
    </Pagina>
  );
}

// Expotando a tela toda para o servidor (exibir na tela)
export default App;