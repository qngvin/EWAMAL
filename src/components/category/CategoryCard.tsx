import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {SIZES} from '../../constant/theme';

interface Category {
  imgUrl: string;
  name: string;
  heightI: number;
  fontsize: number;
}

const CategoryCard: React.FC<Category> = ({
  heightI,
  name,
  fontsize,
  imgUrl,
}: Category) => {
  const heightInput = heightI;
  return (
    <View style={(styles.container, {height: heightInput})}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image style={styles.img} source={{uri: imgUrl}} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: fontsize,
          fontWeight: '600',
        }}>
        {name}
      </Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    width: SIZES.width / 6,
  },
  img: {
    height: '90%',
    width: '100%',
  },
});
