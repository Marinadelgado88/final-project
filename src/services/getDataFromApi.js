const getInfoFromApi = () => {
  return fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        return {
          id: user.login.uuid,
          username: user.login.username,
          city: user.location.city,
          name: user.name.first,
          lastname: user.name.last,
          email: user.gender,
          image: user.picture.large,
        };
      });
    });
};
export default getInfoFromApi;
