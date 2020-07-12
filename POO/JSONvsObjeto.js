const teste = {p1:'A',p2:1,p3:'B'}
let a = JSON.stringify(teste)
let b = JSON.parse('{"idade":true, "lista": [ 54545 ]}')

//JSON transforma em notação txt.
 // JSON não suporta funções.
 console.log(b.idade)