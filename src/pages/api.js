import axios from 'axios';

export const fetchDataFromApi = async (data) => {
  try {
    const response = await axios.post(`https://stg.dhunjam.in/account/admin/login`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchDataAdmin = async () => {
  try {
    const token=localStorage.getItem('token')
    const response = await axios.get(`https://stg.dhunjam.in/account/admin/4`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateDataAdmin = async (payload) => {
  try {
    const response = await axios.put(`https://stg.dhunjam.in/account/admin/4`,payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};