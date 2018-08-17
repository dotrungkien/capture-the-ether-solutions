const AttackPredictFuture = artifacts.require('AttackPredictFuture')

module.exports = async function (deployer) {
  await deployer.deploy(AttackPredictFuture)
}
