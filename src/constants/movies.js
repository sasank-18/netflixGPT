import OpenAI, { Configuration, OpenAIApi } from "openai";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_KEY
    }
  };

export const movieImgURL= "https://image.tmdb.org/t/p/w500";

const openAi_API_KEY= process.env.REACT_APP_openAi_API_KEY

export const openai = new OpenAI({
  apiKey: openAi_API_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default options;


