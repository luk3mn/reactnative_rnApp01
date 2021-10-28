import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

// criando um componente de texto
// esse "Text" vem da lib "styled" e não da lib "react"
const Texto = styled.Text`
  color: ${props => props.cor};
  font-size: 30px;
  background-color: green;
`;

const Pagina = styled.View`
  flex: 1;
  background-color: #0000FF;
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Texto cor="red">Texto de exemplo</Texto>
      <Texto cor="black">Outro texto</Texto>
    </Pagina>
  );
}

// Expotando a tela toda para o servidor (exibir na tela)
export default App;