import { useState } from "react";
import { Button, Dialog, Text, TextField, Flex } from "@radix-ui/themes";

import { toast } from 'react-toastify';

import uploadToIPFS from "../utils/fileUpload";
import useCreateDomainName from "../hooks/useCreateDomainName";


const RegisterNameService = () => {
    const [domainName, setDomainName] = useState('');
    const [image, setImage] = useState<string>("");
    const [selectedFile, setSelectedFile]: any = useState();

    const handleCreateDomainName = useCreateDomainName();


    const handleOnSubmit = async () => {
        const toastId = toast.loading('Creating Domain Name...', { autoClose: false });

        try {
            if (!domainName) {
                toast.error('Domain name is required');
                return;
            }

            if (!selectedFile) {
                toast.error('Avatar is required');
                return;
            }
            const ipfsRes = await uploadToIPFS(selectedFile);
            setImage(ipfsRes.IpfsHash);
            await handleCreateDomainName(domainName, image);

            toast.success('Domain Name created successfully');
        } catch (error: any) {
            toast.error(error.message || 'Error creating domain name');
        } finally {
            toast.dismiss(toastId);
            setDomainName('');
            setImage('');
            setSelectedFile();
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Create Name Service</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Create Name Service</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Create Name Service domain
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Name
                        </Text>
                        <TextField.Root
                            placeholder="Enter your domain name"
                            onChange={(e) => setDomainName(e.target.value)}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Select your avatar
                        </Text>
                        <input type="file" id="form-avatar" onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setSelectedFile(file);
                            }
                        }} />
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handleOnSubmit}>Create</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default RegisterNameService