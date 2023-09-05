import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';
import Ionicons from '@expo/vector-icons/Ionicons'

export default props => {
  console.log(props.route.params.link)
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
        <WebView
          source={{ uri: props.route.params.link }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  )
}
