import apiClients from "../utils/api-clients";

export function singup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  return apiClients.post("/user/singup", body);
}
