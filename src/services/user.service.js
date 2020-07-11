const axios = require('axios');

export const userService = {
    query,
    remove,
    save,
    getById,
}

function _getUrl(id = '') {
    const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/user' : '//localhost:3000/api/user';
    return `${BASE_URL}/${id}`;
}

function query() {
    return axios.get(_getUrl())
        .then(res => res.data)
}

function getById(id) {
    return axios.get(_getUrl(id))
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(_getUrl(id))
}

// function save(user) {
//     return (user._id) ? _update(user) : _add(user)
// }

function save(user) {
    return axios.put(_getUrl(), user)
        .then(res => res.data)
}

function _add(user) {
    return axios.post(_getUrl(id), user)
        .then(res => res.data)
}