import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_projectId

// 2. Set chains
const localhost = {
    chainId: 31337,
    name: 'Localhost',
    currency: 'ETH',
    explorerUrl: '',
    rpcUrl: "http://127.0.0.1:8545"
}

const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'http://sepolia.etherscan.com',
    rpcUrl: import.meta.env.VITE_rpc_url

}

// 3. Create modal
const metadata = {
    name: 'Name Service SC',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

export const configureWeb3Modal = () => {
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [localhost, sepolia],
        projectId,
    })
}