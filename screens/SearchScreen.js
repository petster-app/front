import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import PetProfile from "../components/PetProfile";
import { connect } from "react-redux";
import favoriteActions from "../store/actions/favorites";
import PropTypes from "prop-types";
import firebase from "../components/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import Navigation from "../components/Navigation";
import { Dimensions } from "react-native";

const InputScreen = props => {
  const user = firebase.getCurrentUsername();
  const [petArray, setPetArray] = useState([]);
  const [currentPet, setCurrentPet] = useState(0);
  const [liked, setLiked] = useState(false);
  let type = props.navigation.getParam("type");
  let zipCode = props.navigation.getParam("zipCode");
  let travelDistance = props.navigation.getParam("travelDistance");
  let data = petArray[currentPet];

  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(
      `https://petster3-back-end.herokuapp.com/search/${type}/${zipCode}/${travelDistance}/null/100`,
      options
    )
      // MOCK;
      // fetch(
      //   `https://petster3-back-end.herokuapp.com/search/dog/98103/10/2020-03-03T21:06:38-00:00/100`,
      //   options
      // )
      .then(results => {
        return results.json();
      })
      .then(data => {
        setPetArray(data[0]);
      })
      .catch(error => {
        alert("Please try again!");
      });
  }, [type, zipCode, travelDistance]);

  function onSwipeRight() {
    if (currentPet < petArray.length - 1) {
      setCurrentPet(currentPet + 1);
    }
  }

  function handleLike() {
    data.userName = user;
    props.addFavorite(data);
    setLiked(true);
  }

  function handleDislike() {
    setLiked(false);
    props.deleteFavorite(data);
  }

  function handleDetails() {
    props.navigation.navigate("PetDetails", {
      pet: petArray[currentPet],
      comingFromScreen: "search"
    });
  }

  return (
    <>
      <View style={styles.container}>
        {petArray.length ? (
          <>
            <Navigation />

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: Dimensions.get("window").height * 0.05
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  shadowColor: "rgb(74,74,74)",
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  shadowOffset: {
                    height: 0.5,
                    width: 0.5
                  },
                  width: 340,
                  zIndex: 2,
                  marginBottom: Dimensions.get("window").height * 0.1
                }}
              >
                <GestureRecognizer
                  onSwipeRight={onSwipeRight}
                  onSwipeDown={handleDislike}
                  onSwipeUp={handleDetails}
                >
                  <PetProfile pet={petArray[currentPet]} />
                </GestureRecognizer>
              </View>
              <View
                style={[
                  styles.buttonContainer,
                  {
                    zIndex: 3,
                    position: "absolute",
                    left: Dimensions.get("window").width * 0.65,
                    bottom: Dimensions.get("window").width * 0.055,
                    shadowColor: "rgb(74,74,74)",
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    shadowOffset: {
                      height: 0.5,
                      width: 0.5
                    }
                  }
                ]}
              >
                <TouchableOpacity style={styles.button} onPress={handleLike}>
                  <Icon name="heart" color="white" size={45}></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height / 1.2
            }}
          >
            <Text style={styles.loading}>Loading Pets</Text>
            <ActivityIndicator size="large" color="rgb(74,74,74)" />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Nunito-Bold"
  },
  navContainer: {
    paddingBottom: 20,
    zIndex: 3
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgb(248,248,248)"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Nunito-Bold"
  },

  loading: {
    fontSize: 30,
    margin: 10,
    color: "rgb(74,74,74)",
    fontFamily: "Nunito",
    textAlign: "center"
  },
  button: {
    backgroundColor: "rgb(239,89,68)",
    borderRadius: 150,
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    margin: 10
  }
});

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: payload => dispatch(favoriteActions.addFavorite(payload)),
  deleteFavorite: favorite => dispatch(favoriteActions.deleteFavorite(favorite))
});

InputScreen.propTypes = {
  addFavorite: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);
