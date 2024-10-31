// src/components/RestaurantList.js
import React, { useEffect, useState } from "react";
import { fetchRestaurants } from "../utils/api"; // Adjust the path as needed

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetchRestaurants();
        setRestaurants(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getRestaurants();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
