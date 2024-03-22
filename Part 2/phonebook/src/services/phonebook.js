import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const create = async (data) => {
    const response = await axios.post(baseUrl, data);
    return response;
};


export { create };

