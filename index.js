const data = require('./data.json')
addEventListener('fetch', event => {
  const json = JSON.stringify(data, null, 2);

  return event.respondWith(
    new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    })
  )
})