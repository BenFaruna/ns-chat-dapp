import { Link, Outlet } from "react-router-dom";
import { Container, Flex } from "@radix-ui/themes"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    return (
        <>
            <ToastContainer theme="dark" />
            <Container size={{ sm: '3', lg: '4' }}>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://raw.seadn.io/files/7813eab9b3f97ad482b1a7d046305409.png" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Name Service Chat</span>
                        </Link>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <w3m-button />
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/chat" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Chat</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="m-10">
                    <Flex justify={"center"} className="p-5">
                        <Outlet />
                    </Flex>
                </main>
            </Container>
        </>
    );
}