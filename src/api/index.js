import ajax from './ajax';

export const reqLogin = ({ name, password }) => ajax('/api/login', { name, password }, "POST")

export const reqWater = param => ajax('/api/water', param, "GET")