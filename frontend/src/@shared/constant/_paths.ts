export const Paths = {
  root: "/",

  //User
  user: "/user",
  userList: "/user/list",
  userCreate: "/user/create",
  userUpdate: (id = ":id") => `/user/update/${id}`,

  //sector
  sector: "/sector",
  sectorList: "/sector/list",
  sectorCreate: "/sector/create",
  sectorUpdate: (id = ":id") => `/sector/update/${id}`,

  //sector
  distribution: "/distribution",
  distributionList: "/distribution/list",
  distributionCreate: "/distribution/create",
  distributionUpdate: (id = ":id") => `/distribution/update/${id}`,
};
