export type SendResult = { signature: string };

export class TransactionBuilder {
  private _action: any;

  constructor(action: any) {
    this._action = action;
  }

  // placeholder for serialization / signing flow
  async send(): Promise<SendResult> {
    // In a real implementation, this would build a Solana Transaction,
    // request a signer, sign and send via RPC, then confirm.
    return new Promise((resolve) => {
      setTimeout(() => resolve({ signature: 'mock-signature-0x123' }), 200);
    });
  }
}
