export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE' :{
      return {
        'newMessage' : true,
        'UserName' : action.msg.userName,
        'Message' : action.msg.message
      };
    }
    case 'REPLY_NOTIFICATION' :
    case 'CLOSE_NOTIFICATION' :
      return {};
    default:
      return state;
  }
};
