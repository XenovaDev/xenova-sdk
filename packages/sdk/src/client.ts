import { XenovaOptions } from '@xenova/protocol';
import { TransactionBuilder } from './transaction';

export class Xenova {
  options: XenovaOptions;

  constructor(options: XenovaOptions = {}) {
    this.options = options;
  }

  transaction = {
    transfer: (opts: { from: string; to: string; amount: number }) => {
      // In the real SDK, we'd create a Transaction object for Solana here.
      return new TransactionBuilder({ type: 'transfer', opts });
    }
  };
}

export default Xenova;
