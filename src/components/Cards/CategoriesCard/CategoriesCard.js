import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({meals, onSelect}) => {
  const {strCategoryThumb, strCategory} = meals;
  return (
    <TouchableWithoutFeedback onpress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: strCategoryThumb}} />

        <Text style={styles.text}>{strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
