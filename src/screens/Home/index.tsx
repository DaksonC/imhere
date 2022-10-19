import { 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  function hendleParticipandAdd() {
    console.log('Vc clicou no botão!');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 19 de Outubro de 2022
      </Text>
      <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante" 
        placeholderTextColor="#9E9E9E"
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={hendleParticipandAdd}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}