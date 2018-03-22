
export default (state = {}, action) => {
  switch (action.type) {
    case 'REPLY_NOTIFICATION':
    case 'SELECT_CHAT': {
      return Object.assign({}, state, {'currentChat' : action.userName });
    }
    case 'ADD_USER': {
      var newObj = {};
      newObj[action.userName] = {userName: action.userName, messageList: []};
      return Object.assign({}, state, newObj);
    }
    case 'ADD_MESSAGE': {
      const currentChat = state['currentChat'];
      const msgList = state[currentChat]['messageList'];
      var newObj = {};
      newObj[currentChat] = {userName: currentChat, messageList: [...msgList, action.msg]};
      return Object.assign({}, state, newObj);
    }
    default:
      return state;
  }
};
