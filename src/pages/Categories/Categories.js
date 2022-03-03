import React from 'react';
import {View, FlatList} from 'react-native';
import config from '../../../config';

import CategoryCard from '../../components/Cards/CategoriesCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {loading, error, data} = useFetch(config.API_CATEGORY);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleCategSelect = strCategory => {
    navigation.navigate('MealPage', {strCategory});
  };

  const renderProducts = ({item}) => (
    <CategoryCard
      meals={item}
      onSelect={() => handleCategSelect(item.strCategory)}
    />
  );

  return (
    <View>
      <FlatList data={data.categories} renderItem={renderProducts} />
    </View>
  );
};
export default Categories;
