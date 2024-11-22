import { useCallback, useEffect, useRef } from "react";
import {
  ImageURISource,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ListItem from "../ui/ListItem";
import PaginationElement from "../ui/PaginationElement";
import Button from "../ui/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

const pages = [
  {
    text: "Agenda citas con laboratorios para realizar tus exámenes clínicos.",
    image: require("../../assets/onb1.png"),
  },
  {
    text: "Consulta tus resultados de forma rápida y segura desde tu dispositivo.",
    image: require("../../assets/onb2.png"),
  },
  {
    text: "Con nuestra app, tus exámenes médicos están al alcance de un clic.",
    image: require("../../assets/onb3.png"),
  },
];

const Onboarding = ({ navigation }) => {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef();

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    flatListIndex.value = viewableItems[0].index ?? 0;
  }, []);
  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({ item, index }) => {
      return <ListItem item={item} index={index} x={x} />;
    },
    [x]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <PaginationElement length={pages.length} x={x} />
        <Button
          navigation={navigation}
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fafffa"
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom:24
  },
});

export default Onboarding;
