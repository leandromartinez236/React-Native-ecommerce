import { StyleSheet } from "react-native";
export const stylesCard = StyleSheet.create({
  container: {
    borderColor: "#aaaaa3",
    borderWidth: 1,
    width: "100%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  fav: {
    fontSize: 22,
  },
  title: {
    color: "black",
    // color: "#fff",
    fontWeight: "700",
    height: 20,
    maxHeight: 37,
    overflow: "hidden",
  },
  containerImage: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    position: "relative",
  },
  content: {
    justifyContent: "space-around",
    color: "green",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 11,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    backgroundColor: "#fff",
    // backgroundColor: "#eeeeee"
  },
  circle: {
    fontSize: 10,
    color: "#17f017",
    marginRight: 5
  },
  isAvailable: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#278c27a6",
    alignSelf: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
});
