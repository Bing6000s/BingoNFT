//Contract for bingNFT
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
*       ERC721 contract bingNFT is a contract that let's admin to declare the ownership. Users can
*       define their username NAME, web image url MAINIMG, quote 1 SENTENCE1 and quote 2 SENTENCE2
*       in this contract.
*/

contract BING is ERC721, Ownable {
    uint256 private _tokenIDCounter;

    struct NFTMetaData {
        string name;
        string mainIMG;
        string quote1;
        string quote2;
    }


    //NFTMETADATA are mapped to index TOKEN
    mapping(uint256 => NFTMetaData) private _tokenMetaData;
    //USERWARNING are mapped to wallet address
    mapping(address => string[]) public UserWarnings;

    //OWNER of this contract are admin, so is declared once contract are signed to wallet address
    constructor(address initialOwner) ERC721("BING", "bingNFT") Ownable(initialOwner) {}

    //Alternate version of Minting, with checks to see if the quote are too long. Assign _tokenMetaData after.
    function Usermint(
        address to,
        string memory name,
        string memory mainIMG,
        string memory quote1,
        string memory quote2
    ) public payable {
        require(msg.value > 0 ether, "Insufficient payment. Minimum payment is 0.");
                require(bytes(name).length < 30, "Invalid name length");
        require(bytes(quote1).length < 100, "Invalid length for quote1");
        require(bytes(quote2).length < 100, "Invalid length for quote2");

        uint256 tokenID = _tokenIDCounter++;
        _safeMint(to, tokenID);
        _tokenMetaData[tokenID] = NFTMetaData(name, mainIMG, quote1, quote2);
    }

    //admin can delete the card by token
    function adminBurn(uint256 tokenId) external onlyOwner {
        _burn(tokenId);
        delete _tokenMetaData[tokenId];
    }
   
    //admin can warn the user for inappropirate stuff by sending a message
    function warnUser(address user, string memory reason) external onlyOwner {
        UserWarnings[user].push(reason);
    }

    //returns data from UserMint
    function getMetadata(uint256 tokenId) public view returns (NFTMetaData memory) {
        require(_exists(tokenId), "Token does not exist");
        return _tokenMetaData[tokenId];
    }

    //returns warning if there are warnings to a wallet address
    function getWarnings(address user) external view returns (string[] memory) {
        return UserWarnings[user];
    }
       
        //Etherium Remix does not have this function.
       function _exists(uint256 tokenId) internal view returns (bool) {
            return _ownerOf(tokenId) != address(0);
     }
}
