const apiHelper = (wordObject) => {
  // take in a word object
  // use iterator methods etc... to 'clean it'
  // return a 'clean' word object
  const keys = ["word", "phonetics"]
  const cleanWord = wordObject.reduce((acc, cv) => {


  }, {})

};

async function getWordInfo(word) {
  const root = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  try {
    const response = await fetch(`${root}${word}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
  // call the apiHelper function and return the new object
  // push the new object into the promises array
}

export async function getAllWordInfo(words) {
  // should this be an iterator method OR an empty array and we call an iterator method elsewhere
  const results = [];
  for (const word of words) {
    const data = await getWordInfo(word);
    if (data) {
      results.push(data);
    }
  }

  // useDispatch() update global state
  return results;
}

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
