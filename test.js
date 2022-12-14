<<<<<<< HEAD
#newline
=======
>>>>>>> 085b8a7262fe2ac3d31ff67f8f3af837c6b3c5aa
const tape = require('tape')
const jsonist = require('jsonist')

const PORT = process.env.PORT = process.env.PORT || require('get-PORT-sync')()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`

tape('should respond hello', (t) => {
  jsonist.get(urlBase, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
tape('should respond user-agent', (t) => {
  const opts = { headers: { 'User-Agent': 'tape' } }
  jsonist.get(`${urlBase}/user-agent`, opts, (err, body) => {
    if (err) t.error(err)

    t.equal(body.ua, 'tape')
=======
=======
>>>>>>> ac0efa7 (fiat lux)
tape('should respond b64', (t) => {
  jsonist.get(`${urlBase}/b64/hello`, (err, body) => {
    if (err) t.error(err)

    t.equal(body.b64, 'aGVsbG8=')
>>>>>>> aa23849 (feat: add base64 endpoint)
    t.end()
  })
})

=======
>>>>>>> 085b8a7 (fiat lux)
=======
>>>>>>> 085b8a7262fe2ac3d31ff67f8f3af837c6b3c5aa
tape('cleanup', function (t) {
  server.close()
  t.end()
})
