const apiHelper = (wordArray) => {
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
    return cleanedData;
  } catch (error) {
    throw error;
  }
}

export async function getAllWordInfo(words) {
  const results = [];
  let errorOccured = false;

  while (results.length < 10) {
    for (const word of words) {
      try {
        const data = await getWordInfo(word);
        if (data) {
          results.push(data);
        }
      } catch (error) {
        errorOccured = true;
        break;
      }
      if (results.length >= 10) {
        break; 
      }
    }
    if (errorOccured === true) {
      break;
    }
  }
  if (errorOccured) {
    throw new Error("An error occured during data retrieval.");
  }
  return results;
}
