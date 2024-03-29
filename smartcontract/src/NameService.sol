// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {LibNSErrors, LibNSEvents} from "./libraries/LibNameService.sol";

contract NameService {
    struct DomainDetails {
        string domainName;
        string avatarURI;
        address owner;
    }

    mapping(string => address) public nameToAddress;
    mapping(address => DomainDetails) public domains;

    function getDomainDetails(
        string memory _domainName
    ) public view returns (string memory, string memory, address) {
        if (nameToAddress[_domainName] == address(0)) {
            revert LibNSErrors.DomainNotRegistered();
        }

        address _domainAddress = nameToAddress[_domainName];

        return (
            domains[_domainAddress].domainName,
            domains[_domainAddress].avatarURI,
            domains[_domainAddress].owner
        );
    }

    function registerNameService(
        string memory _domainName,
        string memory _avatarURI
    ) public {
        if (nameToAddress[_domainName] != address(0)) {
            revert LibNSErrors.NameAlreadyTaken();
        }
        nameToAddress[_domainName] = msg.sender;
        domains[msg.sender] = DomainDetails(
            _domainName,
            _avatarURI,
            msg.sender
        );

        emit LibNSEvents.NameRegistered(msg.sender, _domainName);
    }

    function updateDomainAvatar(
        string memory _domainName,
        string memory _avatarURI
    ) public {
        if (nameToAddress[_domainName] == address(0)) {
            revert LibNSErrors.DomainNotRegistered();
        }
        if (nameToAddress[_domainName] != msg.sender) {
            revert LibNSErrors.NotDomainOwner();
        }

        domains[msg.sender].avatarURI = _avatarURI;
        emit LibNSEvents.AvatarUpdated(msg.sender, _domainName);
    }
}
