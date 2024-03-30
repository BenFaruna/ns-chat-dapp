import { useState, useCallback } from 'react'
import { getReadOnlyProvider } from '../constants/providers';
import { getNameServiceContract } from '../constants/contracts';


const useGetDomainDetails = (address: string) => {
    const [domainName, setDomainName] = useState('');
    const [domainOwner, setDomainOwner] = useState('');
    const [avatar, setAvatar] = useState('');

    (useCallback(() => {
        // fetch domain details
        const getDomainDetails = async () => {
            if (!address) return;

            const nameServiceContract = getNameServiceContract(getReadOnlyProvider);
            const [name, avatarHash, owner] = await nameServiceContract.domains(address);

            setDomainName(name);
            setDomainOwner(owner);
            setAvatar(avatarHash);
        }

        getDomainDetails();
    }, [address]))();
    return { domainName, domainOwner, avatar }
}

export default useGetDomainDetails