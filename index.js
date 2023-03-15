const page = require('./public/index.html')
const data = require('./data.json')
addEventListener('fetch', event => {
  const path = new URL(event.request.url).pathname
  if (path === '/' || path === '') { return event.respondWith(new Response(page.default, {headers: {'content-type': 'text/html;charset=UTF-8'}})) }
  let response = data
  for (const segment of path.split('/').filter(Boolean)) {
    if (Array.isArray(response)) {
      const id = segment; response = response.find(obj => obj.id === id)
      if (!response) { return event.respondWith(new Response(JSON.stringify({status: 404}), {headers: {'content-type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'}})) }
    } else {
      response = response[segment]
      if (!response) { return event.respondWith(new Response(JSON.stringify({status: 404}), {headers: {'content-type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'}})) }
    }
  }
  return event.respondWith(new Response(JSON.stringify(response), {headers: {'content-type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'}}))
})
