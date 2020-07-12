this.a='1'
exports.b ='2'
module.exports.c='3'

exports = null
console.log(module.exports)

//mesmo que você deixe null um do braços de module.exports, o objeto continuará intacto
//o unico que será importa será module.exports