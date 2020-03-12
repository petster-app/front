import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, ActivityIndicator, Text } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import PetProfile from "../components/PetProfile";
import { connect } from "react-redux";
import heart from "../assets/images/heart.png";
import favoriteActions from "../store/actions/favorites";
import PropTypes from "prop-types";
import firebase from "../components/firebase";
import Icon from "react-native-vector-icons/FontAwesome";

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
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    // fetch(
    //   `https://petster3-back-end.herokuapp.com/search/${type}/${zipCode}/${travelDistance}/2020-03-03T21:06:38-00:00/100`,
    //   options
    // )
    //   MOCK
    fetch(
      `https://petster3-back-end.herokuapp.com/search/dog/98103/10/2020-03-03T21:06:38-00:00/100`,
      options
    )
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
      {/* <View style={styles.container}> */}
      {/* <View style={styles.headerTitle}>
          <Icon name="paw" color="#00CDBC" size={40}></Icon>
          <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
        </View>
        <GestureRecognizer
          onSwipeUp={handleLike}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          onSwipeDown={handleDislike}
        > */}
      <View style={styles.container}>
        {tempData.length ? (
          <>
            {/* <View style={styles.container}> */}
            <View style={styles.headerContainer}>
              <View style={styles.headerTitle}>
                <Icon name="paw" color="#00CDBC" size={40}></Icon>
                <Text style={[styles.text, styles.headerText]}>petster</Text>
              </View>
            </View>
            <GestureRecognizer
              onSwipeUp={handleLike}
              onSwipeLeft={onSwipeLeft}
              onSwipeRight={onSwipeRight}
              onSwipeDown={handleDislike}
            ></GestureRecognizer>
            <PetProfile pet={tempData[currentPet]} />
            {/* </View> */}
          </>
        ) : (
          <View>
            <Text style={[styles.text, styles.loading]}>Loading Pets</Text>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        {/* {liked && (
            <Image class="heart" source={heart} width="64" height="64" />
          )} */}
        {/* </GestureRecognizer> */}
        {/* </View> */}
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
    fontSize: 20,
    fontFamily: "Nunito-Bold"
  },
  headerContainer: {
    padding: 20
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Nunito-Bold"
  },

  loading: {
    fontSize: 30,
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
