import axios from "axios";

const URL_API = 'http://localhost:5555/api/messages'; 

export const makeRequest = async (message) => {
    try {
        const response = await axios.post(
            URL_API,
            { prompt: message }, // Garante que o campo 'prompt' seja enviado
            { headers: { "Content-Type": "application/json" } } // Define o cabeçalho correto
        );

        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error.response ? error.response.data : error);
        throw error;
    }
};


