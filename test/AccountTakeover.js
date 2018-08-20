const EthereumTx = require('ethereumjs-tx')
const util = require('ethereumjs-util')

const owner_address = '0x6b477781b0e68031109f21887e6b5afeaaeb002b'
// const pubKey = 'a96c5530f604e0a359fea09254be691ade6c5de5fb351a66d961f84c0044e1cee3890476d47ca85ace1df513235ce825b409d49cd8ba1f305ca8d580aefb74c4'
var raw_tx01 = {
  blockHash: '0x0515b2216fa8012618c330bff363d7a49876f4b0f05752b17b01597b5527a604',
  blockNumber: 3015063,
  from: '0x6B477781b0e68031109f21887e6B5afEAaEB002b',
  gas: 21000,
  gasPrice: 1000000000,
  hash: '0xd79fc80e7b787802602f3317b7fe67765c14a7d40c3e0dcb266e63657f881396',
  input: '',
  nonce: 0x0,
  to: '0x92b28647Ae1F3264661f72fb2eB9625A89D88A31',
  transactionIndex: 9,
  value: 1230000000000000000,
  v: '0x29',
  r: '0x69a726edfb4b802cbf267d5fd1dabcea39d3d7b4bf62b9eeaeba387606167166',
  s: '0x7724cedeb923f374bef4e05c97426a918123cc4fec7b07903839f12517e1b3c8'
}

var raw_tx02 = { blockHash: '0xe23306ce25e2e0329ed148f17e16b3b566b2b42cb86bf4ece5b41a0fee30a497',
  blockNumber: 3015068,
  from: '0x6B477781b0e68031109f21887e6B5afEAaEB002b',
  gas: 21000,
  gasPrice: 1000000000,
  hash: '0x061bf0b4b5fdb64ac475795e9bc5a3978f985919ce6747ce2cfbbcaccaf51009',
  input: '',
  nonce: 0x1,
  to: '0x92b28647Ae1F3264661f72fb2eB9625A89D88A31',
  transactionIndex: 17,
  value: 1811266580600000000,
  v: '0x29',
  r: '0x69a726edfb4b802cbf267d5fd1dabcea39d3d7b4bf62b9eeaeba387606167166',
  s: '0x2bbd9c2a6285c2b43e728b17bda36a81653dd5f4612a2e0aefdb48043c5108de'
}

var tx01 = new EthereumTx(raw_tx01)
var tx02 = new EthereumTx(raw_tx02)
var s1 = '0x7724cedeb923f374bef4e05c97426a918123cc4fec7b07903839f12517e1b3c8'
var z1 = '0x350f3ee8007d817fbd7349c477507f923c4682b3e69bd1df5fbb93b39beb1e04'
var r  = '0x69a726edfb4b802cbf267d5fd1dabcea39d3d7b4bf62b9eeaeba387606167166'
var s2 = '0x2bbd9c2a6285c2b43e728b17bda36a81653dd5f4612a2e0aefdb48043c5108de'
var z2 = '0x4f6a8370a435a27724bbc163419042d71b6dcbeb61c060cc6816cda93f57860c'

console.log(tx01.hash(false).toString('hex'));
console.log(tx02.hash(false).toString('hex'));

// pubkey=tx.getSenderPublicKey()
// pubkeys=pubkey.toString('hex')
// var address = util.sha3(pubkey).toString('hex').slice(24)

// console.log(pubkeys)
// console.log(address)

// finish him fuck yeah 0x614f5e36cd55ddab0947d1723693fef5456e5bee24738ba90bd33c0c6e68e269