const expect = require('expect');
const {generateMessage} = require('./message');



describe('genreateMessage', () => {
  it('Should generate correct message object', () => {
    let from = "User";
    let text = "test text";
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
