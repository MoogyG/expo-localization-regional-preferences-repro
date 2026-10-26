import { useLocales } from 'expo-localization';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const locales = useLocales();
  return (
    <View style={styles.container}>
      <Text testID="locales" selectable>
        {JSON.stringify(
          locales.map(({ languageTag, measurementSystem, temperatureUnit }) => ({
            languageTag,
            measurementSystem,
            temperatureUnit,
          })),
          null,
          2,
        )}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
