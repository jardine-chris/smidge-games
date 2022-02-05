import axios from "axios";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`;

// export async function getUserByUsername(username) {
//   const req = await axios(
//     `https://api.twitter.com/2/users/by?usernames=${username}&user.fields=profile_image_url,url`
//   );
//   const data = await req.data.data[0];
//   return data;
// }

export async function getAllUserTweets(userId) {
  //   const user = await axios(`https://api.twitter.com/2/users/${userId}`);
  //   const username = await user.data.name;

  // Set query params to limit results to 5 tweets, excluding retweets and replies..
  // Make the request to the API.
  // const reqUserTweets = await axios(
  //   `https://api.twitter.com/2/users/${userId}/tweets`,
  //   {
  //     params: {
  //       "tweet.fields": "created_at",
  //       expansions: "author_id",
  //       "user.fields": "created_at",
  //       max_results: "5",
  //       exclude: "retweets,replies",
  //     },
  //   }
  // );

  // // Store the array contained in the response.
  // const tweets = await reqUserTweets.data.data;

  // ...to be populated by individual tweet card objects.
  const req = await axios.get(
    `https://api.twitter.com/2/users/1257528992724377601/tweets`,
    {
      params: {
        "tweet.fields": "created_at",
        expansions: "author_id",
        "user.fields": "created_at",
        max_results: "5",
        exclude: "retweets,replies",
      },
    }
  );

  let tweets = await req.data.data;
  let cards = [];

  // Iterate through the tweets.
  for (const tweet of tweets) {
    const response = await axios.get(`https://publish.twitter.com/oembed`, {
      transformRequest: (data, headers) => {
        delete headers.common["Authorization"];
        return data;
      },
      params: {
        hide_media: true,
        url: `https://twitter.com/smidgeg/status/${tweet.id}`,
        theme: "dark"
      },
    });
    const jsonRes = await response.data;
    cards.push(jsonRes);
  }
  return cards;
}
