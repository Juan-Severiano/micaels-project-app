import { Dimensions, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default () => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={{ color: "#fff" }}>asdasdasd</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000', 
    height: Dimensions.get('window').width / 4, 
    width: Dimensions.get('window').width / 4,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5
  }
})
