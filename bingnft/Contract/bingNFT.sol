// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BING is ERC721, Ownable {
    uint256 private _tokenIDCounter;

    struct NFTMetaData {
        string name;                 // Name for your card
        string mainIMG;             //Profile card on the right
        string logo1;               //first badge
        string logo2;               //second badge
        string logo3;               //third badge
        string sentence1;
        string sentence2;
        string sentence3;
    }

    mapping(uint256 => NFTMetaData) private _tokenMetaData;
    mapping(address => string[]) public UserWarnings;
    //admin is the king of this contract.
    constructor(address initialOwner) ERC721("BING", "bingNFT") Ownable(initialOwner) {}


    function Usermint(
        address to,
        string memory name,
        string memory mainIMG,
        string memory logo1,
        string memory logo2,
        string memory logo3,
        string memory sentence1,
        string memory sentence2,
        string memory sentence3
    ) public  {
        require(to==msg.sender);
        require(bytes(sentence1).length == 132, "Invalid length for sentence1");
        require(bytes(sentence2).length == 132, "Invalid length for sentence2");
        require(bytes(sentence3).length == 132, "Invalid length for sentence3");
        uint256 tokenID = _tokenIDCounter++;
        _safeMint(to, tokenID);
        _tokenMetaData[tokenID] = NFTMetaData(name, mainIMG, logo1, logo2, logo3, sentence1, sentence2, sentence3);
    }

    function adminBurn(uint256 id) external onlyOwner{
        _burn(id);
    }

    function warnUser(address user, string memory reason) external onlyOwner{
        UserWarnings[user].push(reason);
    }

    function getMetadata(uint256 tokenId) external view returns (NFTMetaData memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return _tokenMetaData[tokenId];
    }

    function getWarnings(uint256 tokenId) external view returns (string[] memory) {
        address owner = _ownerOf(tokenId);
        require(owner != address(0), "Token does not exist");
        return UserWarnings[owner];
    }

}
