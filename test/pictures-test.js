'user strict'

import test from 'ava'
import micro from 'micro'
// import uuid from 'uuid-base62'
import listen from 'test-listen'
import request from 'request-promise'
import pictures from '../pictures'
import fixtures from './fixtures'

test('GET /:id', async t => {
  let image = fixtures.getImage()

  let srv = micro(pictures)
  let url = await listen(srv)
  let body = await request({ uri: `${url}/${image.publicId}`, json: true })
  t.deepEqual(body, image)

  // let id = uuid.v4()
  // let srv = micro(async (req, res) => {
  //   send(res, 200, { id })
  // })

  // let body = await request({ uri: `${url}/${id}`, json: true })
  // let body = await request({ url: url, json: true })
  // t.deepEqual(body, { id })
})

test.todo('POST /')
test.todo('POST /:id/like')
