# GPT3 Tokenizer

This is a TypeScript tokenizer for OpenAI's GPT-3 model. Including support for `gpt3` and `codex` tokenization.

Currently it works in NodeJS, but since the support for browser is also transparent, it should be easy to port it to browser.

## Usage

First, install:

```shell
yarn add gpt3-tokenizer
```

In code:

```typescript
import { GPT3Tokenizer } from 'gpt3-tokenizer';

const tokenizer = new GPT3Tokenizer({ type: 'gpt3' }); // or 'codex'
const str = "hello 👋 world 🌍";
const encoded: { bpe: number[]; text: string[] } = tokenizer.encode(str);
const decoded = tokenizer.decode(encoded.bpe);
```

## Reference

This library is based on the following:
- [OpenAI Tokenizer Page Source](https://beta.openai.com/tokenizer?view=bpe)
- [gpt-3-encoder](https://github.com/latitudegames/GPT-3-Encoder)

The main difference between this library and gpt-3-encoder is that this library supports both `gpt3` and `codex` tokenization (The dictionary is taken directly from OpenAI so the tokenization result is on par with the OpenAI Playground). Also Map API is used instead of JavaScript objects, especially the `bpeRanks` object, which should see some performance improvement.

## License

[MIT](./LICENSE)