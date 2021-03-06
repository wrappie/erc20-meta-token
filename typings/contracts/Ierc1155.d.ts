/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Ierc1155Interface extends ethers.utils.Interface {
  functions: {
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, (BigNumberish)[], (BigNumberish)[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [(string)[], (BigNumberish)[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class Ierc1155 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Ierc1155Interface;

  functions: {
    /**
     * MUST emit TransferSingle event on success Caller must be approved to manage the _from account's tokens (see isApprovedForAll) MUST throw if `_to` is the zero address MUST throw if balance of sender for token `_id` is lower than the `_amount` sent MUST throw on any other error When transfer is complete, this function MUST check if `_to` is a smart contract (code size > 0). If so, it MUST call `onERC1155Received` on `_to` and revert if the return amount is not `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
     * Transfers amount of an _id from the _from address to the _to address specified
     * @param _amount Transfered amount
     * @param _data Additional data with no specified format, sent in call to `_to`
     * @param _from Source address
     * @param _id ID of the token type
     * @param _to Target address
     */
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * MUST emit TransferBatch event on success Caller must be approved to manage the _from account's tokens (see isApprovedForAll) MUST throw if `_to` is the zero address MUST throw if length of `_ids` is not the same as length of `_amounts` MUST throw if any of the balance of sender for token `_ids` is lower than the respective `_amounts` sent MUST throw on any other error When transfer is complete, this function MUST check if `_to` is a smart contract (code size > 0). If so, it MUST call `onERC1155BatchReceived` on `_to` and revert if the return amount is not `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` Transfers and events MUST occur in the array order they were submitted (_ids[0] before _ids[1], etc)
     * Send multiple types of Tokens from the _from address to the _to address (with safety call)
     * @param _amounts Transfer amounts per token type
     * @param _data Additional data with no specified format, sent in call to `_to`
     * @param _from Source addresses
     * @param _ids IDs of each token type
     * @param _to Target addresses
     */
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Get the balance of an account's Tokens
     * @param _id ID of the Token
     * @param _owner The address of the token holder
     */
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Get the balance of multiple account/token pairs
     * @param _ids ID of the Tokens
     * @param _owners The addresses of the token holders
     */
    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[],
      overrides?: CallOverrides
    ): Promise<{
      0: (BigNumber)[];
    }>;

    /**
     * MUST emit the ApprovalForAll event on success
     * Enable or disable approval for a third party ("operator") to manage all of caller's tokens
     * @param _approved True if the operator is approved, false to revoke approval
     * @param _operator Address to add to the set of authorized operators
     */
    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Queries the approval status of an operator for a given owner
     * @param _operator Address of authorized operator
     * @param _owner The owner of the Tokens
     */
    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<{
      isOperator: boolean;
      0: boolean;
    }>;
  };

  /**
   * MUST emit TransferSingle event on success Caller must be approved to manage the _from account's tokens (see isApprovedForAll) MUST throw if `_to` is the zero address MUST throw if balance of sender for token `_id` is lower than the `_amount` sent MUST throw on any other error When transfer is complete, this function MUST check if `_to` is a smart contract (code size > 0). If so, it MUST call `onERC1155Received` on `_to` and revert if the return amount is not `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
   * Transfers amount of an _id from the _from address to the _to address specified
   * @param _amount Transfered amount
   * @param _data Additional data with no specified format, sent in call to `_to`
   * @param _from Source address
   * @param _id ID of the token type
   * @param _to Target address
   */
  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * MUST emit TransferBatch event on success Caller must be approved to manage the _from account's tokens (see isApprovedForAll) MUST throw if `_to` is the zero address MUST throw if length of `_ids` is not the same as length of `_amounts` MUST throw if any of the balance of sender for token `_ids` is lower than the respective `_amounts` sent MUST throw on any other error When transfer is complete, this function MUST check if `_to` is a smart contract (code size > 0). If so, it MUST call `onERC1155BatchReceived` on `_to` and revert if the return amount is not `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` Transfers and events MUST occur in the array order they were submitted (_ids[0] before _ids[1], etc)
   * Send multiple types of Tokens from the _from address to the _to address (with safety call)
   * @param _amounts Transfer amounts per token type
   * @param _data Additional data with no specified format, sent in call to `_to`
   * @param _from Source addresses
   * @param _ids IDs of each token type
   * @param _to Target addresses
   */
  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: (BigNumberish)[],
    _amounts: (BigNumberish)[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Get the balance of an account's Tokens
   * @param _id ID of the Token
   * @param _owner The address of the token holder
   */
  balanceOf(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Get the balance of multiple account/token pairs
   * @param _ids ID of the Tokens
   * @param _owners The addresses of the token holders
   */
  balanceOfBatch(
    _owners: (string)[],
    _ids: (BigNumberish)[],
    overrides?: CallOverrides
  ): Promise<(BigNumber)[]>;

  /**
   * MUST emit the ApprovalForAll event on success
   * Enable or disable approval for a third party ("operator") to manage all of caller's tokens
   * @param _approved True if the operator is approved, false to revoke approval
   * @param _operator Address to add to the set of authorized operators
   */
  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Queries the approval status of an operator for a given owner
   * @param _operator Address of authorized operator
   * @param _owner The owner of the Tokens
   */
  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  staticCall: {
    /**
     * MUST emit TransferSingle event on success Caller must be approved to manage the _from account's tokens (see isApprovedForAll) MUST throw if `_to` is the zero address MUST throw if balance of sender for token `_id` is lower than the `_amount` sent MUST throw on any other error When transfer is complete, this function MUST check if `_to` is a smart contract (code size > 0). If so, it MUST call `onERC1155Received` on `_to` and revert if the return amount is not `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
     * Transfers amount of an _id from the _from address to the _to address specified
     * @param _amount Transfered amount
     * @param _data Additional data with no specified format, sent in call to `_to`
     * @param _from Source address
     * @param _id ID of the token type
     * @param _to Target address
     */
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * MUST emit TransferBatch event on success Caller must be approved to manage the _from account's tokens (see isApprovedForAll) MUST throw if `_to` is the zero address MUST throw if length of `_ids` is not the same as length of `_amounts` MUST throw if any of the balance of sender for token `_ids` is lower than the respective `_amounts` sent MUST throw on any other error When transfer is complete, this function MUST check if `_to` is a smart contract (code size > 0). If so, it MUST call `onERC1155BatchReceived` on `_to` and revert if the return amount is not `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` Transfers and events MUST occur in the array order they were submitted (_ids[0] before _ids[1], etc)
     * Send multiple types of Tokens from the _from address to the _to address (with safety call)
     * @param _amounts Transfer amounts per token type
     * @param _data Additional data with no specified format, sent in call to `_to`
     * @param _from Source addresses
     * @param _ids IDs of each token type
     * @param _to Target addresses
     */
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * Get the balance of an account's Tokens
     * @param _id ID of the Token
     * @param _owner The address of the token holder
     */
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the balance of multiple account/token pairs
     * @param _ids ID of the Tokens
     * @param _owners The addresses of the token holders
     */
    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[],
      overrides?: CallOverrides
    ): Promise<(BigNumber)[]>;

    /**
     * MUST emit the ApprovalForAll event on success
     * Enable or disable approval for a third party ("operator") to manage all of caller's tokens
     * @param _approved True if the operator is approved, false to revoke approval
     * @param _operator Address to add to the set of authorized operators
     */
    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * Queries the approval status of an operator for a given owner
     * @param _operator Address of authorized operator
     * @param _owner The owner of the Tokens
     */
    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_amount: null, _id: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike
    ): Promise<BigNumber>;
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;
    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<BigNumber>;
    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;
    isApprovedForAll(_owner: string, _operator: string): Promise<BigNumber>;
  };

  populateTransaction: {
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    balanceOf(_owner: string, _id: BigNumberish): Promise<PopulatedTransaction>;
    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<PopulatedTransaction>;
    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<PopulatedTransaction>;
    isApprovedForAll(
      _owner: string,
      _operator: string
    ): Promise<PopulatedTransaction>;
  };
}
