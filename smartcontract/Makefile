-include .env

fork-testnet:
	@echo "Forking testnet..."
	@anvil --fork-url ${SEPOLIA_RPC_URL} --fork-block-number 5561880

test-fork:
	@echo "Testing fork..."
	@forge t --rpc-url ${LOCAL} --match-path test/NameService.t.sol -vvvv

deploy-testnet:
	@echo "Deploying to testnet..."
	@forge script ./script/DeployContracts.s.sol:DeployScript --rpc-url ${SEPOLIA_RPC_URL}  --broadcast --verify -vvvv

verify-testnet:
	@echo "Verifying on testnet..."
	@forge verify-contract --chain-id 11155111 --watch 0x21a45056B6A25f9c12A10780AcE2Ed660E787FA5 src/NameService.sol:NameService 
	@forge verify-contract --chain-id 11155111 --watch  --constructor-args-path constructor-args.txt 0xd862be1ebDf6F50fc10FF64068996dB9B8a15Ea2 src/Chat.sol:Chat