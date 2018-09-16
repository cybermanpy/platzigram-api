'user strict'

import test from 'ava'
import micro from 'micro'
// import uuid from 'uuid-base62'
import listen from 'test-listen'
import request from 'request-promise'
import fixtures from './fixtures'
import users from '../users'

test.beforeEach(async t => {
  let srv = micro(users)
  t.context.url = await listen(srv)
})

test('POST /', async t => {
  let user = fixtures.getUser()
  let url = t.context.url

  let options = {
    method: 'POST',
    uri: url,
    json: true,
    body: {
      name: user.name,
      username: user.username,
      passowrd: user.passowrd,
      email: user.email
    },
    resolveWithFullResponse: true
  }

  let response = await request(options)

  delete user.email
  delete user.passowrd

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, user)
})

test.todo('GET /:username')
