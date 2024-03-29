// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Chat} from "../src/Chat.sol";
import {NameService} from "../src/NameService.sol";

import {LibChatErrors, LibChatEvents} from "../src/libraries/LibChat.sol";

contract ChatTest is Test {
    NameService nameServiceContract;
    Chat chatContract;

    address A = address(0xa);
    address B = address(0xb);
    address C = address(0xc);

    function setUp() public {
        nameServiceContract = new NameService();
        chatContract = new Chat(address(nameServiceContract));

        A = mkaddr("user A");
        B = mkaddr("user B");
        C = mkaddr("user C");

        switchSigner(A);
        nameServiceContract.registerNameService("A.ns", "awiijjj");

        switchSigner(B);
        nameServiceContract.registerNameService("B.ns", "bwiijjj");

        switchSigner(C);
        nameServiceContract.registerNameService("C.ns", "cwiijjj");
    }

    function testSendMessage() public {
        switchSigner(A);
        chatContract.sendMessage("B.ns", "Hello B");

        switchSigner(B);
        chatContract.sendMessage("A.ns", "Hello A");

        Chat.Message[] memory _message = chatContract.getMessages(
            "A.ns",
            "B.ns"
        );

        Chat.Message[] memory _message2 = chatContract.getMessages(
            "B.ns",
            "A.ns"
        );

        assert(_message.length == 2);
        assert(_message2.length == 2);
    }

    function switchSigner(address _newSigner) public {
        address foundrySigner = 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38;
        if (msg.sender == foundrySigner) {
            vm.startPrank(_newSigner);
        } else {
            vm.stopPrank();
            vm.startPrank(_newSigner);
        }
    }

    function mkaddr(string memory name) public returns (address) {
        address addr = address(
            uint160(uint256(keccak256(abi.encodePacked(name))))
        );
        vm.label(addr, name);
        return addr;
    }
}
