import React, { useState, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { COLORS, swipeListStyles } from "../styles";

interface ISwipeListItem {
  key: string;
  text: string;
}

const rowTranslateAnimatedValues: { [key: string]: Animated.Value } = {};
Array(20)
  .fill("")
  .forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });

const SwipeList = (items: ISwipeListItem) => {
  const [listData, setListData] = useState<ISwipeListItem[]>(
    Array(20)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
  );

  const animationIsRunning = useRef(false);

  const onSwipeValueChange = (swipeData: { key: string; value: number }) => {
    const { key, value } = swipeData;
    if (
      value < -Dimensions.get("window").width &&
      !animationIsRunning.current
    ) {
      animationIsRunning.current = true;
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...listData];
        const prevIndex = listData.findIndex((item) => item.key === key);
        newData.splice(prevIndex, 1);
        setListData(newData);
        animationIsRunning.current = false;
      });
    }
  };

  const renderItem = (data: { item: ISwipeListItem }) => (
    <Animated.View
      style={[
        swipeListStyles.rowFrontContainer,
        {
          height: rowTranslateAnimatedValues[data.item.key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50],
          }),
        },
      ]}
    >
      {/* <TouchableHighlight
        onPress={() => console.log("You touched me")}
        style={swipeListStyles.rowFront}
      > */}
        <View>
          <Text style={{color: COLORS.white}}>I am {data.item.text} in a SwipeListView</Text>
        </View>
      {/* </TouchableHighlight> */}
    </Animated.View>
  );

  const deleteLayer = () => (
    <View style={swipeListStyles.rowBack}>
      <View style={[swipeListStyles.backRightBtn, swipeListStyles.backRightBtnRight]}>
        <Text style={swipeListStyles.backTextWhite}>Delete</Text>
      </View>
    </View>
  );

  return (
    // <View style={styles.container}>
    //   <SwipeListView
    //     disableRightSwipe
    //     data={listData}
    //     renderItem={renderItem}
    //     renderHiddenItem={deleteLayer}
    //     rightOpenValue={-Dimensions.get("window").width}
    //     previewRowKey={"0"}
    //     previewOpenValue={-40}
    //     previewOpenDelay={3000}
    //     onSwipeValueChange={onSwipeValueChange}
    //     useNativeDriver={false}
    //   />
    // </View>
      <SwipeListView
        disableRightSwipe
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={deleteLayer}
        rightOpenValue={-Dimensions.get("window").width}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
  );
};
export default SwipeList;


