module.exports.handler = (evt, ctx, done) => {
  console.log(evt.pathParameters)
  done(null, {
    statusCode: 200,
    body: JSON.stringify(
      { id: evt.pathParameters.id, name: 'clean up', status: 'open' }
    )
  })
}