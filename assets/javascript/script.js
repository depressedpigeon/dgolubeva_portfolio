// //importing a token to get access to the private wordpress posts
// import { getToken } from "./api.js";

// //get the token ready
// const token = await getToken();

// //fetching the post ids from wordpress
// const getPost = async (id, token) => await fetch(`https://www.dgolubeva.com/wp-json/wp/v2/posts?status=private`, {
//     method: 'GET',
//     headers: {
//         //authenticate the wordpress token
//         Authorization: `Bearer ${token}`
//     }
// }).then(res => res.json());

//! have not managed to figure out how to fix the API calls. specific requests don't work. the old project that has been working before also has broke :'/

