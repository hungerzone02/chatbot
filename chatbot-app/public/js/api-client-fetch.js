'use strict';

export async function send(url, method, data, headers) {
    method = method.toUpperCase();
    const init = {
        method: method,
    };

    if(headers) {
        init.headers = headers;
    }

    if(data) {
        if(method == 'GET') {
            const qs = new URLSearchParams(data);
            url = `${url}?${qs}`;
        }
        else {
            init.body = JSON.stringify(data);
        }
    }
    const response = await fetch(url, init);
    return response.json();
}

export async function get(url, data, headers) {
    return await send(url, 'GET', data, headers);
}

export async function post(url, data, headers) {
    return await send(url,'POST',data,headers);
}