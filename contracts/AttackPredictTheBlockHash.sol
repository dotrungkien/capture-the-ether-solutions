pragma solidity ^0.4.21;


contract AttackPredictTheBlockHash {
    uint public blockNumber;
    uint public blockCount;

    function AttackPredictTheBlockHash() public {
        reset();
    }

    function reset() public {
        blockNumber = block.number;
        blockCount = 0;
    }

    function count() public {
        blockCount = block.number - blockNumber;
    }
}
