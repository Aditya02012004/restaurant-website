// src/utils/api.js
import axios from "axios";

// Create an instance of Axios with a base URL from environment variables
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// Function to fetch all restaurants
export const fetchRestaurants = () => API.get("/restaurants");

// Optionally, you can add more API functions for other endpoints as needed
export const fetchRestaurantById = (id) => API.get(`/restaurants/${id}`);

