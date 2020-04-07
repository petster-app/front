import React, { useEffect, useState } from "react";
import {
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
  const [fetching, setFetching] = useState(true);
  let type = props.navigation.getParam("type");
  let zipCode = props.navigation.getParam("zipCode");
  let travelDistance = props.navigation.getParam("travelDistance");
  let date = new Date();
  date = date.toISOString();
  let data = petArray[currentPet];

  useEffect(() => {
    fetchPets();
  }, [type, zipCode, travelDistance]);

  function fetchPets() {
    setFetching(true);
    if(data) {
      data = petArray[currentPet];
      let newDate = data.published_at;
      newDate = newDate.slice(0, -5);
      newDate = new Date(newDate);
      newDate.setSeconds(newDate.getSeconds() - 1);
      newDate = newDate.toISOString();
      date = newDate;
    }

    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(
      `https://petster3-back-end.herokuapp.com/search/${type}/${zipCode}/${travelDistance}/${date}/20`,
      options
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        if(!petArray[0]) {
          setPetArray(data[0]);
          setFetching(false);
        } else {
          let morePets = petArray.concat(data[0]);
          setPetArray(morePets);
          setCurrentPet(currentPet + 1);
          setFetching(false);
        }
      })
      .catch(error => {
        props.navigation.navigate("InputScreen");
        alert("Sorry it doesn't look like there are any pets here. Please broaden your search and try again");
      });
  }
  function onSwipeRight() {
    if (currentPet > 0) {
      setCurrentPet(currentPet - 1);
      checkIfLiked(-1)
    }
  }

  function onSwipeLeft() {
    setLiked(false);
    if (currentPet + 1 < petArray.length) {
      setCurrentPet(currentPet + 1);
      checkIfLiked(1)
    }
    if (currentPet > petArray.length - 2 && !fetching) {
      fetchPets()
    }
  }

  function toggleLike() {
    if (!data.userName) {
      data.userName = user;
      props.addFavorite(data);
      setLiked(true);
    } else {
      props.deleteFavorite(data);
      setLiked(false);
    }
  }

  function checkIfLiked (direction) {
    let tempData = petArray[currentPet + direction];
    if (tempData.userName) {
      setLiked(true);
    } else {
      setLiked(false);
    }
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
        {!fetching ? (
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
                  onSwipeLeft={onSwipeLeft}
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
                <TouchableOpacity style={liked ? styles.button : styles.buttonGray} onPress={toggleLike}>
                  <Icon name="heart" color="white" size={45}/>
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
  buttonGray: {
    backgroundColor: "rgb(190,190,190)",
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
