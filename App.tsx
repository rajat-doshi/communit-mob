/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createTamagui, TamaguiProvider, Text, View } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v5';
import { StatusBar } from 'react-native';

const config = createTamagui(defaultConfig);

function App() {
  return (
    <TamaguiProvider defaultTheme={'light'} config={config}>
      <StatusBar />
      <View>
        <Text>Hellodfgdfgdfgd</Text>
      </View>
    </TamaguiProvider>
  );
}

export default App;
