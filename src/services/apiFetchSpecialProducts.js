import axios from "axios";

export const apiFetchSpecialProducts = async () => {
  try {
    const data = await axios.get("./products.json");
    if (data.status === 200) {
      return data.data.products;
    }
    return [];
  } catch (error) {
    console.error(error, "error");
  }
};
