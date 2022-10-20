import { 
  Alert,
  FlatList,
  ScrollView,
  Text, 
  TextInput, 
  TouchableOpacity, 
  View
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function hendleParticipandAdd() {
    if (participants.includes(participantName)) {
      Alert.alert("Participante já adicionado", "Já existe um participante com esse nome");
      return;
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
        
    Alert.alert(
      'Vc clicou no botão REMOVE!', 
      `Deseja realmente remover o participante ${name}?`,[
      { 
        text: 'Sim', 
        onPress: () => 
          setParticipants(
            prevState => prevState.filter(
              participant => participant !== name
            )
          ),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
    console.log('Vc clicou no botão REMOVE!');
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
        onChangeText={setParticipantName}
        value={participantName}
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
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Nenhum participante adicionado
          </Text>
        )}
      />
    </View>
  )
}