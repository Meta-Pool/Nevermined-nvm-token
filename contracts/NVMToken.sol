// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

struct initialDistribution {
    address account;
    uint256 amount;
}

contract NVMToken is ERC20 {
    constructor(
        initialDistribution[] memory _initialDistribution
    ) ERC20("Nevermined Token", "NVM") {
        uint256 len = _initialDistribution.length;

        for (uint256 i; i < len; i++) {
            _mint(_initialDistribution[i].account, _initialDistribution[i].amount);
        }
    }
}
