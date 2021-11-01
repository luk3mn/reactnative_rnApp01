import React from "react"; // Importação da biblioteca "React"
import { Image } from 'react-native';
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color: #DDD;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  flex: 1;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green">

          <Image source={require('./src/imagens/frango.png')}
            style={{ width: 100, height: 100, backgroundColor: '#AAA' }}
            resizeMode='center'
          />

        </Quadrado>
        <Quadrado cor="blue">

          <Image source={{uri:'https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png'}}
            style={{ width: 100, height: 100, backgroundColor: '#AAA' }}
            resizeMode='center'
          />

        </Quadrado>
      </Header>
    </Pagina>
  );
}

// Expotando a tela toda para o servidor (exibir na tela)
export default App;