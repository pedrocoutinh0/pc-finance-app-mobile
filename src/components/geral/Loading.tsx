import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import loader from '../../assets/loader.gif';

export function Loading() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A202C',
  },
  image: {
    width: 130,
    height: 130,
  },
});
