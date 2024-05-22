import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (query, currentPage = 1) => {
  const keys = "AYvSb6D5eVk_UKPungLRYEZDDZdAgleRDJx5HTQh-ag";
  const response = await axios.get("/search/photos", {
    params: {
      client_id: keys,
      query,
      page: currentPage,
      hitsPerPage: 10,
    },
  });

  return response.data;
};
