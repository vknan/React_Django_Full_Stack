import axios from "axios";

const API_URL = "https://vknan.pythonanywhere.com/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register/", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("tokens", JSON.stringify(response.data));

        // Fetch user details after storing the tokens
        return axios
          .get(API_URL + "user/", {
            headers: {
              Authorization: `Bearer ${response.data.access}`,
            },
          })
          .then((userResponse) => {
            console.log("User details fetched: ", userResponse.data); // Debug log
            localStorage.setItem("user", JSON.stringify(userResponse.data));

            // Trigger the login event
            window.dispatchEvent(new Event("userLoggedIn"));

            return userResponse.data;
          })
          .catch((error) => {
            console.error("Error fetching user details: ", error); // Debug log
            throw error;
          });
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error logging in: ", error); // Debug log
      throw error;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokens");
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
