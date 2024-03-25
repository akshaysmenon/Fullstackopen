import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const create = async (data) => {
    try {
        const response = await axios.post(baseUrl, data);
        return response;
    } catch (error) {
        alert('Failed to create', error);
        throw new Error;
    }
};


export { create };

