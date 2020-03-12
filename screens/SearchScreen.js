import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, ActivityIndicator, Text } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import PetProfile from "../components/PetProfile";
import { connect } from "react-redux";
import heart from "../assets/images/heart.png";
import favoriteActions from "../store/actions/favorites";
import PropTypes from "prop-types";
import firebase from "../components/firebase";

const InputScreen = props => {
  const user = firebase.getCurrentUsername();
  const [tempData, setTempData] = useState([]);
  const [currentPet, setCurrentPet] = useState(10);
  const [liked, setLiked] = useState(false);
  let type = props.navigation.getParam("type");
  let zipCode = props.navigation.getParam("zipCode");
  let travelDistance = props.navigation.getParam("travelDistance");
  let data = tempData[currentPet];

  useEffect(() => {
    console.log(
      `https://petster3-back-end.herokuapp.com/search/${type}/${zipCode}/${travelDistance}/2020-03-03T21:06:38-00:00/100`
    );
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(
      `https://petster3-back-end.herokuapp.com/search/${type}/${zipCode}/${travelDistance}/2020-03-03T21:06:38-00:00/100`,
      options
    )
      // MOCK
      // fetch(
      //   `https://petster3-back-end.herokuapp.com/search/dog/98103/10/2020-03-03T21:06:38-00:00/100`,
      //   options
      // )
      .then(results => {
        return results.json();
      })
      .then(data => {
        setTempData(data[0]);
      })
      .catch(error => {
        alert("Please try again!");
      });
  }, [type, zipCode, travelDistance]);

  function onSwipeLeft() {
    console.log("you swiped left");
    setLiked(false);
    if (data.userName) {
      setLiked(true);
    }
    if (currentPet + 1 < tempData.length) {
      setCurrentPet(currentPet + 1);
    }
  }

  function onSwipeRight() {
    console.log("you swiped right");
    setLiked(false);
    if (data.userName) {
      setLiked(true);
    }
    if (currentPet > 0) {
      setCurrentPet(currentPet - 1);
    }
  }

  function handleLike() {
    console.log("you swiped up");
    data.userName = user;
    props.addFavorite(data);
    console.log(data);
    setLiked(true);
  }

  function handleDislike() {
    console.log("you swiped down");
    setLiked(false);
    props.deleteFavorite(data);
  }
  return (
    <>
      <View style={styles.container}>
        <GestureRecognizer
          onSwipeUp={handleLike}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          onSwipeDown={handleDislike}
        >
          {tempData.length ? (
            <PetProfile pet={tempData[currentPet]} />
          ) : (
            <View>
              <Text style={[styles.text, styles.loading]}>Loading Pets</Text>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
          {liked && (
            <Image class="heart" source={heart} width="64" height="64" />
          )}
        </GestureRecognizer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#003366",
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "AmaticSC-Regular"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center"
  },
  loading: {
    fontSize: 45,
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
