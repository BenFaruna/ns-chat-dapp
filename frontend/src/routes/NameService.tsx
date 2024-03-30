// import { useState } from 'react';
import { Avatar, Table } from "@radix-ui/themes";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import RegisterNameService from '../components/RegisterNameService';
import useGetDomainDetails from '../hooks/useGetDomainDetails';

const NameService = () => {
    const { address, isConnected } = useWeb3ModalAccount() as { address: string, isConnected: boolean };
    const { domainName, domainOwner, avatar } = useGetDomainDetails(address);

    return (
        <div>
            {isConnected && domainName === "" ? <RegisterNameService /> : null}
            {isConnected && domainName !== "" ? <Table.Root variant="surface" className='mt-3'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Avatar</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Domain Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Owner</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row align={"center"}>
                        <Table.RowHeaderCell>
                            <Avatar
                                size="5"
                                src={`${import.meta.env.VITE_ipfs_base_url + avatar}`}
                                fallback="0x"
                            />
                        </Table.RowHeaderCell>
                        <Table.Cell>{domainName}</Table.Cell>
                        <Table.Cell>{domainOwner}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root> : null}
        </div>
    )
}

export default NameService;
