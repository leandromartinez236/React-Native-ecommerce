import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SearchBar from './SearchBar'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Navbar = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <SearchBar />
      {/* <View style={styles.section}>
        <TouchableOpacity>
          <Entypo name='shopping-bag' style={styles.shoppingBag} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name='cart' style={styles.cart} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shoppingBag: {
    fontSize: 10,
    color: 'gray',
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  cart: {
    fontSize: 10,
    color: 'gray',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
})
export default Navbar