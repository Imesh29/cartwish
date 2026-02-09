import apiClients from "../utils/api-clients";

export function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  return apiClients.post("/user/signup", body);
}

export async function login(user) {
  return apiClients.post("/user/login", user);
}
