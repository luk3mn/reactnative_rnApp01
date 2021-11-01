import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color: #DDD;
  height: 200px;
  width: 300px
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Quadrado1 = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Quadrado2 = styled.View`
  background-color: ${props => props.cor};
  width: 40px;
  height: 40px;
`;

const Pagina = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado1 cor="red"></Quadrado1>
        <Quadrado2 cor="green"></Quadrado2>
        <Quadrado1 cor="blue"></Quadrado1>
        <Quadrado2 cor="yellow"></Quadrado2>
        <Quadrado2 cor="pink"></Quadrado2>
        <Quadrado1 cor="black"></Quadrado1>
        <Quadrado2 cor="blue"></Quadrado2>
        <Quadrado1 cor="gray"></Quadrado1>
        <Quadrado1 cor="orange"></Quadrado1>
        <Quadrado1 cor="green"></Quadrado1> 
        <Quadrado2 cor="red"></Quadrado2>
        <Quadrado2 cor="brown"></Quadrado2>
        <Quadrado2 cor="green"></Quadrado2>
        <Quadrado1 cor="red"></Quadrado1>
        <Quadrado2 cor="yellow"></Quadrado2>
        <Quadrado1 cor="blue"></Quadrado1>
        <Quadrado1 cor="black"></Quadrado1>
        <Quadrado1 cor="gray"></Quadrado1>
        <Quadrado2 cor="pink"></Quadrado2>
        <Quadrado2 cor="blue"></Quadrado2>
        <Quadrado1 cor="orange"></Quadrado1>
        <Quadrado2 cor="red"></Quadrado2>
        <Quadrado1 cor="green"></Quadrado1> 
        <Quadrado2 cor="brown"></Quadrado2>
        <Quadrado1 cor="red"></Quadrado1>
        <Quadrado2 cor="green"></Quadrado2>
        <Quadrado1 cor="blue"></Quadrado1>
        <Quadrado2 cor="yellow"></Quadrado2>
        <Quadrado1 cor="black"></Quadrado1>
        <Quadrado2 cor="pink"></Quadrado2>
        <Quadrado1 cor="gray"></Quadrado1>
        <Quadrado2 cor="blue"></Quadrado2>
        <Quadrado1 cor="orange"></Quadrado1>
        <Quadrado2 cor="red"></Quadrado2>
        <Quadrado1 cor="green"></Quadrado1> 
        <Quadrado2 cor="brown"></Quadrado2>
      </Header>
    </Pagina>
  );
}

// Expotando a tela toda para o servidor (exibir na tela)
export default App;