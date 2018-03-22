import { generateResponse } from '../utils/chatHelper';

export default
{
  selectChat: (userName) => {
    return {
      type: 'SELECT_CHAT',
      userName
    }
  },
  createResponse: (currentChat) => {
    return {
        type: 'ADD_MESSAGE',
        msg: generateResponse(currentChat)
      };
  },
  sendChat: (msg) => {
    return {
      type: 'ADD_MESSAGE',
      msg: msg
    }
  }
};
