const peep = {song: 'hellboy'}
const john = {__proto__: peep, music: 'Conquer or die'}
const toxic = {__proto__: john, paredao: 'leozanata'}
console.log(toxic.song)

const carro = {
    modelo:'<desconhecido>',
    Vmax:250,
    Vatual:0,
    acelerar (delta) {if (this.Vatual + delta  <= this.Vmax){
        this.Vatual += delta
        }
    else{this.Vatual = this.Vmax}
    },
    status (){
        return `Velocidade ${this.Vatual}Km/h de ${this.Vmax}Km/h`
    }
}
const ferrari = {
    modelo:'f40',
    Vmax:324,

}

const fusca = {
    modelo:'Fuscão preto',
    Vmax:280,
    status () {
        return `Modelo: ${this.modelo} ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(fusca,carro)
ferrari.acelerar(100)
fusca.acelerar(150)
console.log(ferrari.status())
console.log(fusca.status())

Object.defineProperty(fusca, 'Dono',{
    enumerable:true,
    writable:false,
    value:'John'
})
console.log(fusca.Dono)

