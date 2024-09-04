import OpenAI from 'openai';

const API_KEY="sk-YourAPIKeyHere";
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true 
  // This is the default and can be omitted
});

export default openai;