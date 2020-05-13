import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {

  const [paciente, guardaPaciente] = useState('');
  const [dueño, guardaDueño] = useState('');
  const [telefono, guardaTelefono] = useState('');
  const [sintoma, guardaSintoma] = useState('');
  const [fecha, guardaFecha] = useState('');
  const [hora, guardaHora] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const dateConfirm = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    guardaFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  const timeConfirm = time => {
    const opciones = {hour: 'numeric', minute: '2-digit'};
    guardaHora(time.toLocaleString('en-US', opciones));
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono:</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => console.log(texto)}
            keyboardType={'numeric'}
          />
        </View>
        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline={true}
            style={styles.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={dateConfirm}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige una fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Show TIME Picker" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={timeConfirm}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Formulario;
