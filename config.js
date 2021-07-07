let myUrl
if(process.env.ENVIRONMENT === "dev") {
  myUrl = 'localhost:4000'
} else {
  myUrl = 'mywebsite.com'
}

module.exports = myUrl