import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);
  //definir el state de citas
  const [citas, setCitas] = useState([
    {
      id: '1',
      paciente: 'Miguel',
      propietario: 'Nadja',
      sintomas: 'no come',
    },
    {
      id: '2',
      paciente: 'Victor',
      propietario: 'Julia',
      sintomas: 'Se tira pedos',
    },
    {
      id: '3',
      paciente: 'Julian',
      propietario: 'Cristina',
      sintomas: 'Caca',
    },
  ]);

  // Funcion para eliminar los pacientes.
  const eliminarPaciente = id => {
    setCitas(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };

  return (
    <>
      <ScrollView style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.botonEnviar}>
          <Text style={styles.textoEnviar}>Mostrar Formulario</Text>
        </TouchableHighlight>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear nueva cita</Text>
              <Formulario />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0 ? 'Administra tus citas' : 'No hay citas'}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita item={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#DF401D',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  botonEnviar: {
    padding: 10,
    backgroundColor: 'green',
    marginVertical: 10,
  },
  textoEnviar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
