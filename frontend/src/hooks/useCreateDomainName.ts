import { useCallback } from 'react';
import { useWeb3ModalProvider } from "@web3modal/ethers/react";

import { getNameServiceContract } from '../constants/contracts';
import { getReadWriteProvider } from '../constants/providers';

const useCreateDomainName = () => {
    const { walletProvider } = useWeb3ModalProvider();

    return (
        useCallback(async (domainName: string, avatarHash: string) => {
            const provider = getReadWriteProvider(walletProvider);
            const signer = await provider.getSigner();
            const nameServiceContract = getNameServiceContract(signer);

            try {
                const tx = await nameServiceContract.registerNameService(domainName, avatarHash);
                const receipt = await tx.wait();
                console.log(receipt);
            } catch (error: any) {
                const revertData = error.data;
                const revertName = nameServiceContract.interface.parseError(revertData)?.name;

                switch (revertName) {
                    case 'NameAlreadyTaken':
                        throw new Error('Domain name already exists');
                    default:
                        console.error(error);
                        throw new Error('Error creating domain name');
                }
            }
        }, [])
    )
}

export default useCreateDomainName;