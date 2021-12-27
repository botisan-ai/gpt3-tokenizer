import GPT3Tokenizer from '../src';


describe('gpt3 tokenizer test', () => {
  it('works with empty string', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
    const str = "";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });

  it('works with a single space', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
    const str = " ";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([220]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });

  it('works with a single tab', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
    const str = "\t";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([197]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });

  it('works with some simple text', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
    const str = "This is some text";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([1212, 318, 617, 2420]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });

  it('works with multi-token word', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
    const str = "indivisible";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([521, 452, 12843]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });

  it('works with emojis', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
    const str = "hello 👋 world 🌍";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([31373, 50169, 233, 995, 12520, 234, 235]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });

  it('works with code using codex', () => {
    const tokenizer = new GPT3Tokenizer({ type: 'codex' });
    const str = "def main():\n    print('hello world')";
    const encoded = tokenizer.encode(str);
    expect(encoded.bpe).toEqual([4299, 1388, 33529, 198, 50258, 3601, 10786, 31373, 995, 11537]);
    expect(tokenizer.decode(encoded.bpe)).toEqual(str);
  });
});
