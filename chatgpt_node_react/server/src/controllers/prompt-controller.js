const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const inputModel = new inputPrompt(req.body);

    try {
      const responseText = await openai.textCompletion(inputModel.message);

      return res.status(200).json({
        success: true,
        data: responseText,
      });

    } catch (error) {
      console.error("Erro na OpenAI:", error);
      return res.status(400).json({
        success: false,
        error: error.response ? error.response.data : "Erro interno no servidor"
      });
    }
  }
}
