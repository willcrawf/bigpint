import React from 'react'
import * as tokenService from './tokenService'
const BASE_URL = '/api/auth/'

export function getUser(userId) {
    if (userId) {
        return fetch(`${BASE_URL}/updateTokenUser/${userId}`, {
            method: 'POST'
        },
        {mode: 'cors'})
        .then(res => res.json())
        .then(({ token }) => {
            tokenService.removeToken()
            tokenService.setToken(token)
        })
        .then(response => tokenService.userFromToken())
    }
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

export function combineUser(gId, user) {
    const fetchObject = { gId, user }
    fetch(BASE_URL + 'updateUser', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(fetchObject)
    })
    .then(resp => 'a')
    // .then(res => {
    //     if (res.ok) return res.json()
    //     throw new Error('bad creds')
    // })
    // .then(({ token }) => tokenService.setToken(token))
}

export function logout() {
    tokenService.removeToken()
}

