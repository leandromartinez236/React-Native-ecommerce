import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { products } from './db'
import ProductCard from './Card/ProductCard'
import { useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'

const SectionProducts = ({ navigation }) => {
  const products = useSelector((state) => state.productReducer.products)

  return (
    <View style={styles.sectionProducts}>
      <Text style={styles.titleSection} onPress={() => navigation.navigate('MyCart')}>Products ({products.length})</Text>
      <View style={styles.productList}>
        {products?.map(product => <ProductCard onPress={() => navigation.navigate('ProductInfo', { productId: product.id })} key={product.id} product={product} />)}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  sectionProducts: {
    marginTop: 10,
    alignItems: 'center',
  },
  titleSection: {
    alignSelf: 'flex-start',
    fontSize: 19,
    color: 'black',
    fontWeight: '700',
    opacity: 0.5,
    marginLeft: 10
  },
  productList: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export default SectionProducts