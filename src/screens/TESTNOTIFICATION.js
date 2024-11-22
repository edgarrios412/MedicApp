import { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import useNotification from '../utils/hooks/useNotification';
import img from "../../assets/favicon.png"

async function sendPushNotification(expoPushToken) {
  const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Test Push Notification',
      body: 'Estamos Testeando las notificaciones de Expo Push Token',
      data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
  });
}

export default function TESTNOTIFICATION() {
  const expoPushToken = useNotification();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>

      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}