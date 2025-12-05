#!/usr/bin/env node

import { Xenova } from '@xenova/sdk';

async function main() {
  const client = new Xenova({ network: 'devnet' });
  console.log('Xenova CLI — connected to', client.options.network);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
