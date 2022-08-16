import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { stylesCard } from "./stylesCard";
import { useDispatch } from "react-redux";
import { addFavorites, removeFromFavorites } from "../../redux/actions/productActions";

const ProductCard = ({ product, onPress }) => {
  const [like, setLike] = useState(false)
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: '48%', marginVertical: 15 }}>
      <View style={stylesCard.container}>
        <View style={stylesCard.containerImage}>
          <Image
            style={[stylesCard.image, { resizeMode: "contain" }]}
            source={{ uri: product.image }} />
          <TouchableOpacity
            onPress={() => {
              setLike(!like)
              dispatch(addFavorites(product.id))
            }}
            style={{ position: "absolute", top: 8, right: 10, backgroundColor: '#8080803b', padding: 2, borderRadius: 10 }}>
            {!like
              ? <MaterialIcons style={stylesCard.fav} name="favorite-outline" />
              : <MaterialIcons style={[stylesCard.fav, { color: 'red' }]} name="favorite" />}
          </TouchableOpacity>
        </View>
        <View style={stylesCard.content}>
          <Text style={stylesCard.title}>{product.title}</Text>
          <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5, color: 'black' }}>${Math.round(product.price)}</Text>
          <View style={stylesCard.isAvailable}>
            <FontAwesome name="circle" style={stylesCard.circle} />
            <Text style={{ color: '#fff', fontSize: 11 }}>Available</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;