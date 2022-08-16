import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, deleteOneProduct, addToCart } from '../redux/actions/productActions'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductInfo = ({ navigation, route }) => {
  const [button, setButton] = useState(true)
  const product = useSelector((state) => state.getOneProduct)
  const { productId } = route.params
  const dispatch = useDispatch()

  const getProduct = async () => {
    setButton(true)
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => console.log(err))
    dispatch(getOneProduct(response.data));
    setButton(false)
  }
  useEffect(() => {
    getProduct()
    return () => {
      dispatch(deleteOneProduct())
    }
  }, [productId])

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
          <Entypo name='chevron-left' style={styles.back} />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={{ margin: 10, flex: 1, justifyContent: 'space-between' }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 30 }}>
          <Text style={{ fontWeight: '700', marginBottom: 10, fontSize: 15 }}>{product.title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text>Rating: {product?.rating?.rate}⭐ ({product?.rating?.count})</Text>
            <Text >Price: <Text style={{ color: 'green', fontWeight: '700' }}>${product.price}</Text></Text>
          </View>
          <ScrollView style={{ alignSelf: 'auto', maxHeight: 150 }}>
            <Text style={{ color: 'gray' }}>{product.description}.</Text>
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity disabled={button} style={styles.addToCart} onPress={() => dispatch(addToCart(product.id))}>
            <Text style={styles.text}>ADD</Text>
            <MaterialCommunityIcons name='cart' style={{ fontSize: 16, color: '#fff' }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buy}>
            <Text style={styles.text}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeeee',
  },
  containerImage: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    alignItems: 'center'
  },
  image: {
    width: '80%',
    height: 150,
    resizeMode: 'contain'
  },
  addToCart: {
    width: '48%',
    backgroundColor: '#0083fffc',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buy: {
    width: '48%',
    borderRadius: 20,
    backgroundColor: '#31d64d'
  },
  text: {
    padding: 12,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  back: {
    fontSize: 20,
    backgroundColor: '#a7a6a6',
    color: '#fff',
    borderRadius: 15,
    padding: 10,
    alignSelf: 'flex-start',
    position: 'absolute'
  }
})
export default ProductInfo