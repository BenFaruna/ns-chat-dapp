-include .env

fork-testnet:
	@echo "Forking testnet..."
	@anvil --fork-url ${RPC_URL} --fork-block-number 5561880

test-fork:
	@echo "Testing fork..."
	@forge t --rpc-url ${LOCAL} --match-path test/NameService.t.sol -vvvv

deploy-testnet:
	@echo "Deploying to testnet..."
	@forge script ./script/DeployContracts.s.sol --rpc-url ${RPC_URL}  --broadcast --verify -vvvvv 

verify-testnet:
	@echo "Verifying on testnet..."
	@forge verify-contract 0xb37a4b281EDa0EA195C1b81C0DDA993f25523fBe NameService --etherscan-api-key ${ETHERSCAN_KEY} --chain-id 11155111 --flatten
	@forge verify-contract 0x5195fe554A75FC5b1144e4C0E7d54170E4E54ccc Chat --etherscan-api-key ${ETHERSCAN_KEY} --chain-id 11155111 --flatten