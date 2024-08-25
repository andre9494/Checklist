import React, { useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { swipeListStyles } from "../../styles";
import ISwipeListItem from "../interfaces/ISwipeListItem";

const SwipeList = (props: {
  listData: Array<ISwipeListItem>;
  setListData: React.Dispatch<React.SetStateAction<Array<ISwipeListItem>>>;
  renderItem: any;
  onDelete: (key: string) => void;
}) => {
  const { renderItem, listData, setListData, onDelete } = props;

  const rowTranslateAnimatedValues: { [key: string]: Animated.Value } = {};

  listData.forEach((item) => {
    rowTranslateAnimatedValues[item.key] = new Animated.Value(1);
  });

  const animationIsRunning = useRef(false);

  //#region onSwipe
  const onSwipeDelete = (swipeData: { key: string; value: number }) => {
    if (
      swipeData.value < -Dimensions.get("window").width &&
      !animationIsRunning.current
    ) {
      animationIsRunning.current = true;
      Animated.timing(rowTranslateAnimatedValues[swipeData.key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(
          (item) => item.key === swipeData.key,
        );
        newData.splice(prevIndex, 1);
        setListData(newData);
        onDelete(swipeData.key);
        animationIsRunning.current = false;
      });
    }
  };
  //#endregion

  const renderItemContainer = (data: { item: ISwipeListItem }) => (
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
      {renderItem(data)}
    </Animated.View>
  );

  //#region deleteBackLayer
  const deleteBackLayer = () => (
    <View style={swipeListStyles.rowBack}>
      <View
        style={[
          swipeListStyles.backRightBtn,
          swipeListStyles.backRightBtnRight,
        ]}
      >
        <Text style={swipeListStyles.backTextWhite}>Delete</Text>
      </View>
    </View>
  );
  //#endregion

  return (
    <View>
      <SwipeListView
        disableRightSwipe
        data={listData}
        renderItem={renderItemContainer}
        renderHiddenItem={deleteBackLayer}
        rightOpenValue={-Dimensions.get("window").width}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeDelete}
        useNativeDriver={false}
      />
    </View>
  );
};
export default SwipeList;
