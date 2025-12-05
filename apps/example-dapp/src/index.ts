import { Xenova } from '@xenova/sdk';

async function main() {
  const client = new Xenova({ network: 'devnet' });
  console.log('Example dApp — client created for', client.options.network);

  const tx = await client.transaction.transfer({ from: 'A', to: 'B', amount: 1000 }).send();
  console.log('Mock send result:', tx);
}

main().catch(console.error);
