import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import { styles } from './styles';
import { ParticipantProps } from '../../types';

export function Participant( props: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { props.name }
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={props.onRemove}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}