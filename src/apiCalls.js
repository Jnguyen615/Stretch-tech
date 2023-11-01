const apiHelper = (wordObject) => {
  // take in a word object
  // use iterator methods etc... to 'clean it'
  // return a 'clean' word object
};

export const getTricksApiCall = (word) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // call the apiHelper function and return the new object
      // push the new object into the promises array
      return response.json();
    }
  );
};

// should this be an iterator method OR an empty array and we call an iterator method elsewhere
const wordsPromise = [];

// EXAMPLE OF PROMISE
// Promise.all(promises)
// .then((res) => {
//   data = {
//     users: res["0"].users,
//     ingredients: res["1"].ingredients,
//     recipes: res["2"].recipes,
//   };

//   loadUser(res["0"].users);
//   createRecipeCards(res["2"].recipes);
//   activeRecipes = [...res["2"].recipes];
// })

// const apiCalls = (dataType) => {
//   return fetch(`http://localhost:3001/api/v1/${dataType}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Get network response was not ok: ${response.status}`);
//       }

//       return response.json();
//     })
//     .catch((error) => {
//       console.error(`Error fetching ${dataType}: ${error}`);
//     });
// };
// const promises = [
//   apiCalls("users"),
//   apiCalls("ingredients"),
//   apiCalls("recipes"),
// ];
