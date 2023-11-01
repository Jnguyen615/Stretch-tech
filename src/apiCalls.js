const apiHelper = (wordArray) => {
  if (wordArray.length || wordArray[0].phonetics[0].audio !== "") {
    return wordArray.map((wordObj) => {
      return {
        word: wordObj.word,
        audio: wordObj.phonetics[0].audio,
      };
    });
  }
  return null;
};

async function getWordInfo(word) {
  const root = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  try {
    const response = await fetch(`${root}${word}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const cleanedData = apiHelper(data);
    if (!cleanedData) {
      return null;
    }
    console.log(cleanedData);
    return cleanedData;
  } catch (error) {
    console.log(error);
    return null;
  }
  // call the apiHelper function and return the new object
  // push the new object into the promises array
}

export async function getAllWordInfo(words) {
  const results = [];

  while (results.length < 10) {
    for (const word of words) {
      const data = await getWordInfo(word);
      if (data) {
        results.push(data);
      }
      if (results.length >= 10) {
        break; // Exit the loop once results have a length of 10 or more
      }
    }
  }
  // useDispatch() to update global state
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
