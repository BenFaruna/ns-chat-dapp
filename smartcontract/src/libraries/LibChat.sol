// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

library LibChatEvents {
    event MessageSent(
        address indexed _from,
        address indexed _to,
        uint256 _timestamp
    );
}

library LibChatErrors {}
