# expo-localization ignores Android regional preferences

Minimal reproduction: on Android, `getLocales()` / `useLocales()` return `measurementSystem` and `temperatureUnit` from the locale's region, and ignore the measurement system and temperature chosen in Settings > System > Languages > Regional preferences, which Android writes into each system locale as `-u-ms-` and `-u-mu-` Unicode extensions.

## Steps

1. `npm install`, then `npx expo start --android` (Expo Go).
2. On an Android device whose language is English (United States), the app shows `measurementSystem: "us"` and `temperatureUnit: "fahrenheit"`.
3. In Settings > System > Languages > Regional preferences, set Measurement system to Metric and Temperature to Celsius, then reopen the app.

Expected: `measurementSystem: "metric"`, `temperatureUnit: "celsius"`.

Actual: `languageTag` becomes `en-US-u-ms-metric-mu-celsius`, but `measurementSystem` stays `"us"` and `temperatureUnit` stays `"fahrenheit"`.
