let teste = "!@#$%¨&*()-_=+´`~^;:.>,</?'[{]} 0123456789 abcdefghijklmnopqrstuvwxyz"

const buf = Buffer.from(teste)


console.log((buf.toJSON()))