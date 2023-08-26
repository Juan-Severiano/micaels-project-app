import { Dimensions, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default props => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={{ color: "#fff" }}>{props.cover}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#29369f', 
    height: Dimensions.get('window').width / 4, 
    width: Dimensions.get('window').width / 4,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
