import { address as alephzeroTestnetAddress } from '@inkathon/contracts/deployments/greeter/alephzero-testnet'
import { alephzeroTestnet, SubstrateDeployment } from '@scio-labs/use-inkathon'
// TODO
// import { address as developmentAddress } from '@inkathon/contracts/deployments/greeter/development'
// import { development } from '@scio-labs/use-inkathon'

export enum ContractIds {
  greeter = 'greeter',
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  return [
    {
      contractId: ContractIds.greeter,
      networkId: alephzeroTestnet.network,
      abi: await import(`@inkathon/contracts/deployments/greeter/metadata.json`),
      address: alephzeroTestnetAddress,
    },
    // TODO
    // {
    //   contractId: ContractIds.greeter,
    //   networkId: development.network,
    //   abi: await import(`@inkathon/contracts/deployments/greeter/metadata.json`),
    //   address: developmentAddress,
    // },
  ]
}
