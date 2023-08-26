import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

function WebsiteScreen() {
  return (
      <WebView
      style={{ marginTop: 30 }}
        source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSc0KftFVl0ToxvTsfFY02X2w2Ia0nPpNMshEEEdmoy6k1h2_Q/viewform?usp=sf_link' }}
      />
  );
}

export default WebsiteScreen;
