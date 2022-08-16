import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CartStats = ({ products }) => {
  const prices = []
  products?.map(item => prices.push(item.price))
  const result = prices.reduce((a, b) => a + b, 0)
  return (
    <View style={{ flexDirection: 'column', paddingVertical: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 10 }}>
        <Text style={{ fontWeight: '700' }}>Total:</Text>
        <Text style={{ fontWeight: '700' }}>${Math.round(result)}</Text>
      </View>
      <Text style={styles.button}>Comprar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#ffef0d',
    fontWeight: '700',
    borderRadius: 15
  }
})
export default CartStats