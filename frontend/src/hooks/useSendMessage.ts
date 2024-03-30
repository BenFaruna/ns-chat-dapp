import { useCallback } from 'react';
import { useWeb3ModalProvider } from '@web3modal/ethers/react';

import { toast } from 'react-toastify';

import { getChatContract } from '../constants/contracts';
import { getReadWriteProvider } from '../constants/providers';

const useSendMessage = () => {
    const { walletProvider } = useWeb3ModalProvider();

    return (useCallback(async (receiver: string, content: string) => {
        if (receiver === "" || content === "") {
            toast.error("Receiver and content cannot be empty");
            return
        }

        const toastId = toast.info("Sending message...", { autoClose: false });
        try {
            const provider = getReadWriteProvider(walletProvider);
            const signer = await provider.getSigner()
            const chatContract = getChatContract(signer);

            const tx = await chatContract.sendMessage(receiver, content);
            tx.wait()

            toast.update(toastId, { render: "Message sent", type: "success", autoClose: 2000 })
        } catch (error) {
            console.log(error);
        } finally {
            toast.dismiss(toastId);
        }

    }, []))
}

export default useSendMessage