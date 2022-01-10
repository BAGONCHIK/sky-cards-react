const baseURL = "http://localhost:8000/api/";

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
