// const util = require('ethereumjs-util')
// const secp256k1 = require('secp256k1')

// // var rawTx = '0xf87080843b9aca0083015f90946b477781b0e68031109f21887e6b5afeaaeb002b808c5468616e6b732c206d616e2129a0a5522718c0f95dde27f0827f55de836342ceda594d20458523dd71a539d52ad7a05710e64311d481764b5ae8ca691b05d14054782c7d489f3511a7abf2f5078962'
// // var txDecoder = require('ethereum-tx-decoder')
// // var decodedTx = txDecoder.decodeTx(rawTx);
// // console.log(decodedTx);

// // {
// //   nonce: 0,
// //   gasPrice: BigNumber { _bn: <BN: 3b9aca00> },
// //   gasLimit: BigNumber { _bn: <BN: 15f90> },
// //   to: '0x6b477781b0e68031109f21887e6b5afeaaeb002b',
// //   value: BigNumber { _bn: <BN: 0> },
// //   data: '0x5468616e6b732c206d616e21',
// //   v: 41,
// //   r: '0xa5522718c0f95dde27f0827f55de836342ceda594d20458523dd71a539d52ad7',
// //   s: '0x5710e64311d481764b5ae8ca691b05d14054782c7d489f3511a7abf2f5078962'
// // }
// // if (this._chainId > 0) {
// //   v -= this._chainId * 2 + 8
// // }
// // v = 41 - 2 * 3 - 8 = 27



// function ecrecover(msgHash, v, r, s) {
//   var signature = Buffer.concat([util.setLength(r, 32), util.setLength(s, 32)], 64)
//   var recovery = v - 27
//   if (recovery !== 0 && recovery !== 1) {
//     throw new Error('Invalid signature v value')
//   }
//   var senderPubKey = secp256k1.recover(msgHash, signature, recovery)
//   return secp256k1.publicKeyConvert(senderPubKey, true).slice(1)
// }

// var txHash = '0xabc467bedd1d17462fcc7942d0af7874d6f8bdefee2b299c9168a216d3ff0edb'

// var msgHash = Buffer.from('abc467bedd1d17462fcc7942d0af7874d6f8bdefee2b299c9168a216d3ff0edb', 'hex')
// var r = Buffer.from('a5522718c0f95dde27f0827f55de836342ceda594d20458523dd71a539d52ad7', 'hex')
// var s = Buffer.from('5710e64311d481764b5ae8ca691b05d14054782c7d489f3511a7abf2f5078962', 'hex')
// var pubKey = ecrecover(msgHash, 27, r, s).toString('hex')
// console.log(pubKey)
// var address = util.keccak256(pubKey).toString('hex')
// console.log(address)


// web3.eth.getTransaction('0xabc467bedd1d17462fcc7942d0af7874d6f8bdefee2b299c9168a216d3ff0edb', (err, res) => console.log(res))

const EthereumTx = require('ethereumjs-tx');
const util = require('ethereumjs-util');

// var rawTx = {
//   "blockHash": "0x487183cd9eed0970dab843c9ebd577e6af3e1eb7c9809d240c8735eab7cb43de",
//   "blockNumber": 3015083,
//   "from": "0x92b28647ae1f3264661f72fb2eb9625a89d88a31",
//   "gas": 90000,
//   "gasPrice": "1000000000",
//   "hash": "0xabc467bedd1d17462fcc7942d0af7874d6f8bdefee2b299c9168a216d3ff0edb",
//   "input": "0x5468616e6b732c206d616e21",
//   "nonce": 0,
//   "to": "0x6b477781b0e68031109f21887e6b5afeaaeb002b",
//   "transactionIndex": 7,
//   "value": "0",
//   "v": "0x29",
//   "r": "0xa5522718c0f95dde27f0827f55de836342ceda594d20458523dd71a539d52ad7",
//   "s": "0x5710e64311d481764b5ae8ca691b05d14054782c7d489f3511a7abf2f5078962"
// }
var rawTx = {
  nonce: '0x00',
  gasPrice: '0x3b9aca00',
  gasLimit: '0x15f90',
  to: '0x6B477781b0e68031109f21887e6B5afEAaEB002b',
  value: '0x00',
  data: '0x5468616e6b732c206d616e21',
  v: '0x29',
  r: '0xa5522718c0f95dde27f0827f55de836342ceda594d20458523dd71a539d52ad7',
  s: '0x5710e64311d481764b5ae8ca691b05d14054782c7d489f3511a7abf2f5078962'
};

var tx = new EthereumTx(rawTx);

pubkey=tx.getSenderPublicKey();
pubkeys=pubkey.toString('hex');
var address = util.sha3(pubkey).toString('hex').slice(24);

console.log(pubkeys);
console.log(address);