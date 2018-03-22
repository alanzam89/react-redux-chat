import NavBar from '../components/NavBar';
import userListActions from '../actions/userListActions';
import chatActions from '../actions/chatActions';
import { connect } from 'react-redux';

const allActions = Object.assign({}, chatActions, userListActions);
function mapStateToProps(state, ownProps) {
  const currentChat = state['chats']['currentChat'];
  return {
    currentChat
  }
}
export default connect(mapStateToProps, allActions)(NavBar);
