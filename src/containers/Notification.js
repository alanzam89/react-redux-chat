import Notification from '../components/Notification';
import actionCreator from '../actions/notificationActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isOpen: state['notification']['newMessage'] || false,
    UserName: state['notification']['UserName'],
    Message: state['notification']['Message']
  }
}

export default connect(mapStateToProps, actionCreator)(Notification)
