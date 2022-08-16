import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from '../components/Cart/CartItem'
import CartStats from '../components/Cart/CartStats'

const MyCart = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.cart)
  if (!products.length > 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ position: 'absolute', top: '50%' }}>Empty Cart</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 20 }} onPress={() => navigation.navigate('Home')}>My Cart</Text>
        <FlatList
          style={{ paddingVertical: 10 }}
          showsVerticalScrollIndicator={false}
          data={products}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({ item: data }) => (
            <CartItem {...data} />
          )}
        />
        <CartStats products={products} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eeeeee'
  }
})
export default MyCart