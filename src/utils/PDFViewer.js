import React from 'react';
import { View } from 'react-native';
import PDFView from 'react-native-pdf';

const PDFViewer = ({ uri }) => (
  <View style={{ flex: 1 }}>
    <PDFView
      source={{uri, cache:true}}
      onError={(error) => console.log(error)}
    />
  </View>
);

export default PDFViewer