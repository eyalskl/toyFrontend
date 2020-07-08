const axios = require('axios');

export const toyService = {
    query,
    remove,
    save,
    getById,
    getEmptyToy
}

function _getUrl(id = '') {
    const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/toy' : '//localhost:3000/api/toy';
    return `${BASE_URL}/${id}`;
}

function query(filterBy) {
    const inStockPart = (filterBy.inStock) ? `&inStock=${filterBy.inStock}` : '';
    const typePart = (filterBy.type) ? `&type=${filterBy.type}` : '';
    const sortPart = (filterBy.sort) ? `&sort=${filterBy.sort}` : '';
    return axios.get(`${_getUrl()}?name=${filterBy.name}${inStockPart}${typePart}${sortPart}`)
        .then(res => res.data)
}

function getEmptyToy() {
    return {
        name: '',
        price: '',
        type: '',
        inStock: ''
    }
}

function getById(id) {
    return axios.get(_getUrl(id))
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(_getUrl(id))
}

function save(toy) {
    return (toy._id) ? _update(toy) : _add(toy)
}

function _update(toy) {
    return axios.put(_getUrl(toy._id), toy)
        .then(res => res.data)
}

function _add(toy) {
    return axios.post(_getUrl(), toy)
        .then(res => res.data)
}