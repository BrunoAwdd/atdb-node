export const uDonate_address = "0x77E8B2c491F0FE9CfCaF3f1567d8ee5214D9EA32";
export const uDonate_abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
        signature: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
        signature:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            { indexed: false, internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "ApprovalForAll",
        type: "event",
        signature:
            "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "code", type: "string" },
                    { internalType: "uint256", name: "value", type: "uint256" },
                    { internalType: "string", name: "currency", type: "string" },
                    { internalType: "address", name: "bankCustody", type: "address" },
                    { internalType: "string", name: "bankClient", type: "string" },
                    { internalType: "string", name: "bankClientName", type: "string" },
                    {
                        internalType: "string",
                        name: "bankClientDocument",
                        type: "string",
                    },
                    { internalType: "string", name: "description", type: "string" },
                    { internalType: "string", name: "additionalInfo", type: "string" },
                    { internalType: "string", name: "securityHouse", type: "string" },
                    { internalType: "uint256", name: "createdAt", type: "uint256" },
                    { internalType: "string", name: "callbackUrl", type: "string" },
                ],
                indexed: false,
                internalType: "struct AssetContract.Asset",
                name: "asset",
                type: "tuple",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            { indexed: false, internalType: "string", name: "code", type: "string" },
        ],
        name: "AttachInfo",
        type: "event",
        signature:
            "0xbcf175fafdc2c700b6f34b77059a62413286eabf1656c4ab623e5a2f4e6caecd",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
        signature:
            "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Paused",
        type: "event",
        signature:
            "0xab40a374bc51de372200a8bc981af8c9ecdc08dfdaef0bb6e09f88f3c616ef3d",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "transferId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: true, internalType: "address", name: "from", type: "address" },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "PreTransfer",
        type: "event",
        signature:
            "0xc8e6ef66ce10cacf32400f44bfceeeecc77f5304b0a39c228aa9893a2e150964",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "transferId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum Transferable.TransactionStatus",
                name: "status",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "TokenTransfer",
        type: "event",
        signature:
            "0x0bcd36fe567224044f1e6a450eedae206cf838791cc56d2e3370e3cdc7d6d46c",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
        signature:
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Unpaused",
        type: "event",
        signature:
            "0x3582d1828e26bf56bd801502bc021ac0bc8afb57c826e4986b45593c8fad389c",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            { indexed: false, internalType: "string", name: "name", type: "string" },
            {
                indexed: false,
                internalType: "string",
                name: "residence",
                type: "string",
            },
        ],
        name: "User",
        type: "event",
        signature:
            "0x37b8e11615f93e97e61704adcedb9e0b0232a177b63748223b9b99c4deb6389b",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "permission",
                type: "uint256",
            },
        ],
        name: "Whitelist",
        type: "event",
        signature:
            "0xe5e953a2dfe5b1a867f51157f6bb90557e35a5f01a7345b4de54c62a470e0afb",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            { indexed: false, internalType: "string", name: "date", type: "string" },
            { indexed: false, internalType: "string", name: "note", type: "string" },
        ],
        name: "addHistory",
        type: "event",
        signature:
            "0x6cb8093df5b93867d2629eb7a573d80835e0a18e8408fef1cee696cb7e683ffe",
    },
    {
        inputs: [{ internalType: "uint256", name: "transferId", type: "uint256" }],
        name: "acceptTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x274fae7c",
    },
    {
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x095ea7b3",
    },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x70a08231",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x42966c68",
    },
    {
        inputs: [{ internalType: "uint256", name: "transferId", type: "uint256" }],
        name: "cancelIfExpired",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x63041c20",
    },
    {
        inputs: [
            { internalType: "address", name: "account", type: "address" },
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "residence", type: "string" },
                ],
                internalType: "struct NbmUser.UserStruct",
                name: "user",
                type: "tuple",
            },
        ],
        name: "createUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xbe1d4e25",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getApproved",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x081812fc",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getAsset",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "code", type: "string" },
                    { internalType: "uint256", name: "value", type: "uint256" },
                    { internalType: "string", name: "currency", type: "string" },
                    { internalType: "address", name: "bankCustody", type: "address" },
                    { internalType: "string", name: "bankClient", type: "string" },
                    { internalType: "string", name: "bankClientName", type: "string" },
                    {
                        internalType: "string",
                        name: "bankClientDocument",
                        type: "string",
                    },
                    { internalType: "string", name: "description", type: "string" },
                    { internalType: "string", name: "additionalInfo", type: "string" },
                    { internalType: "string", name: "securityHouse", type: "string" },
                    { internalType: "uint256", name: "createdAt", type: "uint256" },
                    { internalType: "string", name: "callbackUrl", type: "string" },
                ],
                internalType: "struct AssetContract.Asset",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xeac8f5b8",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getHistory",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "date", type: "string" },
                    { internalType: "string", name: "note", type: "string" },
                ],
                internalType: "struct NbmHistory.History[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xc8691b2a",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getTokenOwners",
        outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x681ece9d",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "getUser",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "residence", type: "string" },
                ],
                internalType: "struct NbmUser.UserStruct",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x6f77926b",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address", name: "account", type: "address" },
        ],
        name: "getWhitelist",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xc47c9f3c",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xe985e9c5",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address", name: "account", type: "address" },
        ],
        name: "isTokenOwner",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xd59f2827",
    },
    {
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "code", type: "string" },
                    { internalType: "uint256", name: "value", type: "uint256" },
                    { internalType: "string", name: "currency", type: "string" },
                    { internalType: "address", name: "bankCustody", type: "address" },
                    { internalType: "string", name: "bankClient", type: "string" },
                    { internalType: "string", name: "bankClientName", type: "string" },
                    {
                        internalType: "string",
                        name: "bankClientDocument",
                        type: "string",
                    },
                    { internalType: "string", name: "description", type: "string" },
                    { internalType: "string", name: "additionalInfo", type: "string" },
                    { internalType: "string", name: "securityHouse", type: "string" },
                    { internalType: "uint256", name: "createdAt", type: "uint256" },
                    { internalType: "string", name: "callbackUrl", type: "string" },
                ],
                internalType: "struct AssetContract.Asset",
                name: "asset",
                type: "tuple",
            },
        ],
        name: "mintAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x77916173",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x06fdde03",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x8da5cb5b",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "ownerOf",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x6352211e",
    },
    {
        inputs: [{ internalType: "uint256", name: "transferId", type: "uint256" }],
        name: "paused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x00dde10e",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "string", name: "message", type: "string" },
            { internalType: "uint256", name: "finalDate", type: "uint256" },
            { internalType: "uint256", name: "rollbackDate", type: "uint256" },
            { internalType: "string", name: "code", type: "string" },
        ],
        name: "prepareTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x617d0b9e",
    },
    {
        inputs: [
            { internalType: "uint256", name: "transferId", type: "uint256" },
            { internalType: "string", name: "message", type: "string" },
        ],
        name: "rejectTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x6b43c9e4",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x715018a6",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x42842e0e",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xb88d4fde",
    },
    {
        inputs: [{ internalType: "uint256", name: "transferId", type: "uint256" }],
        name: "sendTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xd1c68d1e",
    },
    {
        inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xa22cb465",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            {
                components: [
                    { internalType: "string", name: "date", type: "string" },
                    { internalType: "string", name: "note", type: "string" },
                ],
                internalType: "struct NbmHistory.History",
                name: "historyItem",
                type: "tuple",
            },
        ],
        name: "setHistory",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x48181289",
    },
    {
        inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "permission", type: "uint256" },
        ],
        name: "setWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xfa264717",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x95d89b41",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenTransfers",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x36dc60fe",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0xc87b56dd",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0x23b872dd",
    },
    {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        signature: "0xf2fde38b",
    },
    {
        inputs: [{ internalType: "uint256", name: "transferId", type: "uint256" }],
        name: "transferStatus",
        outputs: [
            {
                components: [
                    { internalType: "address", name: "from", type: "address" },
                    { internalType: "address", name: "to", type: "address" },
                    { internalType: "address", name: "sender", type: "address" },
                    { internalType: "string", name: "code", type: "string" },
                    { internalType: "uint256", name: "tokenId", type: "uint256" },
                    { internalType: "string", name: "message", type: "string" },
                    { internalType: "bool", name: "toAccept", type: "bool" },
                    { internalType: "bool", name: "fromAccept", type: "bool" },
                    { internalType: "uint256", name: "finalDate", type: "uint256" },
                    {
                        internalType: "uint256",
                        name: "transferRollbackDate",
                        type: "uint256",
                    },
                    { internalType: "address", name: "rejectedBy", type: "address" },
                    {
                        internalType: "enum Transferable.TransactionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                internalType: "struct Transferable.TransferStruct",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x927e9742",
    },
    {
        inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
        constant: true,
        signature: "0x01ffc9a7",
    },
];
