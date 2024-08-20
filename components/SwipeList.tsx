import React, { useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { swipeListStyles } from "../styles";
import ISwipeListItem from "../interfaces/ISwipeListItem";

const rowTranslateAnimatedValues: { [key: string]: Animated.Value } = {};
Array(20)
  .fill("")
  .forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });

// const SwipeList = () => {
const SwipeList = (props: {
  listData: Array<ISwipeListItem>;
  setListData: React.Dispatch<React.SetStateAction<Array<ISwipeListItem>>>;
  renderItem: any;
  onDelete: (key: string) => void;
}) => {
  const { renderItem, listData, setListData, onDelete } = props;

  const animationIsRunning = useRef(false);

  const onSwipeDelete = (swipeData: { key: string; value: number }) => {
    // const { key, value: text } = swipeData;
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

  // const renderItemContainer = (data: { item: ISwipeListItem }) => (
  //   <Animated.View
  //     style={[
  //       swipeListStyles.rowFrontContainer,
  //       {
  //         height: rowTranslateAnimatedValues[data.item.key].interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, 50],
  //         }),
  //       },
  //     ]}
  //   >
  //     {/* <View>
  //         <Text style={{color: COLORS.white}}>I am {data.item.text} in a SwipeListView</Text>
  //       </View> */}

  //   </Animated.View>
  // );

  // const renderItem = (data: { item: ISwipeListItem }) => (
  //   <View>
  //     <Text style={{ color: COLORS.white }}>
  //       I am {data.item.text} in a SwipeListView
  //     </Text>
  //   </View>
  // );

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

  const deleteLayer = () => (
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
      renderItem={renderItemContainer}
      renderHiddenItem={deleteLayer}
      rightOpenValue={-Dimensions.get("window").width}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onSwipeValueChange={onSwipeDelete}
      useNativeDriver={false}
    />
  );
};
export default SwipeList;
