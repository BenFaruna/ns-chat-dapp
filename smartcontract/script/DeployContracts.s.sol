// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";

import {Chat} from "../src/Chat.sol";
import {NameService} from "../src/NameService.sol";

contract DeployScript is Script {
    NameService nameSC;
    Chat chatSC;

    function setUp() public {}

    function run() public {
        uint256 pK = vm.envUint("PK");
        vm.startBroadcast(pK);

        // Deploy contract
        nameSC = new NameService();
        chatSC = new Chat();

        console2.log("NameService: ", address(nameSC));
        console2.log("Chat: ", address(chatSC));

        vm.stopBroadcast();
    }
}
