'use client';
import WalletIcon from "../../public/WalletIcon.tsx"
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import {Button} from "../../public/button.tsx"
import Link from "next/link";
import {useSDK, MetaMaskProvider} from "@metamask/sdk-react";
import {formatAddress} from "../lib/utils.ts";
import {Popover, PopoverTrigger, PopoverContent} from "../../public/popover.tsx"

/**
 * Wrapper to connect to the wallet use metamask sdk
 *        Display connect wallet button when not connected
 *        When Connected, show address
 *        Click again to disconnect
 */
export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      )}
    </div>
  );
};

/***
 * TODO: Implement "ADMIN, ORGANIZER, USER" status
 * Nav bar on top.
 * Should display the logo clearly
 * 
 * 
 * 
 */
export const NavBar = () => {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

  return (
    /*flex items-center justify-items-end max-w-screen-xl px-6 mx-auto py-7 rounded-xl*/
    <nav className="grid">
      <div className="justify-self-end">
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton />
        </MetaMaskProvider>
      </div>
    </nav>
  );
};

export default NavBar;