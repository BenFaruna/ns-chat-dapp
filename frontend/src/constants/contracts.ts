import { ethers } from "ethers";
import NameServiceAbi from "./name_service_abi.json";
import ChatAbi from "./chat_abi.json";

export const getNameServiceContract = (providerOrSigner: ethers.ContractRunner) => {
    return new ethers.Contract(
        import.meta.env.VITE_nameservice_contract,
        NameServiceAbi,
        providerOrSigner
    )
}

export const getChatContract = (providerOrSigner: ethers.ContractRunner) => {
    return new ethers.Contract(
        import.meta.env.VITE_chat_contract,
        ChatAbi,
        providerOrSigner
    )
}