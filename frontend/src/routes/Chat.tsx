import { Button } from "@radix-ui/themes";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

const Chat = () => {
    const [receiver, setReceiver] = useState("");

    const navigate = useNavigate()
    const { domainName } = useParams()

    return (
        <>
            <div className="chat-container">
                <div className="chat">
                    {typeof domainName === "undefined" ?
                        <div className="message-composer flex items-center">
                            <input
                                onChange={(e) => setReceiver(e.target.value)}
                                type="text"
                                className="message-input w-full mx-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter domain name..." />

                            <Button
                                onClick={() => navigate("/chat/" + receiver)}
                                className="send-button ml- px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
                            >start chat</Button>
                        </div>
                        : null
                    }

                    <div className="chat-history my-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat