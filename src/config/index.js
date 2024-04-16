import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
    name: 'cheasyswap',
    description: 'Web3Modal Example',
    url: 'https://ico.cheasy.finance/',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [bsc, bscTestnet]
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    }),
})