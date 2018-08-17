const AttackPredictTheFuture = artifacts.require('AttackPredictTheFuture')
const AttackPredictTheBlockHash = artifacts.require('AttackPredictTheBlockHash')

module.exports = function (deployer) {
  deployer.deploy(AttackPredictTheFuture)
  deployer.deploy(AttackPredictTheBlockHash)
}
