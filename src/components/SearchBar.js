import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import StyledTextInput from './StyledTextInput'
import Constants from 'expo-constants'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <EvilIcons name='search' style={styles.search} />
      </TouchableOpacity>
      <StyledTextInput placeholder='Search' style={styles.input} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row'
  },
  button: {
    // top: Constants.statusBarHeight - 15,
    top: 9,
    left: 9,
    position: 'absolute',
    color: '#fff',
    borderRadius: 10,
    zIndex: 1
  },
  search: {
    width: '100%',
    height: '100%',
    fontSize: 25,
  },
  input: {
    paddingHorizontal: 37,
    color: 'gray',
    fontWeight: '700',
    backgroundColor: '#e9e9e9',
    width: '100%',
    padding: 5,
    borderRadius: 25
  }
})

export default SearchBar