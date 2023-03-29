
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, style, TextInput, Alert } from 'react-native';
import { WebView } from 'react-native-webview';



const WebViewTexstScreen = () => {

  const [url, setUrl] = React.useState('');
  const [isShowWebView, setShowWebView] = React.useState(false);
  const setUrlToWebView = () => {
    setUrl(url);
    setShowWebView(true)
  }
  const backToUrl = () => {
    setUrl();
    setShowWebView(false)
  }


  return (

    <View className="flex-1">
      {!isShowWebView ?
        <>
          <TextInput
            className="m-10"
            onChangeText={setUrl}
            value={url}
            placeholder="Set Url To WebView"
          />

          <TouchableOpacity className="w-3/3 h-8 bg-slate-400 rounded justify-center" onPress={() => { setUrlToWebView() }}>
            <Text className="text-center">Set Url For Webview</Text>
          </TouchableOpacity>
        </> :
        <>
          <TouchableOpacity className="w-3/3 h-8 bg-slate-400 rounded justify-center" onPress={() => { backToUrl() }}>
            <Text className="text-center">close</Text>
          </TouchableOpacity>
          <WebView source={{ uri: url}} />
        </>
      }


    </View>


  );
}
export default WebViewTexstScreen;


