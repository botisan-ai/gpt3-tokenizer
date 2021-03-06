import TextEncoder from './text-encoder';
import TextDecoder from './text-decoder';
import GPT3Tokenizer from './tokenizer';

export default class GPT3BrowserTokenizer extends GPT3Tokenizer {
  private textEncoder: TextEncoder;
  private textDecoder: TextDecoder;

  constructor(options: { type: 'gpt3' | 'codex' }) {
    super(options);

    this.textEncoder = new TextEncoder();
    this.textDecoder = new TextDecoder();
  }

  encodeUtf8(text: string): Uint8Array {
    return this.textEncoder.encode(text);
  }

  decodeUtf8(bytes: Uint8Array): string {
    return this.textDecoder.decode(bytes);
  }
}
