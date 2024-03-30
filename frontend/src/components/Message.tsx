import { useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Box, Button, Card, Flex, Text, TextArea } from '@radix-ui/themes';

import useGetDomainDetails from "../hooks/useGetDomainDetails";
import useGetAddressFromName from "../hooks/useGetAddressFromName";
import useGetMessages from "../hooks/useGetMessages";


const Message = () => {
    const [messageText, setMessageText] = useState("");
    const { domainName } = useParams()
    const domainOwner = useGetAddressFromName(domainName as string);
    const { avatar } = useGetDomainDetails(domainOwner);
    const messages = useGetMessages()

    return (
        <>
            <Text as="div" weight="bold" className="text-xl">Chat with {domainName}</Text>
            <Flex justify={"between"}>
                <TextArea placeholder="Send message..."
                    size={"3"}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <Button>Send</Button>
            </Flex>
            <Box width="800px">
                <Card size="2">
                    <Flex gap="4" align="center">
                        <Avatar
                            src={import.meta.env.VITE_ipfs_base_url + avatar}
                            size="4" radius="full" fallback="T" color="indigo" />
                        <Box>
                            <Text as="div" weight="bold">
                                Teodros Girmay
                            </Text>
                            <Text as="div" color="gray">
                                Engineering
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
            <Box width="800px">
                <Card size="2">
                    <Flex gap="4" align="center">
                        <Avatar size="4" radius="full" fallback="T" color="indigo" />
                        <Box>
                            <Text as="div" weight="bold">
                                Teodros Girmay
                            </Text>
                            <Text as="div" color="gray">
                                Engineering
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
            <Box width="800px">
                <Card size="2">
                    <Flex gap="4" align="center">
                        <Avatar size="4" radius="full" fallback="T" color="indigo" />
                        <Box>
                            <Text as="div" weight="bold">
                                Teodros Girmay
                            </Text>
                            <Text as="div" color="gray">
                                Engineering
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
            <Box width="800px">
                <Card size="2">
                    <Flex gap="4" align="center">
                        <Avatar size="4" radius="full" fallback="T" color="indigo" />
                        <Box>
                            <Text as="div" weight="bold">
                                Teodros Girmay
                            </Text>
                            <Text as="div" color="gray">
                                Engineering
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
        </>
    )
}

export default Message