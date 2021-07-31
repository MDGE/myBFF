const path = require('path')
let config = {
    NODE_ENV:process.env.NODE_ENV,
    staticDir:path.resolve(__dirname,'../assets'),
    viewDir:path.resolve(__dirname,'../views'),
    cache:process.env.NODE_ENV === 'development'?false:'memory'
}
if(config.NODE_ENV === 'development'){
    config.port = 4040
}else if(config.NODE_ENV === 'production'){
    config.port = 4050
}
module.exports = config