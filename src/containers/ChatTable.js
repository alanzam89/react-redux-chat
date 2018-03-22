import ChatTable from '../components/ChatTable';
import chatActions from '../actions/chatActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  const currentChat = state['chats']['currentChat'];
  return {
    userName : currentChat,
    userList: state['userList'],
    messageList : state['chats'][currentChat] ?
            state['chats'][currentChat]['messageList'] : []
  }
}

export default connect(mapStateToProps, chatActions)(ChatTable);
