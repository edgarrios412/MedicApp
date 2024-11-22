import { Alert, Linking, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import {shareAsync} from "expo-sharing"

async function saveFile(uri) {
    shareAsync(uri);
}

export const downloadAndOpenPDF = async (fileUrl) => {
  const filename = "examen.pdf";
  const result = await FileSystem.downloadAsync(
    fileUrl,
    FileSystem.documentDirectory + filename
  );

  // Log the download result
  console.log(result);

  // Save the downloaded file
  saveFile(result.uri);
};
