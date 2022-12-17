const usuario = {
  name: "John",
  edad: 18,
  active: true,
};

const auth = {
  mail: "example@gmail.com",
  password: "13h7fsad713@#r3",
};

const userFull = { ...usuario, ...auth };

const { password, ...userInfo } = userFull;

const res = { ...userInfo };
console.log(res);
