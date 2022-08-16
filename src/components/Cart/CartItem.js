import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeToCart } from '../../redux/actions/productActions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CartItem = ({ id, title, price, image }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.containerCard} key={id}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.content}>
            <Text style={styles.title} onPress={() => dispatch(removeToCart(id))}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.count}>
                <MaterialCommunityIcons name='minus' style={{ fontSize: 16, }} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 15 }}>0</Text>
              <TouchableOpacity style={styles.count}>
                <MaterialCommunityIcons name='plus' style={{ fontSize: 16, }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.price}>${Math.round(price)}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerCard: {
    width: '100%',
    borderColor: "#aaaaa3",
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    maxHeight: 36,
    overflow: 'hidden',
    marginBottom: 5
  },
  content: {
    maxWidth: 130,
    flexDirection: 'column',
    paddingLeft: 15,
  },
  image: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  count: {
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    backgroundColor: '#fff',
    opacity: 0.5
  },
  price: {
    color: 'green',
    fontWeight: '700'
  }
})
export default CartItem