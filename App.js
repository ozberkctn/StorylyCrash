import 'react-native-gesture-handler';
import React, {useRef} from 'react';
import {
  SafeAreaView,
  Animated,
  StatusBar,
  Button,
  Easing,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {Storyly} from 'storyly-react-native';

const HEIGHT = 100;
const PADDING_TOP = 10;

const App = () => {
  const height = new Animated.Value(HEIGHT);
  const paddingTop = new Animated.Value(PADDING_TOP);

  const openStoryly = () => {
    Animated.timing(height, {
      toValue: HEIGHT,
      duration: 600,
      easing: Easing.bezier(0.47, 0.53, 0.37, 0.96),
    }).start();

    Animated.timing(paddingTop, {
      toValue: PADDING_TOP,
      duration: 600,
      easing: Easing.bezier(0.47, 0.53, 0.37, 0.96),
    }).start();
  };

  const closeStoryly = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 600,
      easing: Easing.bezier(0.47, 0.53, 0.37, 0.96),
    }).start();

    Animated.timing(paddingTop, {
      toValue: 0,
      duration: 600,
      easing: Easing.bezier(0.47, 0.53, 0.37, 0.96),
    }).start();
  };

  const carouselRef = useRef(null);

  const renderItem = ({item, index}) => {
    const {backgroundColor} = item;
    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor}]}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}></TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={'Open'} onPress={openStoryly} />
        <Button title={'Close'} onPress={closeStoryly} />
        <Animated.View
          style={{
            paddingTop: paddingTop,
            height: height,
            backgroundColor: '#fff',
          }}>
          <Storyly
            style={{
              height: '100%',
            }}
            storyGroupSize="small"
            storylyId="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NfaWQiOjc2MCwiYXBwX2lkIjo0MDUsImluc19pZCI6NDA0fQ.1AkqOy_lsiownTBNhVOUKc91uc9fDcAxfQZtpm3nj40"
          />
        </Animated.View>
        <View style={styles.carouselContainer}>
          <Carousel
            separatorWidth={16}
            pagingEnable
            contentContainerStyle={{
              paddingHorizontal: 24,
            }}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            inActiveScale={1}
            activeScale={1}
            inActiveOpacity={1}
            activeSlideAlignment={'start'}
            style={styles.carousel}
            data={[
              {backgroundColor: 'red'},
              {backgroundColor: 'blue'},
              {backgroundColor: 'purple'},
              {backgroundColor: 'yellow'},
              {backgroundColor: 'red'},
            ]}
            renderItem={renderItem}
            itemWidth={200}
            containerWidth={400 - 20}
            ref={carouselRef}

            //pagingEnable={false}
            //minScrollDistance={20}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
  },
  carousel: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
});

export default App;
