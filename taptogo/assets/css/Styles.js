import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  Button: {
    backgroundColor: "#0367A6",
    textAlign: "center",
    padding: 15,
    width: "auto",
    borderRadius: 10,
    color: "#F5F5F5",
    textAlignVertical: "center",
  },

  ButtonText: {
    color: "#F5F5F5",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },

  LoginInput: {
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    padding: 15,
  },

  LoginImageContainer: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
  },

  LoginContentContainer: {
    width: "100%",
    height: "20%",
    gap: 10,
  },

  LoginImage: {
    width: "100%",
    height: "40%",
  },

  ContainerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  Input: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 15,
  },
});
