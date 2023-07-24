import ArrayBufferConverter from "../js/ArrayBufferConverter";

test(('check \"ArrayBufferConverter\"'), () => {
    const converter = new ArrayBufferConverter();
    converter.load();
    const received = converter.toString();
    expect(typeof received).toEqual('string');
})