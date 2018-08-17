var HDWalletProvider = require('truffle-hdwallet-provider')

require('dotenv').config()
var infura_apikey = process.env.INFURA_KEY
var mnemonic = process.env.MNEMONIC

module.exports = {
  networks: {
    development: {
        host: '127.0.0.1',
        port: 9545,
        network_id: '*'
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infura_apikey, 2),
      network_id: 3,
      gas: 4000000
    }
  },
  solc: {
		optimizer: {
			enabled: false,
		}
	},
}
