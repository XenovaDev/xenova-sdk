export type Network = 'mainnet-beta' | 'devnet' | 'testnet';

export interface RetryOptions {
  attempts?: number;
  backoffMs?: number;
}

export interface XenovaOptions {
  network?: Network;
  rpc?: string;
  retry?: RetryOptions;
}
