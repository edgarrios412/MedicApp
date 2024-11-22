import { useEffect, useState, useRef } from "react"
import * as Device from "expo-device"
import * as Notifications from "expo-notifications"
import Constants from "expo-constants"
import { Platform } from "react-native"

const usePushNotifications = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldPlaySound:false,
            shouldShowAlert:true,
            shouldSetBadge:false
        })
    })

    const [expoPushToken, setExpoPushToken] = useState()
    const [notification, setNotification] = useState()
    const notificationListener = useRef()
    const responsListener = useRef()

    const registerForPushNotificationsAsync = async () => {
        let token;
        if(Device.isDevice){
            const {status: existingStatus} = await Notifications.getPermissionsAsync()
            let finalStatus = existingStatus
            if(existingStatus !== "granted"){
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status
            }
            if(finalStatus !== "granted"){
                alert("Permiso denegado")
            }

            token = await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig?.extra?.eas?.projectId
            })

            if(Platform.OS === "android"){
                Notifications.setNotificationChannelAsync("default",{
                    name:"default",
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0,250,250,250],
                    lightColor:"#FFFFFF"
                })
            }

            return token;
        }else{
            console.log("Error no es un dispositivo fisico")
        }
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))
        notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
            setNotification(notification)
        })
    
        responsListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
            console.log(response)
        })
    
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current)
            Notifications.removeNotificationSubscription(responsListener.current)
        }
    },[]) 

    return {
        expoPushToken,
        notification
    }
}

export default usePushNotifications