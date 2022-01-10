const baseURL = "https://still-mountain-84233.herokuapp.com/api/";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("GET", "POST", "OPTIONS");

export const createCardApi = (payload) => {
  return fetch(`${baseURL}card`, {
    method: "POST",
    headers: headers,
    data: payload,
  });
};
