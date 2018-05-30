module.exports.handler = (evt, ctx, done) => {
  done(null, {
    statusCode: 200,
    header: {},
    body: JSON.stringify({message: 'hello'})
  })
}
