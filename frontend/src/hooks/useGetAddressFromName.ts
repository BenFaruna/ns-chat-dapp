import { useState, useEffect } from 'react'
import { getNameServiceContract } from '../constants/contracts'
import { getReadOnlyProvider } from '../constants/providers'

const useGetAddressFromName = (name: string) => {
    const [userAddress, setUserAddress] = useState("")

    useEffect(() => {
        (async () => {
            const nameService = getNameServiceContract(getReadOnlyProvider);
            const address = await nameService.nameToAddress(name)

            setUserAddress(address);
        })();
    }, [name])

    return userAddress
}

export default useGetAddressFromName