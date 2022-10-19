import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1e2020',
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1c1c1c',
    color: '#fff',
    fontSize: 16,
    marginRight: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
});