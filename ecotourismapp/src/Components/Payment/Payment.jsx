import React from "react";
import { useState } from "react";
import {
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  IconButton,
  Image,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  VStack,
  FormLabel,
  Input,
  Select,
  Modal,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

import {
  BsFill1SquareFill,
  BsFill3SquareFill,
  BsFill4SquareFill,
  BsFillInfoCircleFill,
  BsFill2SquareFill,
} from "react-icons/bs";
import { GrFormSubtract, GrFormAdd, GrRadialSelected } from "react-icons/gr";
import Price from "../Price";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer1";

// const data = {
//   id: 1,
//   image_url: "https://source.unsplash.com/random/300Xx1200/?Travel",
//   destination_title: "Narkanda",
//   location: "Sri Lanka",
//   grade: "4 stars",
//   fees: "1113",
//   description:
//     "Narkanda is a tiny town in Shimla in the Indian hill state of Himachal Pradesh. Seated on the Hindustan-Tibet Road, Narkanda is encircled by the green cover of the Himalayas and hence, renowned for its apple orchards, treks and scenic beauty.",
// };

function Payment() {
  const { id } = useParams();
  const destinations = [
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Wat Chaiwatthanaram",
      location: "Ayutthaya, Thailand",
      grade: 5,
      fees: 881,
      description:
        "Reality reach memory six thing. Field probably deep blue dream service eye officer. At seven both strong marriage.",
      id: 1,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Osbornton kitchen",
      location: "Sri Lanka",
      grade: 4,
      fees: 1113,
      description:
        "Theory write senior understand agency however. Song sometimes teach official most family significant. Career per attorney they provide thought.",
      id: 2,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "East Alisonberg ground",
      location: "Cape Verde",
      grade: 4,
      fees: 1825,
      description:
        "Relationship source if either thing benefit member remember. Base interesting clear grow there admit interesting senior. Health want ago green that give.",
      id: 3,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "East Emilybury few",
      location: "Costa Rica",
      grade: 3,
      fees: 3505,
      description:
        "Tax source grow nature contain decade guy. Letter military soldier never national.",
      id: 4,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Christopherfort region",
      location: "Antarctica ",
      grade: 3,
      fees: 1982,
      description:
        "Check rather paper behavior discuss director process doctor. Indeed represent floor laugh think support.",
      id: 5,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Marieberg water",
      location: "South Africa",
      grade: 1,
      fees: 1915,
      description:
        "Deep home sell tough per language Democrat. Month seat continue cut drug.",
      id: 6,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Stewarttown eye",
      location: "Cook Islands",
      grade: 3,
      fees: 1493,
      description:
        "Himself black marriage suggest card give. Floor would fight author. Share play world similar those rate.",
      id: 7,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Bowersland firm",
      location: "Hong Kong",
      grade: 4,
      fees: 640,
      description:
        "Certainly focus meeting impact religious significant. Discussion make everything finish TV word able.",
      id: 8,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Christopher charge",
      location: "Equatorial Guinea",
      grade: 4,
      fees: 905,
      description:
        "Although politics Republican difference until check. Be fast to his company author.",
      id: 9,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Holly ability",
      location: "Malta",
      grade: 5,
      fees: 1412,
      description:
        "Alone story political Republican kind. Next business old quickly economy upon middle.",
      id: 10,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Davisstad miss",
      location: "Mali",
      grade: 5,
      fees: 1415,
      description:
        "Kid open point I. Traditional figure about year they sport space what. Scene action true can.",
      id: 11,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Hendersonhaven moment",
      location: "Guatemala",
      grade: 4,
      fees: 605,
      description: "Century firm head despite. Live can message after.",
      id: 12,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Angelaland listen",
      location: "Bermuda",
      grade: 5,
      fees: 505,
      description:
        "Hotel student month agreement manager write receive. Analysis every read. Feeling itself left heavy hit door.",
      id: 13,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Nancyburgh candidate",
      location: "Samoa",
      grade: 4,
      fees: 1690,
      description:
        "Reason pretty employee. Lot what more next. Whatever generation issue effect.",
      id: 14,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Beckborough give",
      location: "Eritrea",
      grade: 5,
      fees: 1185,
      description:
        "Nature may environmental dog management company daughter every. Begin realize against at. Spring perform data.",
      id: 15,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Aliciamouth future",
      location: "Mauritania",
      grade: 4,
      fees: 650,
      description:
        "Must now church gas. Trouble administration entire threat thing. Sure enough color institution.",
      id: 16,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "New Bradley garden",
      location: "New Caledonia",
      grade: 1,
      fees: 385,
      description:
        "Bank language trial cost type mention. Analysis present role its step bed simple. Analysis per their skin light.",
      id: 17,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Lake Jill least",
      location: "Anguilla",
      grade: 1,
      fees: 1322,
      description:
        "Author important leave kitchen out head. Accept use much different. Increase trouble early teacher. Hear blood discussion west song between course.",
      id: 18,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Davidborough court",
      location: "Botswana",
      grade: 3,
      fees: 695,
      description:
        "Senior indeed available senior. Try step picture. Employee strategy important pretty want memory none.",
      id: 19,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Brennanbury condition",
      location: "Belarus",
      grade: 4,
      fees: 1425,
      description:
        "Large must push raise need shake plan professor. Attention religious tend manage relationship. Trouble other family word crime. Pretty especially while light rich control order page.",
      id: 20,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Lorifurt keep",
      location: "South Africa",
      grade: 3,
      fees: 1364,
      description:
        "Republican service little respond current including. Your drug fire view everyone news.",
      id: 21,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Lake Matthewberg help",
      location: "Costa Rica",
      grade: 4,
      fees: 1350,
      description:
        "Recent of other if three police with. Four owner standard open seem himself.",
      id: 22,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Raymond ball",
      location: "Antigua and Barbuda",
      grade: 3,
      fees: 625,
      description:
        "Audience kind by data. Us often state win name according activity number.",
      id: 23,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "East Tinashire financial",
      location: "Cyprus",
      grade: 5,
      fees: 1970,
      description:
        "Whether successful coach. Week whose soon hard feeling bank chance. Power seven development responsibility sound.",
      id: 24,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Lisaton nothing",
      location: "Ecuador",
      grade: 3,
      fees: 1035,
      description:
        "Various skin modern live better picture. Mrs wear few history trial speak affect discuss. Current open federal somebody case.",
      id: 25,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Christinafurt produce",
      location: "Samoa",
      grade: 3,
      fees: 704,
      description:
        "East state building chance image. Enough among know little out wish wonder.",
      id: 26,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Port Carlastad over",
      location: "Egypt",
      grade: 4,
      fees: 785,
      description:
        "Life water mean suffer. Wish education truth owner speech physical sound. Threat movie professional.",
      id: 27,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Mark church",
      location: "Isle of Man",
      grade: 3,
      fees: 571,
      description:
        "Lot what particularly commercial six almost everyone growth. Eat local recognize garden force lead. Event question population read. Religious note military our bar help.",
      id: 28,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Ashleyhaven when",
      location: "Christmas Island",
      grade: 4,
      fees: 1285,
      description:
        "Food third community child tonight. Knowledge citizen various community my through. Life next form whole arm top role.",
      id: 29,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Michael trip",
      location: "Iran",
      grade: 1,
      fees: 1515,
      description:
        "News direction let. Write PM baby less. Choice bed involve probably again agency.",
      id: 30,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "New Edwardchester choice",
      location: "Italy",
      grade: 1,
      fees: 1495,
      description:
        "Officer top man establish. Read budget operation purpose about represent. Partner assume direction a about.",
      id: 31,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "East Jeffreymouth wrong",
      location: "Zimbabwe",
      grade: 5,
      fees: 1275,
      description: "Always factor apply. Result current speech way again.",
      id: 32,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Riverabury girl",
      location: "Hong Kong",
      grade: 5,
      fees: 1525,
      description:
        "Work life indeed out customer station. Job successful nearly. Democratic party situation. Perform husband whom impact.",
      id: 33,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Millerside piece",
      location: "Ethiopia",
      grade: 4,
      fees: 545,
      description:
        "Ever nothing doctor. Inside American join politics assume once. Because concern issue maintain represent within black.",
      id: 34,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Davidbury wait",
      location: "United States of America",
      grade: 4,
      fees: 561,
      description:
        "Hear then push. Administration particular fact own along blood garden. Party surface across agent someone plant thing.",
      id: 35,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Williamsshire or",
      location: "Uzbekistan",
      grade: 4,
      fees: 1722,
      description:
        "Collection fast someone popular small human. Up life should once whose edge. More stop woman could car.",
      id: 36,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Jeremiahhaven serious",
      location: "Burundi",
      grade: 5,
      fees: 1932,
      description: "Wide everything fine real return view.",
      id: 37,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Cindymouth reality",
      location: "Taiwan",
      grade: 5,
      fees: 1565,
      description:
        "Sense friend professional modern. Certainly agent set bit approach enough.",
      id: 38,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Phillipsland leg",
      location: "Ukraine",
      grade: 4,
      fees: 1075,
      description:
        "Your into best voice. Course home sit opportunity rate fly. Produce statement can. Girl final build direction environment.",
      id: 39,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Hansenville end",
      location: "Oman",
      grade: 5,
      fees: 1715,
      description:
        "Factor find image final. Positive indeed along size drive democratic. Chance call short establish.",
      id: 40,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Carriefort fill",
      location: "French Southern Territories",
      grade: 3,
      fees: 1455,
      description:
        "Father believe thank maybe current chance mission inside. Instead hot lead side industry unit light.",
      id: 41,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Christophermouth box",
      location: "Jamaica",
      grade: 5,
      fees: 905,
      description:
        "Develop enough together hundred side behavior operation. Sit yard million. Place office eat into attorney player perform together.",
      id: 42,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Jasonfort the",
      location: "Canada",
      grade: 4,
      fees: 1614,
      description:
        "Add get quite. Paper look plant exist plant. Current standard adult of market class black. Deal factor prevent beyond magazine activity responsibility few.",
      id: 43,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Lindseyland interesting",
      location: "Wallis and Futuna",
      grade: 3,
      fees: 841,
      description: "Ago view affect world effect worry head everyone.",
      id: 44,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Ramosbury throw",
      location: "United States of America",
      grade: 5,
      fees: 1414,
      description:
        "When myself ability return front character week. Too scientist whose open less its central.",
      id: 45,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Heather recently",
      location: "Guyana",
      grade: 3,
      fees: 530,
      description:
        "New worker fire both late. Democratic issue whether wall party. Morning although industry you job.",
      id: 46,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Marshallstad thank",
      location: "Russian Federation",
      grade: 5,
      fees: 1631,
      description:
        "Local sound impact boy. Their traditional operation happen.",
      id: 47,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Rachelbury order",
      location: "Niue",
      grade: 3,
      fees: 1065,
      description: "Which share read like.",
      id: 48,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "East David among",
      location: "Central African Republic",
      grade: 4,
      fees: 1385,
      description:
        "Partner each sometimes power particularly agreement value. Project sign truth put. Choice win at card interview candidate home.",
      id: 49,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Johnsonbury tax",
      location: "Netherlands Antilles",
      grade: 3,
      fees: 1761,
      description:
        "Expert southern live view box we main. Describe know enough share ground nor.",
      id: 50,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Rodriguezborough arm",
      location: "Azerbaijan",
      grade: 4,
      fees: 305,
      description:
        "Again base fast. Middle measure end or whom try fly. Role realize lawyer prove nice only start. Other set herself share series.",
      id: 51,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Anthonyhaven policy",
      location: "Taiwan",
      grade: 5,
      fees: 1581,
      description:
        "Hour same actually it. Deep report see blood test indicate scene. Example call feel woman.",
      id: 52,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Emilyhaven soon",
      location: "Cuba",
      grade: 5,
      fees: 1183,
      description:
        "Seek might open significant. Meeting drive water mention think remember store.",
      id: 53,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Port Jeffery number",
      location: "Christmas Island",
      grade: 4,
      fees: 1474,
      description:
        "American way yourself age north get significant. Media the up people.",
      id: 54,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Jamietown chance",
      location: "Croatia",
      grade: 3,
      fees: 505,
      description:
        "Individual fill eight window along run. Threat address stage fight option company issue. Owner woman since society skill blood leg.",
      id: 55,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Michaelton consumer",
      location: "Angola",
      grade: 5,
      fees: 1525,
      description:
        "Successful close either rock serve later scene. Few leave church board participant well skill. Quickly focus pass give middle.",
      id: 56,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Connie project",
      location: "Guam",
      grade: 4,
      fees: 534,
      description:
        "Stuff firm community hair environmental marriage cause. Body use seven call land. Father wrong every behavior become experience culture process.",
      id: 57,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Jonestown kitchen",
      location: "Falkland Islands (Malvinas)",
      grade: 3,
      fees: 1525,
      description:
        "Figure social performance production. Increase produce method front film yes. Movie under Republican.",
      id: 58,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Bennetthaven where",
      location: "Korea",
      grade: 4,
      fees: 845,
      description:
        "On realize like vote. Kid visit tonight suggest car physical central. Measure about low.",
      id: 59,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Jerryview reduce",
      location: "Denmark",
      grade: 3,
      fees: 1065,
      description:
        "Station beyond seat rule smile article care. Relationship war west Democrat total mention. Politics be exist program area.",
      id: 60,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Marieland discover",
      location: "Dominica",
      grade: 3,
      fees: 1975,
      description:
        "Record whom step them same. Study area meeting. Keep girl charge describe subject general.",
      id: 61,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Felicia agency",
      location: "Grenada",
      grade: 3,
      fees: 1271,
      description:
        "Move arrive huge movie age. Modern quickly of save have. War adult significant hope community act.",
      id: 62,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Stewartshire development",
      location: "Guatemala",
      grade: 4,
      fees: 1145,
      description:
        "Body return marriage meeting reveal support debate. Help whom ago goal early second weight.",
      id: 63,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Harriston state",
      location: "Equatorial Guinea",
      grade: 5,
      fees: 1114,
      description:
        "Order international fish citizen send. Consider standard decision early several from participant. Instead dream state employee.",
      id: 64,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Johnsonfurt do",
      location: "Senegal",
      grade: 3,
      fees: 1783,
      description: "Throughout car man possible.",
      id: 65,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "New Monique sit",
      location: "Thailand",
      grade: 5,
      fees: 995,
      description:
        "Relationship wait material subject attack cost reach civil. Drop military occur candidate catch strategy job.",
      id: 66,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Angelaville past",
      location: "Marshall Islands",
      grade: 3,
      fees: 1555,
      description:
        "Sound down produce parent. Outside address executive spring argue look foot letter.",
      id: 67,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Williamside agency",
      location: "Japan",
      grade: 5,
      fees: 1202,
      description:
        "Attention wall each grow realize surface. Give even reduce impact approach.",
      id: 68,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Heatherbury together",
      location: "Zambia",
      grade: 3,
      fees: 334,
      description:
        "Owner little response chair. Effort perform human nor own different present compare. Radio nor deep brother four outside great.",
      id: 69,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Burtonfurt member",
      location: "Kenya",
      grade: 5,
      fees: 1285,
      description:
        "View available thousand positive husband ever economic about. Myself at training pass wish later.",
      id: 70,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Jamesburgh success",
      location: "Cambodia",
      grade: 5,
      fees: 1864,
      description:
        "Yes media full listen policy plant. Anyone should what end consumer give good sign. Worry to we nothing nor win specific.",
      id: 71,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Riosstad employee",
      location: "Gibraltar",
      grade: 4,
      fees: 1312,
      description:
        "Science world none station. Apply attack gas road together could. Behavior nor Mrs idea miss. Prove professor body for offer get.",
      id: 72,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Karenberg child",
      location: "Gabon",
      grade: 3,
      fees: 1235,
      description:
        "Expect candidate room other strong age role benefit. Unit care should blood.",
      id: 73,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Lake Christina only",
      location: "Turkmenistan",
      grade: 3,
      fees: 954,
      description:
        "Charge sort wear unit. Oil onto admit research degree. Mother individual bank skill these.",
      id: 74,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Rosariomouth identify",
      location: "Greece",
      grade: 3,
      fees: 675,
      description:
        "Local purpose participant husband political. Generation stop part attention.",
      id: 75,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Evansfort few",
      location: "Chad",
      grade: 3,
      fees: 1455,
      description:
        "Career sea create should sister. Same move choice threat laugh.",
      id: 76,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Brandimouth policy",
      location: "Germany",
      grade: 5,
      fees: 1443,
      description:
        "Family visit small impact. Approach kitchen focus be card evidence foot large. Impact theory appear shake.",
      id: 77,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Michealside stuff",
      location: "Syrian Arab Republic",
      grade: 4,
      fees: 663,
      description:
        "Mean she reach growth almost bill speak. Allow month picture summer woman resource tonight.",
      id: 78,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Ronaldburgh dinner",
      location: "Mozambique",
      grade: 3,
      fees: 555,
      description: "Debate college smile PM. Son sure central.",
      id: 79,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Danielport teacher",
      location: "Kiribati",
      grade: 4,
      fees: 945,
      description:
        "Simple through baby full memory writer glass. Way direction I. That free usually above model.",
      id: 80,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Lake Diana mother",
      location: "Haiti",
      grade: 3,
      fees: 375,
      description:
        "Style dark resource television. Again stand six stand. Expert attack serious simple would hope.",
      id: 81,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Jeffreyhaven six",
      location: "Malta",
      grade: 3,
      fees: 1815,
      description:
        "Focus possible couple support opportunity world. Whether require experience break marriage lot. Social should particularly fight. Official why book well bar.",
      id: 82,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Stephaniemouth enjoy",
      location: "Mozambique",
      grade: 4,
      fees: 1384,
      description:
        "Far Mrs dream itself first. All deal hundred dinner entire. Challenge science fact impact space fast.",
      id: 83,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Wilsonhaven our",
      location: "Saint Pierre and Miquelon",
      grade: 3,
      fees: 895,
      description: "Analysis agree allow.",
      id: 84,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "New Nathanielville know",
      location: "New Caledonia",
      grade: 5,
      fees: 1195,
      description:
        "Huge account prepare begin. Ok nation finally year let. Simply actually collection. Control according actually half star tough.",
      id: 85,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "South Juan car",
      location: "Cook Islands",
      grade: 3,
      fees: 495,
      description:
        "Doctor fine eye station carry. Week attention opportunity might five until indicate network. Decide economy majority church at.",
      id: 86,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Harrisonhaven away",
      location: "Italy",
      grade: 5,
      fees: 635,
      description:
        "Season read but would. Form project article front. Available claim care number coach development type.",
      id: 87,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Brianshire health",
      location: "French Guiana",
      grade: 3,
      fees: 1295,
      description: "Risk which knowledge area.",
      id: 88,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Chloebury of",
      location: "Slovakia (Slovak Republic)",
      grade: 4,
      fees: 570,
      description:
        "Suffer wife party. Phone cause million wall great you send. Far adult every pay show eight experience nor.",
      id: 89,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Shawnbury maybe",
      location: "Oman",
      grade: 4,
      fees: 1015,
      description:
        "Week very green foot opportunity. Official region serious rather whose several science. Election never pick indeed positive.",
      id: 90,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "North Donna old",
      location: "Malaysia",
      grade: 4,
      fees: 1825,
      description:
        "Four claim trade happy about they where. Stock cost together group let leave maybe.",
      id: 91,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Anthonyfurt with",
      location: "Tokelau",
      grade: 3,
      fees: 412,
      description:
        "Here red serve consider provide human pretty. Prove collection billion buy sit ago huge. Assume front through.",
      id: 92,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Patricktown run",
      location: "Iraq",
      grade: 3,
      fees: 722,
      description:
        "Add them heart more show. Among soon top really. Me safe it good business.",
      id: 93,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Annetteshire threat",
      location: "Saint Lucia",
      grade: 4,
      fees: 1985,
      description:
        "Occur girl generation center political bed leave grow. Guess already claim seem particular ok. Mouth speech window group.",
      id: 94,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Dwayneton pattern",
      location: "Brazil",
      grade: 4,
      fees: 1695,
      description:
        "Lawyer today parent building amount medical young. During toward star always daughter. Image necessary those be since key.",
      id: 95,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "New Jennifer visit",
      location: "Timor-Leste",
      grade: 4,
      fees: 1154,
      description:
        "Kind study sure discover student reveal. Appear maybe paper receive.",
      id: 96,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Smithmouth particular",
      location: "Netherlands Antilles",
      grade: 5,
      fees: 1215,
      description:
        "During yes ahead foreign several dream. Piece hit wife product person. Not deal into top.",
      id: 97,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Laurenmouth management",
      location: "Nauru",
      grade: 4,
      fees: 985,
      description:
        "Anything last person cost she. Dinner play anything audience community use. Mrs Mr identify practice still.",
      id: 98,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "Davisfort story",
      location: "Gabon",
      grade: 4,
      fees: 725,
      description:
        "Particular various pay want religious. Conference eye strong. Arm nothing doctor although bit computer.",
      id: 99,
    },
    {
      image_url: "https://source.unsplash.com/random/350x150/?Travel",
      destination_title: "West Lindsay produce",
      location: "Moldova",
      grade: 3,
      fees: 1513,
      description:
        "Big brother focus meeting task itself minute. Structure daughter tax Congress lead mind call decade.",
      id: 100,
    },
  ];
  const [{ ...data }] = destinations.filter((item) => {
    return item.id == id;
  });
  console.log(data);
  const navigate = useNavigate();
  const [inc, setInc] = useState(1);
  const [traveler, settraveler] = useState({
    title: "",
    first_Name: "",
    last_Name: "",
    email: "",
    phone: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    nationality: "",
    c_holder: "",
    c_number: "",
    exp_day: "",
    cvv: "",
  });

  const [pin, setpin] = useState({
    first: "",
    sec: "",
    third: "",
    fourth: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [check, setcheck] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    settraveler({ ...traveler, [e.target.name]: e.target.value });
  };

  const getData = () => {
    console.log(traveler);

    if (
      !traveler.first_Name ||
      !traveler.last_Name ||
      !traveler.title ||
      !traveler.email ||
      !traveler.phone ||
      !traveler.day ||
      !traveler.month ||
      !traveler.year ||
      !traveler.gender ||
      !traveler.nationality ||
      !traveler.c_holder ||
      !traveler.c_number ||
      !traveler.exp_day ||
      !traveler.cvv
    ) {
      toast({
        title: "Please fill all details",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      onOpen();
      toast({
        description: "Your OTP is 4567",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <Navbar/>
   
    <Box minH={"100vh"} bg={"gray.100"} color={"blackAlpha.800"}>
      <Box w={{ base: "92%", md: "95%", lg: "76%" }} m={"auto"}>
        <Flex py={"30px"}>
          <Text
            fontSize={{ base: "20px", md: "33px", lg: "33px" }}
            fontWeight={"600"}
          >
            {data.destination_title}, {data.location}
          </Text>
          <Spacer />
          <Button
            colorScheme="none"
            bg={"white"}
            color={"blackAlpha.800"}
            mr={"10px"}
            borderRadius={"20px"}
            display={{ base: "none", md: "block", lg: "block" }}
          >
            Need Help?
          </Button>
          <Button
            colorScheme="none"
            bg={"white"}
            color={"blackAlpha.800"}
            borderRadius={"20px"}
            display={{ base: "none", md: "block", lg: "block" }}
          >
            Share Your Journey
          </Button>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Box w={{ base: "100%", md: "100%", lg: "67%" }}>
            <Box
              my={"25px"}
              p={"20px"}
              borderRadius={"15px"}
              bg={"white"}
              boxShadow={"md"}
            >
              <HStack>
                <BsFill1SquareFill size={"30px"} />
                <Text
                  pb={"5px"}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  px={"10px"}
                >
                  How Many Travelers Are Exploring?
                </Text>
              </HStack>
              <HStack mt={"30px"}>
                <Text fontWeight={"700"}>{inc} x traveller </Text>
                <Spacer />
                <HStack>
                  <IconButton
                    onClick={() => {
                      setInc(inc - 1);
                    }}
                    isDisabled={inc === 1}
                    icon={<GrFormSubtract size={"25px"} />}
                    rounded={"full"}
                    boxShadow={"lg"}
                  />
                  <Text px={"10px"}>{inc}</Text>
                  <IconButton
                    onClick={() => {
                      setInc(inc + 1);
                    }}
                    icon={<GrFormAdd size={"25px"} />}
                    rounded={"full"}
                    boxShadow={"lg"}
                  />
                </HStack>
              </HStack>
            </Box>
            {/* ===============================================================> */}
            <Box p={"20px"} bg={"white"} boxShadow={"md"} borderRadius={"15px"}>
              <HStack>
                <BsFill2SquareFill size={"30px"} />
                <Text px={"10px"} fontWeight={"700"} fontSize={"20px"}>
                  Add traveller details
                </Text>
              </HStack>
              <HStack
                ml={"8px"}
                borderRadius={"15px"}
                p={"20px"}
                bg={"gray.200"}
                my={"25px"}
              >
                <BsFillInfoCircleFill size={"25px"} />
                <HStack
                  px={"10px"}
                  fontWeight={{ base: "500", md: "700", lg: "700" }}
                  fontSize={{ base: "14px", md: "16", lg: "16" }}
                >
                  <Text>Please Note:</Text>
                  <Text textAlign="left">
                    Ensure your traveler details align with your passport
                    information.
                  </Text>
                </HStack>
              </HStack>
              <RadioGroup
                py={"35px"}
                name="title"
                value={traveler.title}
                onChange={(value) =>
                  handleInputChange({ target: { name: "title", value } })
                }
                isRequired
              >
                <HStack>
                  <Text fontWeight={"700"} fontSize={"14px"} px={"10px"}>
                    Title*
                  </Text>
                  <Radio value="Mr.">Mr.</Radio>
                  <Radio value="Ms.">Ms.</Radio>
                  <Radio value="Mrs.">Mrs.</Radio>
                  <Radio value="Miss">Miss</Radio>
                </HStack>
              </RadioGroup>

              <FormControl ml={"13px"}>
                <VStack align={"left"}>
                  <FormLabel
                    mb={"-19px"}
                    ml={"15px"}
                    fontSize={"14px"}
                    fontWeight={"700"}
                    bg={"white"}
                    zIndex="4"
                    w="90px"
                    pl="6px"
                  >
                    First Name*
                  </FormLabel>
                  <Input
                    name="first_Name"
                    onChange={handleInputChange}
                    autoComplete="on"
                    w={{ base: "80%", md: "45%", lg: "45%" }}
                    size={"lg"}
                    border={"1px solid silver"}
                    type="text"
                  />
                </VStack>

                <VStack align={"left"} my={"20px"}>
                  <FormLabel
                    mb={"-19px"}
                    ml={"15px"}
                    fontSize={"14px"}
                    fontWeight={"700"}
                    bg={"white"}
                    zIndex="4"
                    w="90px"
                    pl="6px"
                  >
                    Last Name*
                  </FormLabel>
                  <Input
                    name="last_Name"
                    onChange={handleInputChange}
                    autoComplete="on"
                    w={{ base: "80%", md: "45%", lg: "45%" }}
                    size={"lg"}
                    border={"1px solid silver"}
                    type="text"
                  />
                </VStack>

                <VStack align={"left"}>
                  <FormLabel
                    mb={"-19px"}
                    ml={"15px"}
                    fontSize={"14px"}
                    fontWeight={"700"}
                    bg={"white"}
                    zIndex="4"
                    w="55px"
                    pl="6px"
                  >
                    Email*
                  </FormLabel>
                  <Input
                    name="email"
                    onChange={handleInputChange}
                    autoComplete="on"
                    w={{ base: "80%", md: "45%", lg: "45%" }}
                    size={"lg"}
                    border={"1px solid silver"}
                    type="email"
                  />
                </VStack>

                <VStack align={"left"} my={"20px"}>
                  <FormLabel
                    mb={"-19px"}
                    ml={"15px"}
                    fontSize={"14px"}
                    fontWeight={"700"}
                    bg={"white"}
                    zIndex="4"
                    w="115px"
                    pl="6px"
                  >
                    Phone Number*
                  </FormLabel>
                  <Input
                    name="phone"
                    onChange={handleInputChange}
                    autoComplete="on"
                    w={{ base: "80%", md: "45%", lg: "45%" }}
                    size={"lg"}
                    border={"1px solid silver"}
                    type="tel"
                    placeholder="e.g. +91 9778556788"
                  />
                </VStack>

                <Text
                  fontWeight={"700"}
                  mb={"15px"}
                  fontSize={"16px"}
                  align={"left"}
                >
                  Date of Birth*
                </Text>
                <HStack>
                  <Box position={"relative"}>
                    <FormLabel
                      pos="absolute"
                      top="-10px"
                      ml="14px"
                      fontSize="14px"
                      fontWeight="700"
                      bg="white"
                      zIndex="4"
                      w="35px"
                      pl="6px"
                    >
                      Day
                    </FormLabel>
                    <Select
                      size={"lg"}
                      w={"80px"}
                      border={"1px solid silver"}
                      name="day"
                      onChange={handleInputChange}
                    >
                      <option value="" style={{ backgroundColor: "white" }}>
                        {" "}
                      </option>
                      <option value="01" style={{ backgroundColor: "white" }}>
                        01
                      </option>
                      <option value="02" style={{ backgroundColor: "white" }}>
                        02
                      </option>
                      <option value="03" style={{ backgroundColor: "white" }}>
                        03
                      </option>
                      <option value="04" style={{ backgroundColor: "white" }}>
                        04
                      </option>
                      <option value="05" style={{ backgroundColor: "white" }}>
                        05
                      </option>
                      <option value="06" style={{ backgroundColor: "white" }}>
                        06
                      </option>
                      <option value="07" style={{ backgroundColor: "white" }}>
                        07
                      </option>
                      <option value="08" style={{ backgroundColor: "white" }}>
                        08
                      </option>
                      <option value="09" style={{ backgroundColor: "white" }}>
                        09
                      </option>
                      <option value="10" style={{ backgroundColor: "white" }}>
                        10
                      </option>
                      <option value="11" style={{ backgroundColor: "white" }}>
                        11
                      </option>
                      <option value="12" style={{ backgroundColor: "white" }}>
                        12
                      </option>
                      <option value="13" style={{ backgroundColor: "white" }}>
                        13
                      </option>
                      <option value="14" style={{ backgroundColor: "white" }}>
                        14
                      </option>
                      <option value="15" style={{ backgroundColor: "white" }}>
                        15
                      </option>
                      <option value="16" style={{ backgroundColor: "white" }}>
                        16
                      </option>
                      <option value="17" style={{ backgroundColor: "white" }}>
                        17
                      </option>
                      <option value="18" style={{ backgroundColor: "white" }}>
                        18
                      </option>
                      <option value="19" style={{ backgroundColor: "white" }}>
                        19
                      </option>
                      <option value="20" style={{ backgroundColor: "white" }}>
                        20
                      </option>
                      <option value="21" style={{ backgroundColor: "white" }}>
                        21
                      </option>
                      <option value="22" style={{ backgroundColor: "white" }}>
                        22
                      </option>
                      <option value="23" style={{ backgroundColor: "white" }}>
                        23
                      </option>
                      <option value="24" style={{ backgroundColor: "white" }}>
                        24
                      </option>
                      <option value="25" style={{ backgroundColor: "white" }}>
                        25
                      </option>
                      <option value="26" style={{ backgroundColor: "white" }}>
                        26
                      </option>
                      <option value="27" style={{ backgroundColor: "white" }}>
                        27
                      </option>
                      <option value="28" style={{ backgroundColor: "white" }}>
                        28
                      </option>
                      <option value="29" style={{ backgroundColor: "white" }}>
                        29
                      </option>
                      <option value="30" style={{ backgroundColor: "white" }}>
                        30
                      </option>
                      <option value="31" style={{ backgroundColor: "white" }}>
                        31
                      </option>
                    </Select>
                  </Box>
                  <Box position={"relative"}>
                    <label
                      style={{
                        position: "absolute",
                        top: "-9px",
                        marginLeft: "-55px",
                        fontSize: "14px",
                        fontWeight: "700",
                        backgroundColor: "white",
                        zIndex: "4",
                        width: "58px",
                        paddingLeft: "6px",
                      }}
                    >
                      Month
                    </label>
                    <Select
                      name="month"
                      onChange={handleInputChange}
                      bg={"white"}
                      size={"lg"}
                      w={{ base: "100px", md: "145px", lg: "145px" }}
                      border={"1px solid silver"}
                    >
                      <option value="00" style={{ backgroundColor: "white" }}>
                        {" "}
                      </option>
                      <option value="01" style={{ backgroundColor: "white" }}>
                        January
                      </option>
                      <option value="02" style={{ backgroundColor: "white" }}>
                        February
                      </option>
                      <option value="03" style={{ backgroundColor: "white" }}>
                        March
                      </option>
                      <option value="04" style={{ backgroundColor: "white" }}>
                        April
                      </option>
                      <option value="05" style={{ backgroundColor: "white" }}>
                        May
                      </option>
                      <option value="06" style={{ backgroundColor: "white" }}>
                        June
                      </option>
                      <option value="07" style={{ backgroundColor: "white" }}>
                        July
                      </option>
                      <option value="08" style={{ backgroundColor: "white" }}>
                        August
                      </option>
                      <option value="09" style={{ backgroundColor: "white" }}>
                        September
                      </option>
                      <option value="10" style={{ backgroundColor: "white" }}>
                        October
                      </option>
                      <option value="11" style={{ backgroundColor: "white" }}>
                        November
                      </option>
                      <option value="12" style={{ backgroundColor: "white" }}>
                        December
                      </option>
                    </Select>
                  </Box>

                  <Box position={"relative"}>
                    <label
                      style={{
                        position: "absolute",
                        top: "-9px",
                        marginLeft: "-26px",
                        fontSize: "14px",
                        fontWeight: "700",
                        backgroundColor: "white",
                        zIndex: "4",
                        width: "40px",
                        paddingLeft: "6px",
                      }}
                    >
                      Year
                    </label>
                    <Select
                      size={"lg"}
                      w={"95px"}
                      border={"1px solid silver"}
                      name="year"
                      onChange={handleInputChange}
                    >
                      <option
                        value=""
                        style={{ backgroundColor: "white" }}
                      ></option>
                      <option value="1988" style={{ backgroundColor: "white" }}>
                        1988
                      </option>
                      <option value="1989" style={{ backgroundColor: "white" }}>
                        1989
                      </option>
                      <option value="1990" style={{ backgroundColor: "white" }}>
                        1990
                      </option>
                      <option value="1991" style={{ backgroundColor: "white" }}>
                        1991
                      </option>
                      <option value="1992" style={{ backgroundColor: "white" }}>
                        1992
                      </option>
                      <option value="1993" style={{ backgroundColor: "white" }}>
                        1993
                      </option>
                      <option value="1994" style={{ backgroundColor: "white" }}>
                        1994
                      </option>
                      <option value="1995" style={{ backgroundColor: "white" }}>
                        1995
                      </option>
                      <option value="1996" style={{ backgroundColor: "white" }}>
                        1996
                      </option>
                      <option value="1997" style={{ backgroundColor: "white" }}>
                        1997
                      </option>
                      <option value="1998" style={{ backgroundColor: "white" }}>
                        1998
                      </option>
                      <option value="1999" style={{ backgroundColor: "white" }}>
                        1999
                      </option>
                      <option value="2000" style={{ backgroundColor: "white" }}>
                        2000
                      </option>
                      <option value="2001" style={{ backgroundColor: "white" }}>
                        2001
                      </option>
                      <option value="2002" style={{ backgroundColor: "white" }}>
                        2002
                      </option>
                      <option value="2003" style={{ backgroundColor: "white" }}>
                        2003
                      </option>
                      <option value="2004" style={{ backgroundColor: "white" }}>
                        2004
                      </option>
                      <option value="2005" style={{ backgroundColor: "white" }}>
                        2005
                      </option>
                      <option value="2006" style={{ backgroundColor: "white" }}>
                        2006
                      </option>
                      <option value="2007" style={{ backgroundColor: "white" }}>
                        2007
                      </option>
                      <option value="2008" style={{ backgroundColor: "white" }}>
                        2008
                      </option>
                      <option value="2009" style={{ backgroundColor: "white" }}>
                        2009
                      </option>
                      <option value="2010" style={{ backgroundColor: "white" }}>
                        2010
                      </option>
                    </Select>
                  </Box>
                </HStack>

                <RadioGroup py={"35px"} isRequired>
                  <HStack>
                    <Text fontWeight={"700"} fontSize={"15px"} px={"10px"}>
                      Gender*
                    </Text>
                    <Radio
                      name="gender"
                      value="male"
                      onChange={handleInputChange}
                    >
                      Male
                    </Radio>
                    <Radio
                      name="gender"
                      value="female"
                      onChange={handleInputChange}
                    >
                      Female
                    </Radio>
                  </HStack>
                </RadioGroup>
                <Box position={"relative"}>
                  <label
                    style={{
                      position: "absolute",
                      top: "-9px",
                      marginLeft: "-290px",
                      fontSize: "14px",
                      fontWeight: "700",
                      backgroundColor: "white",
                      zIndex: "4",
                      width: "90px",
                      paddingLeft: "6px",
                    }}
                  >
                    Nationality*
                  </label>
                  <Select
                    w={"45%"}
                    size={"lg"}
                    border={"1px solid silver"}
                    name="nationality"
                    onChange={handleInputChange}
                  >
                    <option
                      value=""
                      style={{ backgroundColor: "white" }}
                    ></option>
                    <option value="India" style={{ backgroundColor: "white" }}>
                      India
                    </option>
                    <option value="Russia" style={{ backgroundColor: "white" }}>
                      Russia
                    </option>
                    <option value="Nepal" style={{ backgroundColor: "white" }}>
                      Nepal
                    </option>
                    <option
                      value="Sri_lanka"
                      style={{ backgroundColor: "white" }}
                    >
                      Sri lanka
                    </option>
                    <option value="Bhutan" style={{ backgroundColor: "white" }}>
                      Bhutan
                    </option>
                    <option value="France" style={{ backgroundColor: "white" }}>
                      France
                    </option>
                    <option value="USA" style={{ backgroundColor: "white" }}>
                      USA
                    </option>
                    <option
                      value="Germany"
                      style={{ backgroundColor: "white" }}
                    >
                      Germany
                    </option>
                  </Select>
                </Box>
              </FormControl>
            </Box>
            {/* ===============================================================> */}

            <Box
              my={"25px"}
              p={"20px"}
              borderRadius={"15px"}
              bg={"white"}
              boxShadow={"md"}
            >
              <HStack>
                <BsFill3SquareFill size={"30px"} />
                <Text
                  pb={"5px"}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  px={"10px"}
                >
                 Savings
                </Text>
              </HStack>
              <Text
                mt={"30px"}
                mb={"8px"}
                color={"blue.500"}
                cursor={"pointer"}
              >
                Redeem Promo Code
              </Text>
            </Box>
            {/* ==========================================================================> */}
            <Box
              my={"25px"}
              p={"20px"}
              boxShadow={"md"}
              bg={"white"}
              borderRadius={"15px"}
            >
              <HStack>
                <BsFill4SquareFill size={"30px"} />
                <Text
                  pb={"5px"}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  px={"10px"}
                >
                  Add payment details
                </Text>
              </HStack>

              <HStack
                p={"15px"}
                my={"20px"}
                bg={"gray.200"}
                borderRadius={"15px"}
              >
                <BsFillInfoCircleFill size={"20px"} />
                <Text
                  px={"10px"}
                  align={"left"}
                  fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                  fontWeight={"400"}
                  color={"blackAlpha.800"}
                >
                  This is a secure and SSL encrypted payment. Your credit card
                  details are safe.
                </Text>
              </HStack>

              <Box>
                <Text py={"10px"} fontSize={"16px"}>
                  Select your payment method:
                </Text>
                <Box
                  boxShadow={"md"}
                  border={"1px solid silver"}
                  bg={"white"}
                  borderRadius={"15px"}
                >
                  <HStack
                    borderBottom={"1px solid silver"}
                    p={"15px"}
                    borderRadius={"15px 15px 0 0 "}
                  >
                    <GrRadialSelected size={"20px"} color={"blue"} />
                    <Text
                      px={"10px"}
                      fontSize={"16px"}
                      fontWeight={"400"}
                      color={"blackAlpha.800"}
                    >
                      Pay by card
                    </Text>
                    <Spacer />
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVIBJ-2rpBUh0gMNNjNhM759BiZ4ZEEC9BQ&usqp=CAU"
                      width="5%"
                      height="5%"
                      mt="22px"
                      ml="30px"
                    />
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrA_6LJ0DJucgHSZDOYO8v9n7dGNiJ6OPnw&usqp=CAU"
                      width="7%"
                      height="7%"
                      mt="16px"
                      ml="0px"
                    />
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapt6bCfFKVEeVMsp5NRz4iOLHcGBqzPtPWw&usqp=CAU"
                      width="4%"
                      height="4%"
                      mt="20px"
                      mr="20px"
                    />
                  </HStack>

                  <Box p={"20px 15px 30px 15px"}>
                    <Flex direction={"column"}>
                      <label
                        style={{
                          marginBottom: "-10px",
                          marginLeft: "15px",
                          fontSize: "14px",
                          fontWeight: "700",
                          backgroundColor: "white",
                          zIndex: "4",
                          width: "150px",
                          paddingLeft: "5px",
                        }}
                      >
                        Cardholder Name
                      </label>
                      <Input
                        name="c_holder"
                        onChange={handleInputChange}
                        autoComplete="on"
                        w={{ base: "80%", md: "45%", lg: "45%" }}
                        size="lg"
                        border={"1px solid silver"}
                      />
                    </Flex>
                    <Flex direction={"column"} my={"20px"}>
                      <label
                        style={{
                          marginBottom: "-10px",
                          marginLeft: "15px",
                          fontSize: "14px",
                          fontWeight: "700",
                          backgroundColor: "white",
                          zIndex: "4",
                          width: "110px",
                          paddingLeft: "5px",
                        }}
                      >
                        Card Number *
                      </label>
                      <Input
                        name="c_number"
                        onChange={handleInputChange}
                        autoComplete="on"
                        w={{ base: "80%", md: "45%", lg: "45%" }}
                        size="lg"
                        border={"1px solid silver"}
                        placeholder="**** **** **** ****"
                      />
                    </Flex>

                    <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                      <Flex
                        direction={"column"}
                        w={{ base: "60%", md: "20%", lg: "20%" }}
                      >
                        <label
                          style={{
                            marginBottom: "-10px",
                            marginLeft: "15px",
                            fontSize: "14px",
                            fontWeight: "700",
                            backgroundColor: "white",
                            zIndex: "4",
                            width: "95px",
                            paddingLeft: "3px",
                          }}
                        >
                          Expiry Date *
                        </label>
                        <Input
                          name="exp_day"
                          onChange={handleInputChange}
                          w={"100%"}
                          size="lg"
                          border={"1px solid silver"}
                          placeholder="MM / YY"
                        />
                      </Flex>
                      <Flex
                        direction={"column"}
                        w={{ base: "60%", md: "20%", lg: "20%" }}
                        ml={{ base: "0%", md: "5%", lg: "5%" }}
                        mt={{ base: "15px", md: "0px", lg: "0px" }}
                      >
                        <label
                          style={{
                            marginBottom: "-10px",
                            marginLeft: "15px",
                            fontSize: "14px",
                            fontWeight: "700",
                            backgroundColor: "white",
                            zIndex: "4",
                            width: "45px",
                            paddingLeft: "3px",
                          }}
                        >
                          CVV *
                        </label>
                        <Input
                          name="cvv"
                          type="password"
                          onChange={handleInputChange}
                          w={"100%"}
                          size="lg"
                          border={"1px solid silver"}
                          placeholder="1 2 3"
                        />
                      </Flex>
                    </Flex>
                  </Box>
                </Box>

                <Box mt={"20px"}>
                  <Flex>
                    <Checkbox
                      size="md"
                      onChange={() => {
                        setcheck(!check);
                      }}
                    ></Checkbox>
                    <Text
                      pl={"15px"}
                      mt={"45px"}
                      align={"left"}
                      fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                    >
                      I agree to Adventour's{" "}
                      <span style={{ color: "#008cc9" }}>
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span style={{ color: "#008cc9" }}> Privacy Policy;</span>{" "}
                      and Realistic Journey's{" "}
                      <span style={{ color: "#008cc9" }}>
                        {" "}
                        payment,cancellation and refund conditions,
                      </span>{" "}
                      as well as{" "}
                      <span style={{ color: "#008cc9" }}>
                        Credit for Future Tours <br /> Terms & Conditions.
                      </span>
                    </Text>
                  </Flex>
                </Box>

                <Button
                  onClick={getData}
                  w={"100%"}
                  colorScheme="none"
                  bg={"teal"}
                  py={"30px"}
                  mt={"30px"}
                  isDisabled={!check}
                >
                  Book Now
                </Button>
                <Modal isOpen={isOpen}>
                  <ModalOverlay>
                    <ModalContent>
                      <ModalBody>
                        <VStack>
                          <Text fontSize={"25px"} fontWeight={"600"}>
                            OTP Verification
                          </Text>
                          <Text fontSize={"15px"}>
                            Thank you for choosing Adventour! Your adventure
                            awaits.
                          </Text>
                          <Text fontSize={"15px"} pb={"20px"}>
                            Please enter the One-Time Password (OTP) you
                            received.
                          </Text>
                          <HStack mt={3} mx={3}>
                            <PinInput>
                              <PinInputField
                                onChange={(e) => {
                                  setpin({ ...pin, first: e.target.value });
                                }}
                              />
                              <PinInputField
                                onChange={(e) => {
                                  setpin({ ...pin, sec: e.target.value });
                                }}
                              />
                              <PinInputField
                                onChange={(e) => {
                                  setpin({ ...pin, third: e.target.value });
                                }}
                              />
                              <PinInputField
                                onChange={(e) => {
                                  setpin({ ...pin, fourth: e.target.value });
                                }}
                              />
                            </PinInput>
                          </HStack>
                          <HStack>
                            <Text fontSize={"12px"} pt={"15px"}>
                              Haven't received the OTP yet? Click here to{" "}
                            </Text>
                            <Text
                              onClick={() => {
                                toast({
                                  description: "Your OTP is 4567",
                                  status: "warning",
                                  position: "top",
                                  duration: 3000,
                                  isClosable: true,
                                });
                              }}
                              color={"blue.400"}
                              fontWeight={"500"}
                              fontSize={"12px"}
                              pt={"15px"}
                              cursor={"pointer"}
                            >
                              RESEND
                            </Text>
                          </HStack>
                        </VStack>
                      </ModalBody>
                      <Button
                        colorScheme="blue"
                        m={5}
                        onClick={() => {
                          onClose();
                          if (
                            pin.first == 4 &&
                            pin.sec == 5 &&
                            pin.third == 6 &&
                            pin.fourth == 7
                          ) {
                            navigate("/success");
                          } else {
                            toast({
                              description: "Payment failed",
                              status: "error",
                              position: "top",
                              duration: 3000,
                              isClosable: true,
                            });
                          }
                        }}
                      >
                        Enter OTP
                      </Button>
                    </ModalContent>
                  </ModalOverlay>
                </Modal>
              </Box>
            </Box>
            {/* ==========================================================================> */}
          </Box>

          <Box w={"31%"} display={{ base: "none", md: "none", lg: "block" }}>
            <Box
              display={{ base: "none", md: "none", lg: "block" }}
              p={"20px"}
              borderRadius={"15px"}
              bg={"white"}
              boxShadow={"md"}
              lineHeight={"25px"}
            >
              <Text
                pb={"15px"}
                fontSize={"20px"}
                fontWeight={"700"}
                align={"left"}
              >
                Your Adventure Details
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                Location
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                Explore the beautiful destination of {data.destination_title},{" "}
                {data.location}, known for its {data.grade} experiences.
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                Duration
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                6 days
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                Starts On
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                Tuesday, 12 Sep 2023
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                Ends On
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                Monday, 18 Sep 2023
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                Trip Type
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                Group Tour
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                Language
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                English
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"} align={"left"}>
                What's Included
              </Text>
              <Text pb={"10px"} fontSize={"15px"} align={"left"}>
                Enjoy a worry-free journey with comfortable accommodation,
                expert local guides, delicious authentic meals, and convenient
                transportation.
              </Text>
            </Box>
            <Price inc={inc} data={data} />
          </Box>
        </Flex>
      </Box>
    </Box>
    <Footer/>
    </>
  );
}

export default Payment;
