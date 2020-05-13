import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
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

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <Formulario />
        <Text style={styles.titulo}>
          {citas.length > 0 ? 'Administra tus citas' : 'No hay citas'}
        </Text>

        <FlatList
          data={citas}
          renderItem={({item}) => (
            <Cita item={item} eliminarPaciente={eliminarPaciente} />
          )}
          keyExtractor={cita => cita.id}
        />
      </View>
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
    marginTop: 50,
    marginBottom: 20,
  },
});
export default App;
