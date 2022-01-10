const baseURL = "https://still-mountain-84233.herokuapp.com/api/";

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("GET", "POST", "OPTIONS");
headers.append("Access-Control-Allow-Headers", "Content-type");
headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");
headers.append("Access-Control-Allow-Methods", "POST");

export const createCardApi = (payload) => {
  fetch(`${baseURL}card/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
