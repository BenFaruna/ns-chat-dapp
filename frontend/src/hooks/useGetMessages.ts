import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import { getChatContract, getNameServiceContract } from '../constants/contracts';
import { getReadOnlyProvider } from '../constants/providers';

const useGetMessages = () => {
    const { address } = useWeb3ModalAccount();
    const { domainName } = useParams();
    const [sender, setSender] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const chat = getChatContract(getReadOnlyProvider);
        const nameService = getNameServiceContract(getReadOnlyProvider);

        (async () => {
            const senderName = await nameService.domains(address);
            setSender(senderName[0]);

            const history = await chat.getMessages(sender, domainName)

            console.log("History", history);
        })()
    }, [domainName])

    return messages
}

export default useGetMessages