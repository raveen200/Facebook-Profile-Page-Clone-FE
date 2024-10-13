import api from "../configs/Axios";
import { API_CONSTANTS } from "../constants/index";

export const registerProfile = async (data) => {
  const response = await api.post(API_CONSTANTS.SIGN_UP, data);
  return response;
};

export const loginProfile = async (data) => {
  const response = await api.post(API_CONSTANTS.LOGIN, data);
  return response;
};

export const addPost = async (data) => {
  const response = await api.post(API_CONSTANTS.ADD_POST, data);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get(API_CONSTANTS.GET_PROFILE);
  return response.data;
};
