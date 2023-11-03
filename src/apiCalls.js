const apiHelper = (wordArray) => {
  console.log("Array length", wordArray.length);
  console.log("word array", wordArray);
  console.log("First Audio File", wordArray[0].phonetics[0].audio);
  if (wordArray.length >= 0 && wordArray[0].phonetics[0].audio !== "") {
    return {
      word: wordArray[0].word,
      audio: wordArray[0].phonetics[0].audio,
    };
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
    throw error;
  }
  // call the apiHelper function and return the new object
  // push the new object into the promises array
}

export async function getAllWordInfo(words) {
  const results = [];
  let errorOccured = false;

  while (results.length < 10) {
    for (const word of words) {
      try {
        const data = await getWordInfo(word);
        if (data) {
          console.log("results", results);
          results.push(data);
        }
      } catch (error) {
        errorOccured = true;
        break;
      }
      if (results.length >= 10) {
        break; // Exit the loop once results have a length of 10 or more
      }
    }
    if (errorOccured === true) {
      break;
    }
  }
  console.log("results", results);
  if (errorOccured) {
    throw new Error("An error occured during data retrieval.");
  }
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
