import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Linking,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Image from "react-native-scalable-image";
import ArrowIcon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import favoriteActions from "../store/actions/favorites";
import PropTypes from "prop-types";
import firebase from "../components/firebase";
import { setWorldAlignment } from "expo/build/AR";

const favoritesScreen = props => {
  const [updatePage, setUpdatePage] = useState(false);
  const user = firebase.getCurrentUsername();

  function handleDetails(pet) {
    props.navigation.navigate("PetDetails", {
      pet: pet,
      comingFromScreen: "favorites"
    });
  }

  function handleDelete(pet) {
    props.deleteFavorite(pet);
  }

  useEffect(() => {
    props.fetchFavorites(user);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            marginTop: 20
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("MyAccountScreen")}
          >
            <ArrowIcon name="arrow-left" color="rgb(184,184,184)" size={30} />
          </TouchableOpacity>
          <Text style={styles.header}>Favorite Pets</Text>
          <Text style={{ paddingRight: 50 }}></Text>
        </View>
        <SafeAreaView>
          <ScrollView>
            <View>
              {props.favorites.map((pet, index) => (
                <View key={index} style={styles.petCard}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: pet.photo }} />
                    <Text style={[styles.name, styles.text]}>{pet.name}</Text>
                    <View style={styles.buttons}>
                      <Text
                        style={[styles.button, styles.text]}
                        onPress={() => Linking.openURL(pet.url)}
                      >
                        ADOPT ME!
                      </Text>
                      <TouchableHighlight onPress={() => handleDetails(pet)}>
                        <Text style={[styles.button, styles.text]}>
                          MORE INFO
                        </Text>
                      </TouchableHighlight>
                      <Text
                        style={[styles.button, styles.text]}
                        onPress={() => handleDelete(pet)}
                      >
                        DELETE
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  fetchFavorites: user => dispatch(favoriteActions.fetchFavorites(user)),
  deleteFavorite: favorite => dispatch(favoriteActions.deleteFavorite(favorite))
});

favoritesScreen.propTypes = {
  fetchFavorites: PropTypes.func,
  deleteFavorite: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(favoritesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "rgb(248,248,248)"
  },
  petCard: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "rgb(74,74,74)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 0.5,
      width: 0.5
    },
    width: 300,
    margin: 30
  },
  text: {
    textAlign: "center",
    color: "black"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    width: 300,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    fontFamily: "Nunito",
    fontSize: 12,
    borderColor: "rgb(74,74,74)",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 85,
    borderWidth: 0.6,
    borderRadius: 10
  },
  name: {
    marginTop: 10,
    fontSize: 21,
    textAlign: "center",
    color: "black",
    fontFamily: "Nunito-Bold"
  },
  header: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    margin: 10
  },
  image: {
    width: "100%",
    height: 380
  },
  imageContainer: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  }
});
