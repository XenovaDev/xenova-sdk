# @xenova/sdk

TypeScript SDK for Xenova — build on Solana with typed transaction builders, job automation, and realtime events.

## Quickstart

```ts
import { Xenova } from '@xenova/sdk';
const client = new Xenova({ network: 'devnet' });

const tx = await client.transaction.transfer({ from: 'FROM_WALLET', to: 'TO_WALLET', amount: 1_000_000 }).send();
```

See the `packages/sdk/src` folder for a minimal example implementation.
