const OpenAI = require("openai");
require("dotenv").config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function textCompletion({prompt}) {
   try {
    const resposta = await openai.chat.completions.create({
      model: "gpt-4.1", 
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 100,
    });

console.log("\n Resposta da API:");
    console.log(resposta.choices[0].message.content);
  } catch (erro) {
    console.error("\n Falha ao acessar a API:");
    console.error(erro.response?.data || erro.message);
  }
}

module.exports = textCompletion;
