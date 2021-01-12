import axios from "axios"

const API_URL = 'http://192.168.0.5:8080'

export function fecthOrders() {
    return axios(`${API_URL}/orders`)
}