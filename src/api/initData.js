const initData= () => (
  fetch("http://192.168.1.92:81/api")
  .then(res => res.json())
);

export default initData;
