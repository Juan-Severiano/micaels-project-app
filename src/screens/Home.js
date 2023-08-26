import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Card from '../components/Card'

export default () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <Header />
      <ImageBackground
        source={require('../../assets/icon.png')}
        style={{ width: '100%', resizeMode: 'contain', height: 300, marginTop: 0 }}
      />
      <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
        <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Card />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity><TouchableOpacity>
            <Card />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
