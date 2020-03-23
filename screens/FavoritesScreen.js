import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Linking,
  TouchableHighlight
} from "react-native";
// import PetDetails from "../components/PetDetails";
import { connect } from "react-redux";
import favoriteActions from "../store/actions/favorites";
import PropTypes from "prop-types";
import firebase from "../components/firebase";

const favoritesScreen = props => {
  const [updatePage, setUpdatePage] = useState(false);
  const user = firebase.getCurrentUsername();

  function handleDetails(pet) {
    props.navigation.navigate("PetDetails", { pet: pet });
  }

  function handleDelete(pet) {
    props.deleteFavorite(pet);
  }

  useEffect(() => {
    props.fetchFavorites(user);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={[styles.header, styles.text]}>Favorite Pets</Text>
          {props.favorites.map((pet, index) => (
            <View style={styles.container} key={index}>
              <Image style={styles.image} source={{ uri: pet.photo }} />
              <Text style={[styles.name, styles.text]}>{pet.name}</Text>
              <View style={styles.buttons}>
                <Text
                  style={[styles.link, styles.text]}
                  onPress={() => Linking.openURL(pet.url)}
                >
                  ADOPT ME!
                </Text>
                <TouchableHighlight onPress={() => handleDetails(pet)}>
                  <Text style={[styles.link, styles.text]}>MORE INFO</Text>
                </TouchableHighlight>
                <Text
                  style={[styles.link, styles.text]}
                  onPress={() => handleDelete(pet)}
                >
                  DELETE
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    padding: 10
  },
  text: {
    textAlign: "center",
    color: "black"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around"
  },
  link: {
    fontFamily: "Nunito",
    fontSize: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 75
  },
  name: {
    margin: 5,
    fontSize: 30,
    fontFamily: "Nunito-Bold"
  },
  header: {
    fontFamily: "Nunito-Bold",
    fontSize: 40,
    margin: 10
  },
  image: {
    width: 350,
    height: 380
  }
});
