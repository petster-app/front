import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import PetProfile from "../components/PetProfile";
import { connect } from "react-redux";
import favoriteActions from "../store/actions/favorites";
import PropTypes from "prop-types";
import firebase from "../components/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import Navigation from "../components/Navigation";

const InputScreen = props => {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;
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
  let data;

  useEffect(() => {
    fetchPets();
  }, []);

  function fetchPets() {
    setFetching(true);
    if (data) {
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
        if (data[0].length === 0) {
          alert(
            "Sorry it doesn't look like there are any more pets here. Please broaden your search and try again"
          );
          setFetching(false);
          return;
        }
        if (!petArray[0]) {
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
        alert(
          "Sorry it doesn't look like there are any pets here. Please broaden your search and try again"
        );
      });
  }

  function onSwipedRight() {
    if (currentPet > 0) {
      setCurrentPet(currentPet - 1);
      checkIfLiked(-1);
    }
  }

  function onSwipedLeft() {
    setLiked(false);
    if (currentPet + 1 < petArray.length) {
      setCurrentPet(currentPet + 1);
      checkIfLiked(1);
    }
    if (currentPet > petArray.length - 2 && !fetching) {
      fetchPets();
    }
  }

  function toggleLike(index) {
    console.log('whatsup', index)
    data = petArray[index];
    if (!data.userName) {
      data.userName = user;
      props.addFavorite(data);
      setLiked(true);
    } else {
      props.deleteFavorite(data);
      setLiked(false);
    }
  }

  function checkIfLiked(direction) {
    let tempData = petArray[currentPet + direction];
    if (tempData.userName) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }

  function handleDetails(index) {
    props.navigation.navigate("PetDetails", {
      pet: petArray[index],
      comingFromScreen: "search"
    });
  }

  return (
    <>
      <View style={styles.container}>
        {!fetching ? (
          <>
            <Navigation />

            <Swiper
              disableLeftSwipe={true}
              cards={petArray}
              renderCard={(card, index) => {
                return (
                  <>
                    <TouchableHighlight onPress={() => handleDetails(index)} style={{ marginTop: 60 }}>
                      <>
                        <PetProfile pet={card} />
                        <View
                          style={[
                            styles.buttonContainer,
                            {
                              zIndex: 3,
                              position: "absolute",
                              left: Dimensions.get("window").width * 0.65,
                              bottom: 0,
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
                          {console.log(liked)}
                          <TouchableOpacity
                            style={liked ? styles.button : styles.buttonGray}
                            onPress={() => toggleLike(index)}
                          >
                            <Icon name="heart" color="white" size={45} />
                          </TouchableOpacity>
                        </View>
                      </>
                    </TouchableHighlight>
                  </>
                )
              }}
              onSwiped={(cardIndex) => { console.log(cardIndex) }}
              onSwipedAll={() => { console.log('onSwipedAll') }}
              onSwipedLeft={() => console.log('swiped left')}
              onSwipedRight={() => console.log('swiped right')}
              cardIndex={0}
              backgroundColor={"#f8f8f8"}
              stackSize={5}>
            </Swiper>
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
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center"
  },
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
