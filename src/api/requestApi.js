import fetch from '../config/fetch'


export const login = (userName, password) => fetch('api/login', {userName, password}, 'post')


