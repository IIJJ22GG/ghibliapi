const page = require('./public/index.html')
const data = require('./data.json')
addEventListener('fetch', event => {
    url = event.request.url.replace('https://studioghibli.iijj22gg.tk/','')
    switch(url){case '': case false:
        console.log('a')
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
    console.log('b')
    return event.respondWith( new Response(JSON.stringify(response), {
        headers: { 'content-type': 'application/json;charset=UTF-8' }
    }))
})
