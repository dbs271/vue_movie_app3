exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'GUK',
      age: 24,
      email: 'dbs2747@gamil.com'
    })
  }
}