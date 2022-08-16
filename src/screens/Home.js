import React, { useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Navbar from '../components/Navbar'
import SectionProducts from '../components/SectionProducts'
import { getProducts } from '../redux/actions/productActions'

const Home = ({ navigation }) => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.log(err))
    dispatch(getProducts(response?.data));
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <SectionProducts navigation={navigation} />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeeee',
    paddingHorizontal: 16
  }
})

export default Home