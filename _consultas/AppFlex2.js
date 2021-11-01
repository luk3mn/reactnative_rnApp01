import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex: 1;
  flex-direction: row;
  
  justify-content: flex-start; {/* Alinhamento padrão */}
  justify-content: flex-end; {/* Alinhamento no final */}
  justify-content: space-between; {/* Coloca espaços entre os itens */}
  justify-content: space-around; {/* Coloca espaços ao rodor dos itens*/}
  justify-content: center; {/* Alinhamento no centro */}

  align-items: flex-end;
  align-items: center;
`;

function App() {
  return (
    <Pagina>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
      <Quadrado cor="yellow"></Quadrado>
    </Pagina>
  );
}

// Expotando a tela toda para o servidor (exibir na tela)
export default App;