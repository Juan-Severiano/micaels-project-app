import React from 'react';
import { WebView } from 'react-native-webview';

function WebsiteScreen() {
  return (
    <WebView
      source={{ uri: 'https://www.google.com' }}
    />
  );
}

export default WebsiteScreen;
