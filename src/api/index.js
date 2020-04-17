import ajax from './ajax';

export const reqLogin = ({ name, password }) => ajax('/api/login', { name, password }, "POST")

export const reqWater = param => ajax('/api/water', param, "GET")

export const reqAllWater = param => ajax('/api/allwater', param, "GET")
// export const reqLogin = ({ name, password }) => ajax('/login', { name, password }, "POST")

// export const reqWater = param => ajax('/water', param, "GET")