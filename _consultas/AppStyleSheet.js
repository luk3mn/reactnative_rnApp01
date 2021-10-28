import React from "react"; // Importação da biblioteca "React"
import { StyleSheet, Text, View } from 'react-native' // Importação dos componentes

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <View style={estilo.pagina}>
      {/* Estilizando um componente "Text" internamente => Menos usado */}
      <Text style={{color:'#ffffff', fontSize:25,}}>Olá mundo!</Text>

      {/* Estilizando um componente "View" externamente */}
      <Text style={estilo.texto}>Segundo Olá Mundo!</Text>
      <Text style={estilo.texto}>Terceiro Olá mundo!</Text>

      {/* Misturando formas de estilizar */}
      <Text style={[estilo.texto, {fontSize:10}]}>Quarto Olá Mundo!</Text>
    </View>
  );
}

// criando a constante estilo
// que vai receber um objeto StyleSheet
const estilo = StyleSheet.create({
  pagina: {
    width: 250,
    height: 200,
    backgroundColor: '#ff0000'
  },

  texto: {
    color: '#ffffff',
    fontSize: 25
  }
});

export default App;