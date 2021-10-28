import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  flex: ${props => props.flexivel};
  height: 50px;
`;

const Pagina = styled.View`
  {/* Ativaçã do flexbox */}
  flex: 1;

  {/* flex direction */}
  flex-direction: column {/* Itens em coluna -> Default */}
  flex-direction: row {/* Itens em linha */}
  flex-direction: column-reverse; {/* Coluna reversa */}
  flex-direction: row-reverse; {/* Linha reversa */}

  {/* Definindo a direção dos itens */}
  flex-direction: column;
`;

function App() {
  return (
    <Pagina>
      <Quadrado flexivel={1} cor="red"></Quadrado>
      <Quadrado flexivel={2} cor="green"></Quadrado> {/* Ocupa o dobro do tamanho */}
      <Quadrado flexivel={1} cor="blue"></Quadrado>
    </Pagina>
  );
}

// Expotando a tela toda para o servidor (exibir na tela)
export default App;