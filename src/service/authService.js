import { token } from 'morgan'
import * as tokenService from './tokenService'
const BASE_URL = '/api/auth/'

export function getUser() {
    return tokenService.userFromToken()
}

export function signup(userData) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(({ token }) => tokenService.setToken(token))
}

export function login(info) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(info)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('bad creds')
    })
    .then(({ token }) => tokenService.setToken(token))
}

export function logout() {
    tokenService.removeToken()
}