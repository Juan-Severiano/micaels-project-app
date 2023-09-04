import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Card from '../components/Card'

export default props => {
  console.log(props)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <Header />
      <ImageBackground
        source={require('../../assets/icon.png')}
        style={{ width: '100%', resizeMode: 'contain', height: 300, marginTop: 0 }}
      />
      <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
        <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('ListForm')
          }}>
            <Card 
              cover={require('../../assets/1.png')} 
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card cover={require('../../assets/2.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card cover={require('../../assets/3.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card cover={require('../../assets/4.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card cover={require('../../assets/5.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card cover={require('../../assets/6.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
