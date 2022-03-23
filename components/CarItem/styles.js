import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    fontSize: 16,
    color: "#5c5e62",
    textDecorationLine: "underline",
  },
})

export default styles
