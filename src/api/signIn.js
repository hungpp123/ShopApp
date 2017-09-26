const signIn = (email, password) => (
  fetch("http://192.168.1.92:81/api/login.php",
  {
    method: "POST",
    header:{
      "Content-Type": "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify({email,password})
  })
  .then(res => res.json())
);

module.exports = signIn;
