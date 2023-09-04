import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

export default props => {
  return (
    <>
      <TouchableOpacity style={{
        padding: 10,
        backgroundColor: '#0001',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
        position: 'absolute',
        zIndex: 5
      }} onPress={() => {
        props.navigation.goBack()
      }}>
        <Ionicons name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <View style={{ marginTop: 70 }}>
          <TouchableOpacity style={{
            height: Dimensions.get('window').width / 4 + 30,
            width: '100%',
            backgroundColor: '#aaa',
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-between'
          }} onPress={() => {
            props.navigation.navigate('OpenForm')
          }}>
            <Image style={{
              height: Dimensions.get('window').width / 4,
              width: Dimensions.get('window').width / 4,
              borderRadius: 20,
              marginHorizontal: 5,
              marginVertical: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }} source={require('../../assets/1.png')} />
            <Text style={{
              fontSize: 30,
              fontWeight: '700',
            }}>
            SPAECE - 2019
            </Text>
            <Ionicons name='arrow-forward' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
