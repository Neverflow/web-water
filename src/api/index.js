import ajax from './ajax';

export const reqLogin = ({ name, password }) => ajax('/login', { name, password }, "POST")