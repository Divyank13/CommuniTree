import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1",
    firstName: "Divyank",
    lastName: "Manjarwar",
    user_email: "divyank039@gmail.com",
    username: "manjarwar_03",
    password: "shohehe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile_pic:
      "https://media.licdn.com/dms/image/D4D03AQEo_FXvcq9DKw/profile-displayphoto-shrink_800_800/0/1686841927153?e=1696464000&v=beta&t=jHDH7v1OnJQ_LPdWk3VtawmE2eWekkYUowo5FVEkt_Q",
    cover_pic: "",
    link: "https://github.com/divyank13/",
    bio: "Software Developer",
    followers: [
      {
        _id: "2",
        firstName: "Rahul",
        lastName: "Mallick",
        username: "mallick",
        profile_pic:
          "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
      },
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    following: [
      {
        _id: "2",
        firstName: "Rahul",
        lastName: "Mallick",
        username: "mallick",
        profile_pic:
          "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
      },
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    bookmarks: [],
    id: "1",
  },
  {
    _id: "2",
    firstName: "Rahul",
    lastName: "Mallick",
    user_email: "mallickrahul@gmail.com",
    username: "mallick",
    password: "1234abcd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile_pic:
      "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
    cover_pic: "",
    link: "https://mallickrahul.netlify.app",
    bio: "Singer",
    followers: [
      {
        _id: "1",
        firstName: "Divyank",
        lastName: "Manjarwar",
        username: "manjarwar_03",
        profile_pic:
          "https://media.licdn.com/dms/image/D4D03AQEo_FXvcq9DKw/profile-displayphoto-shrink_800_800/0/1686841927153?e=1696464000&v=beta&t=jHDH7v1OnJQ_LPdWk3VtawmE2eWekkYUowo5FVEkt_Q",
      },
      {
        _id: "5",
        firstName: "Eklavya",
        lastName: "Prasad",
        username: "eklavya",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
      },
    ],
    following: [
      {
        _id: "1",
        firstName: "Divyank",
        lastName: "Manjarwar",
        username: "manjarwar_03",
        profile_pic:
          "https://media.licdn.com/dms/image/D4D03AQEo_FXvcq9DKw/profile-displayphoto-shrink_800_800/0/1686841927153?e=1696464000&v=beta&t=jHDH7v1OnJQ_LPdWk3VtawmE2eWekkYUowo5FVEkt_Q",
      },
      {
        _id: "5",
        firstName: "Eklavya",
        lastName: "Prasad",
        username: "eklavya",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "3",
    firstName: "Ayush",
    lastName: "Singh",
    user_email: "singhayush@gmail.com",
    username: "ayush",
    password: "1234abcd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile_pic:
      "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
    cover_pic: "",
    link: "https://singhayush.netlify.app",
    bio: "Automotive Designer",
    followers: [
      {
        _id: "4",
        firstName: "Saurabh",
        lastName: "Kumar",
        username: "saurabh",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
      },
      {
        _id: "5",
        firstName: "Eklavya",
        lastName: "Prasad",
        username: "eklavya",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
      },
      {
        _id: "1",
        firstName: "Divyank",
        lastName: "Manjarwar",
        username: "manjarwar_03",
        profile_pic:
          "https://media.licdn.com/dms/image/D4D03AQEo_FXvcq9DKw/profile-displayphoto-shrink_800_800/0/1686841927153?e=1696464000&v=beta&t=jHDH7v1OnJQ_LPdWk3VtawmE2eWekkYUowo5FVEkt_Q",
      },
    ],
    following: [
      {
        _id: "1",
        firstName: "Divyank",
        lastName: "Manjarwar",
        username: "manjarwar_03",
        profile_pic:
          "https://media.licdn.com/dms/image/D4D03AQEo_FXvcq9DKw/profile-displayphoto-shrink_800_800/0/1686841927153?e=1696464000&v=beta&t=jHDH7v1OnJQ_LPdWk3VtawmE2eWekkYUowo5FVEkt_Q",
      },
      {
        _id: "4",
        firstName: "Saurabh",
        lastName: "Kumar",
        username: "saurabh",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
      },
      {
        _id: "6",
        firstName: "Nitin",
        lastName: "Lakra",
        username: "tintin",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
      },
      {
        _id: "5",
        firstName: "Eklavya",
        lastName: "Prasad",
        username: "eklavya",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "4",
    firstName: "Saurabh",
    lastName: "Kumar",
    username: "saurabh",
    user_email: "kumarsaurabh@gmail.com",
    password: "1234abcd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile_pic:
      "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/saitama_isaxm6.jpg",
    cover_pic: "",
    link: "https://kumarsaurabhssm.netlify.app",
    bio: "bank manager",
    followers: [
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    following: [
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "5",
    firstName: "Eklavya",
    lastName: "Prasad",
    username: "eklavya",
    user_email: "eklavyapd@gmail.com",
    password: "1234abcd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile_pic:
      "https://res.cloudinary.com/randomwave45/image/upload/v1650009611/uchicha_crest_ngetfr.jpg",
    cover_pic: "",
    link: "https://pdeklavya.netlify.app",
    bio: "App Developer",
    followers: [
      {
        _id: "2",
        firstName: "Rahul",
        lastName: "Mallick",
        username: "mallick",
        profile_pic:
          "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
      },
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        profile_pic:
          "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    following: [
      {
        _id: "2",
        firstName: "Rahul",
        lastName: "Mallick",
        username: "mallick",
        pic: "https://staticg.sportskeeda.com/editor/2022/07/c2ed4-16587439752781.png",
      },
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "6",
    firstName: "Nitin",
    lastName: "Lakra",
    username: "tintin",
    user_email: "nitintin@gmail.com",
    password: "1234abcd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile_pic:
      "https://res.cloudinary.com/randomwave45/image/upload/v1650022195/one_piece_2_jcjkvz.jpg",
    cover_pic: "",
    link: "https://lakranitin.netlify.app",
    bio: "Gamer",
    followers: [
      {
        _id: "3",
        firstName: "Ayush",
        lastName: "Singh",
        username: "ayush",
        pic: "https://res.cloudinary.com/randomwave45/image/upload/v1650022196/one_piece_1_anib9s.jpg",
      },
    ],
    following: [],
    bookmarks: [],
  },
];
