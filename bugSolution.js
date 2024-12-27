/* bugSolution.js */
import * as Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDeviceId = async () => {
  try {
    const storedDeviceId = await AsyncStorage.getItem('deviceId');
    if (storedDeviceId !== null) {
      return storedDeviceId;
    }
    const deviceId = Constants.deviceId;
    if (deviceId) {
      await AsyncStorage.setItem('deviceId', deviceId);
      return deviceId;
    } else {
      // Handle the case where deviceId is still null (log an error, use a fallback, etc.)
      console.error('Expo Constants.deviceId is null');
      return null; // or a fallback ID
    }
  } catch (e) {
    console.error('Error fetching or storing device ID:', e);
    return null;
  }
};

//Example Usage:

getDeviceId().then((id) => console.log('Device ID:', id));