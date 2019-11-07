export { DevUtilsContract } from './generated-wrappers/dev_utils';
export {
    DummyERC20TokenEventArgs,
    DummyERC20TokenEvents,
    DummyERC20TokenTransferEventArgs,
    DummyERC20TokenApprovalEventArgs,
    DummyERC20TokenContract,
} from './generated-wrappers/dummy_erc20_token';
export {
    DummyERC721TokenEventArgs,
    DummyERC721TokenEvents,
    DummyERC721TokenTransferEventArgs,
    DummyERC721TokenApprovalEventArgs,
    DummyERC721TokenApprovalForAllEventArgs,
    DummyERC721TokenContract,
} from './generated-wrappers/dummy_erc721_token';
export {
    ERC1155MintableContract,
    ERC1155MintableApprovalForAllEventArgs,
    ERC1155MintableTransferBatchEventArgs,
    ERC1155MintableTransferSingleEventArgs,
    ERC1155MintableURIEventArgs,
} from './generated-wrappers/erc1155_mintable';
export {
    ERC20TokenEventArgs,
    ERC20TokenEvents,
    ERC20TokenTransferEventArgs,
    ERC20TokenApprovalEventArgs,
    ERC20TokenContract,
} from './generated-wrappers/erc20_token';
export {
    ERC721TokenEventArgs,
    ERC721TokenEvents,
    ERC721TokenTransferEventArgs,
    ERC721TokenApprovalEventArgs,
    ERC721TokenApprovalForAllEventArgs,
    ERC721TokenContract,
} from './generated-wrappers/erc721_token';
export {
    ExchangeEventArgs,
    ExchangeEvents,
    ExchangeSignatureValidatorApprovalEventArgs,
    ExchangeFillEventArgs,
    ExchangeCancelEventArgs,
    ExchangeCancelUpToEventArgs,
    ExchangeAssetProxyRegisteredEventArgs,
    ExchangeContract,
    ExchangeProtocolFeeCollectorAddressEventArgs,
    ExchangeProtocolFeeMultiplierEventArgs,
    ExchangeTransactionExecutionEventArgs,
} from './generated-wrappers/exchange';
export { ForwarderContract } from './generated-wrappers/forwarder';
export { IValidatorContract } from './generated-wrappers/i_validator';
export { IWalletContract } from './generated-wrappers/i_wallet';
export { OrderValidatorContract } from './generated-wrappers/order_validator';
export {
    StakingAuthorizedAddressAddedEventArgs,
    StakingAuthorizedAddressRemovedEventArgs,
    StakingContract,
    StakingEpochEndedEventArgs,
    StakingEpochFinalizedEventArgs,
    StakingEventArgs,
    StakingEvents,
    StakingExchangeAddedEventArgs,
    StakingExchangeRemovedEventArgs,
    StakingMakerStakingPoolSetEventArgs,
    StakingMoveStakeEventArgs,
    StakingOperatorShareDecreasedEventArgs,
    StakingOwnershipTransferredEventArgs,
    StakingParamsSetEventArgs,
    StakingRewardsPaidEventArgs,
    StakingStakeEventArgs,
    StakingStakingPoolCreatedEventArgs,
    StakingStakingPoolEarnedRewardsInEpochEventArgs,
    StakingUnstakeEventArgs,
} from './generated-wrappers/staking';
export {
    StakingProxyAuthorizedAddressAddedEventArgs,
    StakingProxyAuthorizedAddressRemovedEventArgs,
    StakingProxyContract,
    StakingProxyEventArgs,
    StakingProxyEvents,
    StakingProxyOwnershipTransferredEventArgs,
    StakingProxyStakingContractAttachedToProxyEventArgs,
    StakingProxyStakingContractDetachedFromProxyEventArgs,
} from './generated-wrappers/staking_proxy';
export {
    WETH9EventArgs,
    WETH9Events,
    WETH9ApprovalEventArgs,
    WETH9TransferEventArgs,
    WETH9DepositEventArgs,
    WETH9WithdrawalEventArgs,
    WETH9Contract,
} from './generated-wrappers/weth9';
export { CoordinatorContract } from './generated-wrappers/coordinator';
export {
    CoordinatorRegistryEventArgs,
    CoordinatorRegistryEvents,
    CoordinatorRegistryCoordinatorEndpointSetEventArgs,
    CoordinatorRegistryContract,
} from './generated-wrappers/coordinator_registry';
export {
    ZrxVaultAuthorizedAddressAddedEventArgs,
    ZrxVaultAuthorizedAddressRemovedEventArgs,
    ZrxVaultContract,
    ZrxVaultDepositEventArgs,
    ZrxVaultEventArgs,
    ZrxVaultEvents,
    ZrxVaultInCatastrophicFailureModeEventArgs,
    ZrxVaultOwnershipTransferredEventArgs,
    ZrxVaultStakingProxySetEventArgs,
    ZrxVaultWithdrawEventArgs,
    ZrxVaultZrxProxySetEventArgs,
} from './generated-wrappers/zrx_vault';

export {
    ERC20BridgeProxyAuthorizedAddressAddedEventArgs,
    ERC20BridgeProxyAuthorizedAddressRemovedEventArgs,
    ERC20BridgeProxyContract,
    ERC20BridgeProxyEventArgs,
    ERC20BridgeProxyEvents,
} from './generated-wrappers/erc20_bridge_proxy';

// Note: No need to export other events as this is a StakingContract with more open constructor args
export { TestStakingContract } from './generated-wrappers/test_staking';

export * from '@0x/contract-addresses';
export {
    ContractEvent,
    SendTransactionOpts,
    AwaitTransactionSuccessOpts,
    ContractFunctionObj,
    ContractTxFunctionObj,
    SubscriptionErrors,
} from '@0x/base-contract';
