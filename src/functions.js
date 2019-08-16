import { url_server } from './config.js'

export function setToken(token){
    localStorage.setItem('token', token)
}

export function getToken(){
    let token = localStorage.getItem('token') || undefined

    return token
}

export async function getData(token, path){
    const request = {
        method  : 'GET',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            "Token": token,
        },
        mode    : 'cors',
        cache   : 'default'
    }

    var data = []

    try {
        let url = url_server + path

        const response = await fetch(url, request)

        switch(response.status){
            case 200 : {
                data = await response.json()

                break;
            }

            case 401 : {
                setToken(undefined)
                window.location = '/login'
                break;
            }
        }

    } catch (err) {
        console.log(err)
    }

    return data
}




