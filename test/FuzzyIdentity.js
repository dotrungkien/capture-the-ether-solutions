//https://ethereum.stackexchange.com/questions/13778/get-public-key-of-any-ethereum-account/13892#13892

var crypto = require('crypto')
var util = require('ethereumjs-util')
const generate = require('ethjs-account').generate;
const rlp = require('rlp');

function accGenerator() {
  var seed = '892h@fsdf11ks8sk^2h8s8shfs.jk39hsoi@hohskd'
  var sender
  var encodedRlp
  var contractAddress
  while (true) {
    seed=seed+Math.random().toString(36).substring(12);
    for (var i = 0; i < 1000; i++) {
      res = generate(seed);
      sender = res.address
      console.log(sender)
      for (var nonce = 0; nonce < 10; nonce++) {
        encodedRlp = rlp.encode([sender, nonce]);
        buf = util.sha3(encodedRlp);
        contractAddress = buf.slice(12).toString('hex')
        if (contractAddress.match('badc0de')) {
          console.log("contract_address: " + contractAddress);
          console.log(res, nonce)
          return
        }
      }
    }
  }
}
accGenerator()

// { privateKey: '0x4a1baad568c0d630628495192bcb0a17fa78bdb0ff5c5b75e022a8184fa4c820',
  // publicKey: '0x3268eb251a3d382f950cf2247a6888b80cf9d9067d0f898175890196edcc217160b42d505b03db9b47625d48b5303c262d076dd41ffeaa74038362a3a83991ca',
  // address: '0x2518BccCcf4EBE124B666C74146fe12CcDAf7A61' }
  // nonce: 3