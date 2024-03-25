import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const createRecord = async (data) => {
  try {
    const response = await axios.post(baseUrl, data);
    return response;
  } catch (error) {
    throw new Error();
  }
};

const deleteRecord = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    throw new Error();
  }
};

export { createRecord, deleteRecord };
