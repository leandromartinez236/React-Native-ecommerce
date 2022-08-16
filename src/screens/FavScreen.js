import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites } from '../redux/actions/productActions'

const FavScreen = () => {
  const favorites = useSelector((state) => state.productReducer.favorites)
  const dispatch = useDispatch()
  return (
    <View>
      <Text>FavScreen</Text>
      {favorites.map(fav => (
        <Text onPress={() => dispatch(removeFromFavorites(fav.id))} key={fav.id}>{fav.title}</Text>
      ))}
    </View>
  )
}

export default FavScreen