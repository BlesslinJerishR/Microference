gid = (id) => {
  return document.getElementById(id);
};

year = gid("year");
var dt = new Date();
year.innerHTML = dt.getFullYear();
