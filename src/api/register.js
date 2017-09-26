const register = (email, name, password) => (
  fetch("http://192.168.1.92:81/api/register.php",
  {
    method: "POST",
    header:{
      "Content-Type": "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify({email,name,password})
  })
  .then(res => res.text())
);

module.exports = register;
