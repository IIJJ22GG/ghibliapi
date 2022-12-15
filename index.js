const page = require('./public/index.html')
const data = require('./data.json')
addEventListener('fetch', event => {
    console.log(event.request.url)
    url = location.pathname
    switch(url){case '': case false:
        return event.respondWith( new Response(page, {
            headers: { 'content-type': 'application/html' }
        }))
    }
    let response = data
    url = url.split('/')
    l:for (let i=0, n=url.length; i < n; ++i){ o=url[i]
        switch(o){case '': continue}
        switch(response.hasOwnProperty(o)){case true: response = response[o]; continue}
        switch(response[0]){case undefined:break; default: 
            for (let ii=0, nn=Object.keys(response).length; ii < nn; ++ii){
                switch(response[ii].id===o){case true: response = response[ii]; continue l}
        }}
        response = 404; break
    }
    return event.respondWith( new Response(JSON.stringify(response), {
        headers: { 'content-type': 'application/json;charset=UTF-8' }
    }))
})
