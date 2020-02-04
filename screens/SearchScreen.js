import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import GallerySwiper from 'react-native-gallery-swiper';
import PetProfile from '../components/PetProfile';

  
  export default function InputScreen(props) {
    
    const [tempData, setTempData] = useState([]);
    const [petImages, setPetImages] = useState([]);
    const [currentPet, setCurrentPet] = useState(0);
    
    useEffect(() => {
      setTempData( [
        {
            "type": "Dog",
            "petfinderid": 46882414,
            "name": "\"Remi\" the dancing Poodle mix",
            "age": "Adult",
            "gender": "Male",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Please read the entire  bio before submitting a application or emailing.  * For a faster response please apply online at...",
            "url": "https://www.petfinder.com/dog/remi-the-dancing-poodle-mix-46882414/wa/seattle/6dogrees-rescue-wa581/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Poodle",
            "secondaryBreed": "Havanese",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46882414/2/?bust=1576696685&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46978438,
            "name": "Bubba Meyer",
            "age": "Young",
            "gender": "Male",
            "size": "Large",
            "city": "Shoreline",
            "state": "WA",
            "description": "HI! I & #39;M BUBBA! I & #39;m a 2-year-old black boxer mix recently saved from a shelter in the nick of time. I & #39;m...",
            "url": "https://www.petfinder.com/dog/bubba-meyer-46978438/wa/shoreline/gingers-death-row-dog-rescue-wa311/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Boxer",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46978438/1/?bust=1580265038&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47031557,
            "name": "Sunny",
            "age": "Adult",
            "gender": "Male",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Animal Profile: Sunny is an estimated 3-year-old male 12 lb Chihuahua mix who was just rescued from a high kill...",
            "url": "https://www.petfinder.com/dog/sunny-47031557/wa/seattle/dog-gone-seattle-wa650/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Chihuahua",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47031557/1/?bust=1580234866&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 40418228,
            "name": "Yogi Berra",
            "age": "Adult",
            "gender": "Male",
            "size": "Large",
            "city": "Seattle",
            "state": "WA",
            "description": "Breed: American Bulldog Mix Age/Sex/Weight: 5 years old/Neutered Male/72 pounds Special Considerations: Breed knowledgeable  &  experienced adopter required; Special needs;...",
            "url": "https://www.petfinder.com/dog/yogi-berra-40418228/wa/seattle/emerald-city-pet-rescue-wa538/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "American Bulldog",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40418228/2/?bust=1539304671&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47000313,
            "name": "Bambi",
            "age": "Young",
            "gender": "Female",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Bambi is the cutest little girl and her ears are as huge as her heart.  This little girl is an...",
            "url": "https://www.petfinder.com/dog/bambi-47000313/wa/seattle/safe-in-texas-inc-tx2199/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Chihuahua",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47000313/1/?bust=1577854691&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46728016,
            "name": "Keanu Meyer",
            "age": "Young",
            "gender": "Male",
            "size": "Large",
            "city": "Shoreline",
            "state": "WA",
            "description": "HI - I & #39;M KEANU! I & #39;m a 2-year-old male black  & amp; white lab mix saved from the shelter on Thanksgiving weekend!...",
            "url": "https://www.petfinder.com/dog/keanu-meyer-46728016/wa/shoreline/gingers-death-row-dog-rescue-wa311/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Labrador Retriever",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46728016/1/?bust=1580265044&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47098282,
            "name": "Dana, darling & affectionate sweetheart! (Woodinville)",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet adorable and affectionate sweetheart- Dana!  Greyhound Pets in Woodinville rescued this amazing 6-year-old all the way from Jerusalem where...",
            "url": "https://www.petfinder.com/dog/dana-darling-and-affectionate-sweetheart-woodinville-47098282/wa/seattle/ferry-dog-mothers-wa391/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Greyhound",
            "secondaryBreed": "Yellow Labrador Retriever",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47098282/1/?bust=1578884261&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47077046,
            "name": "Jaguar",
            "age": "Baby",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Jag is looking for his forever valentine love! He is one of our adorable Car Puppies. His mama was rescued...",
            "url": "https://www.petfinder.com/dog/jaguar-47077046/wa/seattle/pawprint-cottage-rescue-tx2271/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Black Mouth Cur",
            "secondaryBreed": "Shepherd",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47077046/5/?bust=1580603753&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47037206,
            "name": "Paisley",
            "age": "Adult",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Hi Im Paisley!  Im 5.5 years old  my family is getting a divorce so I need a new home. I...",
            "url": "https://www.petfinder.com/dog/paisley-47037206/wa/seattle/ladys-hope-dog-rescue-wa503/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Cattle Dog",
            "secondaryBreed": "Pit Bull Terrier",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47037206/1/?bust=1578288423&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46801280,
            "name": "Tex",
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Tex is about 1 year old. We believe he's an Aussie mix and exhibits classic herding breed behaviors.  He does...",
            "url": "https://www.petfinder.com/dog/tex-46801280/wa/seattle/second-chance-dog-rescue-tx1984/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Australian Shepherd",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46801280/1/?bust=1575928261&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47154835,
            "name": "Tot",
            "age": "Baby",
            "gender": "Female",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Hello PNW my name is Tot my foster mom she said that I am very sweet and curios, she also...",
            "url": "https://www.petfinder.com/dog/tot-47154835/wa/seattle/k9kare-tx2091/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Chihuahua",
            "secondaryBreed": "Pug",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47154835/1/?bust=1579546980&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47264382,
            "name": "Starr",
            "age": "Baby",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Starr- Female, Staffordshire mix, 15lbs  Hi, my name is Starr and I’m ready to find a home! I’m a beautiful...",
            "url": "https://www.petfinder.com/dog/starr-47264382/wa/seattle/faith-and-hope-foundation-inc-tx2308/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Staffordshire Bull Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47264382/1/?bust=1580515959&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47214635,
            "name": "GRAYCI",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "(This is a courtesy posting.) Hi, my name is GRAYCI.  What's yours?  Nice to meet ya!  WATCH MY VIDEOS: https://youtu.be/Jj6mraxLl0E...",
            "url": "https://www.petfinder.com/dog/grayci-47214635/wa/seattle/rescue-dogs-galore-tx2383/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Husky",
            "secondaryBreed": "Shepherd",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47214635/1/?bust=1580062862&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47235556,
            "name": "Hershey",
            "age": "Baby",
            "gender": "Male",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": null,
            "url": "https://www.petfinder.com/dog/hershey-47235556/wa/seattle/furever-welcomed-rescue-tx2293/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Rat Terrier",
            "secondaryBreed": "Chihuahua",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47235556/1/?bust=1580262247&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46870450,
            "name": "Perdita",
            "age": "Adult",
            "gender": "Female",
            "size": "Medium",
            "city": "seattle",
            "state": "WA",
            "description": "Hi, I'm Perdita. I'm what you would call an extroverted introvert. I like to hang back and assess the situation...",
            "url": "https://www.petfinder.com/dog/perdita-46870450/wa/seattle/devs-paradise-tx2327/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "American Staffordshire Terrier",
            "secondaryBreed": "Boxer",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46870450/2/?bust=1578546907&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47208876,
            "name": "Summer, social & sweet- best playmate! (Woodinville)",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet super gorgeous Summer!  This 55lb 2-year-old is super friendly, happy and extremely bouncy! Summer has a lot of energy...",
            "url": "https://www.petfinder.com/dog/summer-social-and-sweet-best-playmate-woodinville-47208876/wa/seattle/ferry-dog-mothers-wa391/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Pointer",
            "secondaryBreed": "Greyhound",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47208876/1/?bust=1579985458&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46706213,
            "name": "Zorro Meyer",
            "age": "Adult",
            "gender": "Male",
            "size": "Large",
            "city": "Shoreline",
            "state": "WA",
            "description": "HI - I & #39;M ZORRO MEYER! I & #39;m a handsome 6 year old blue-and-white pit bull terrier, recently saved from a shelter....",
            "url": "https://www.petfinder.com/dog/zorro-meyer-46706213/wa/shoreline/gingers-death-row-dog-rescue-wa311/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Pit Bull Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46706213/1/?bust=1580419102&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47237517,
            "name": "Blondie",
            "age": "Young",
            "gender": "Female",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Animal Profile: Blondie is an adorable ~1 year old chihuahua mix who was just rescued from a high kill shelter...",
            "url": "https://www.petfinder.com/dog/blondie-47237517/wa/seattle/dog-gone-seattle-wa650/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Chihuahua",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47237517/1/?bust=1580289668&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47183400,
            "name": "Johnny Cash, a GREAT Companion!",
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Johnny Cash is a handsome boy with a beautiful black coat with a Chocolate over tone in the sun!     He...",
            "url": "https://www.petfinder.com/dog/johnny-cash-a-great-companion-47183400/wa/seattle/freedom-street-rescue-tx1775/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Pit Bull Terrier",
            "secondaryBreed": "Labrador Retriever",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47183400/3/?bust=1579753759&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47151039,
            "name": "Wasp",
            "age": "Adult",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet Wasp!  This guy is looking for a family who loves to hang around the house and chill.  He's active...",
            "url": "https://www.petfinder.com/dog/wasp-47151039/wa/seattle/paw-pals-of-hale-center-tx2156/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Labrador Retriever",
            "secondaryBreed": "Pit Bull Terrier",
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47151039/3/?bust=1579454146&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47202225,
            "name": "Tody - Cute as a Bug in a Rug!",
            "age": "Young",
            "gender": "Male",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet Tody, cute as a bug! This little sweetie was rescued from South Korea where the dog meat trade is...",
            "url": "https://www.petfinder.com/dog/tody-cute-as-a-bug-in-a-rug-47202225/wa/seattle/saving-great-animals-wa-wa418/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47202225/1/?bust=1580571965&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47237981,
            "name": "Rosie",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Animal Information: Rosie is an estimated 2-year-old 30 lb mixed breed who hails from Texas and is joining Dog Gone...",
            "url": "https://www.petfinder.com/dog/rosie-47237981/wa/seattle/dog-gone-seattle-wa650/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47237981/1/?bust=1580293283&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47064987,
            "name": "Octavia",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Animal Profile: Octavia is an estimated 2-3 year old (now) spayed female Lab mix who is mom to a litter...",
            "url": "https://www.petfinder.com/dog/octavia-47064987/wa/seattle/dog-gone-seattle-wa650/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Labrador Retriever",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47064987/1/?bust=1580405506&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 39489280,
            "name": "VOLUNTEERS WANTED",
            "age": "Adult",
            "gender": "Male",
            "size": "Large",
            "city": "Bothell",
            "state": "WA",
            "description": "Hi there!  Do you LOVE German Shepherds?  Are they the only dog you'd ever consider?  Us too!  We are currently...",
            "url": "https://www.petfinder.com/dog/volunteers-wanted-39489280/wa/bothell/northwest-german-shepherd-rescue-wa422/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "German Shepherd Dog",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/39489280/1/?bust=1506454624&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47155899,
            "name": "Lyra",
            "age": "Baby",
            "gender": "Female",
            "size": "Medium",
            "city": "Kirkland",
            "state": "WA",
            "description": "Lyra is very sweet 8 - 9 months old Australian cattle dog mix. Last picture is her mom adopted already....",
            "url": "https://www.petfinder.com/dog/lyra-47155899/wa/kirkland/heaven-4-paws-wa554/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Australian Cattle Dog / Blue Heeler",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47155899/1/?bust=1579682386&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46757947,
            "name": "Pumba",
            "age": "Adult",
            "gender": "Male",
            "size": "Large",
            "city": "Seattle",
            "state": "WA",
            "description": "Breed: Labrador Retriever Mix Age/Sex: 5 years old / neutered male Weight: 86lbs Considerations: Pumba needs a family willing to...",
            "url": "https://www.petfinder.com/dog/pumba-46757947/wa/seattle/emerald-city-pet-rescue-wa538/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Labrador Retriever",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46757947/1/?bust=1575505986&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47159440,
            "name": "Maisie",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "NO LONGER ACCEPTING APPLICATIONS  Animal Profile: Maisie is an estimated 2 year old 36 lb Hound mix who we just...",
            "url": "https://www.petfinder.com/dog/maisie-47159440/wa/seattle/dog-gone-seattle-wa650/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Hound",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47159440/1/?bust=1580237783&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 44008047,
            "name": "Buddy White",
            "age": "Adult",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "•\tBreed: Pit Bull •\tAge/Sex: 9 year-old / neutered male •\tWeight:  59 lbs •\tSpecial Considerations: Buddy White...",
            "url": "https://www.petfinder.com/dog/buddy-white-44008047/wa/seattle/emerald-city-pet-rescue-wa538/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Pit Bull Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44008047/3/?bust=1559777019&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47108369,
            "name": "Harold",
            "age": "Adult",
            "gender": "Male",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "Harold is an estimated 3-year-old itty bitty 7 lb chihuahua who was just rescued from a kill shelter in California...",
            "url": "https://www.petfinder.com/dog/harold-47108369/wa/seattle/dog-gone-seattle-wa650/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Chihuahua",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47108369/1/?bust=1580234867&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 41479785,
            "name": "ALLIE— loves her toys!!",
            "age": "Adult",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet ALLIE  A one-year-old blue pit bull terrier . She is a petite little girl at 50lbs.  Allie is a...",
            "url": "https://www.petfinder.com/dog/allie-loves-her-toys-41479785/wa/seattle/best-friends-furever-tx1156/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Pit Bull Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41479785/1/?bust=1524630515&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47153340,
            "name": "Inky",
            "age": "Baby",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Inky- 17 week Staffordshire Terrier mix, 19lb  Hi! My name is Inky and I am the ultimate hunk. I’m always...",
            "url": "https://www.petfinder.com/dog/inky-47153340/wa/seattle/faith-and-hope-foundation-inc-tx2308/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Staffordshire Bull Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47153340/1/?bust=1579490348&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47153190,
            "name": "Ziggy",
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "This Ziggy! He is about 8 months to 1 year old. Best breed guess is kelpie mix.    He was abandoned...",
            "url": "https://www.petfinder.com/dog/ziggy-47153190/wa/seattle/second-chance-dog-rescue-tx1984/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Australian Kelpie",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47153190/2/?bust=1579486077&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46742677,
            "name": "Upton",
            "age": "Baby",
            "gender": "Male",
            "size": "Large",
            "city": "Bothell",
            "state": "WA",
            "description": "Please fill out our short application - the link is below. Meet Upton otherwise known as Uptown Funky Pup or...",
            "url": "https://www.petfinder.com/dog/upton-46742677/wa/bothell/great-pyrenees-rescue-society-tx920/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Great Pyrenees",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46742677/1/?bust=1580333673&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 46348651,
            "name": "Sophie",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet Sophie she is a beautiful lovable and shy girl! Sophie loves belly rubs and toys, she is a little...",
            "url": "https://www.petfinder.com/dog/sophie-46348651/wa/seattle/k9kare-tx2091/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Labrador Retriever",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46348651/2/?bust=1571764839&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 44431656,
            "name": "Mae West",
            "age": "Senior",
            "gender": "Female",
            "size": "Small",
            "city": "Seattle",
            "state": "WA",
            "description": "•\tBreed: Maltese •\tAge/Sex: 10 year-old / spayed female •\tWeight: 9lbs •\tSpecial Considerations: Mae West has sight...",
            "url": "https://www.petfinder.com/dog/mae-west-44431656/wa/seattle/emerald-city-pet-rescue-wa538/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Maltese",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44431656/1/?bust=1554937900&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 47159702,
            "name": "Raymond - Cutest Collie Boy!",
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "city": "Seattle",
            "state": "WA",
            "description": "Meet adorable Raymond who has been rescued along with his sweet brother Ray. Why not similar names if they look...",
            "url": "https://www.petfinder.com/dog/raymond-cutest-collie-boy-47159702/wa/seattle/saving-great-animals-wa-wa418/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Collie",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47159702/1/?bust=1580318227&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 45881007,
            "name": "Max Meyer",
            "age": "Adult",
            "gender": "Male",
            "size": "Large",
            "city": "Shoreline",
            "state": "WA",
            "description": "HI - I & #39;M MAX MEYER and I & #39;m in desperate need of a forever home or a foster home. I am...",
            "url": "https://www.petfinder.com/dog/max-meyer-45881007/wa/shoreline/gingers-death-row-dog-rescue-wa311/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Boxer",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45881007/1/?bust=1580265054&width=300",
            "inFavs": false
        },
        {
            "type": "Dog",
            "petfinderid": 45274087,
            "name": "Patches Meyer",
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "city": "Shoreline",
            "state": "WA",
            "description": "WOOF - I & #39;M PATCHES! I am a 2-year-old female pit bull terrier girl with a winning smile and a great...",
            "url": "https://www.petfinder.com/dog/patches-meyer-45274087/wa/shoreline/gingers-death-row-dog-rescue-wa311/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b",
            "primaryBreed": "Pit Bull Terrier",
            "secondaryBreed": null,
            "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45274087/1/?bust=1580249421&width=300",
            "inFavs": false
        },

    ])
      let type = props.navigation.getParam('type');
      let zipCode = props.navigation.getParam('zipCode');
      let travelDistance = props.navigation.getParam('travelDistance');
  

      let options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      fetch(`http://localhost:3000/search/dog/98103/10`, options)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        return data[0];
      })
      .then((data) => {
        setTempData(data);
        const tempPetImages = [];
        data.map((pet) => {  
          if(pet.photo){
            tempPetImages.push({ url: pet.photo });
          }
        });
        if(tempPetImages.length){
        setPetImages(tempPetImages);
        }
      })
  }, [])

  function saveToFavorites(event) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tempData[event]),
    }
    fetch(`http://localhost:3000/favorites`, options)
    .then(() => {
    })
  }

  return (
    <View style={styles.container}>
        { tempData.length? <PetProfile onLongPress={()=>{console.log("pressed")}} onClick pet={tempData[currentPet]} /> : null}
    </View>
  );

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#003366',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
});
