import { generateNewUser } from '../utils/chatHelper'

export default
{
  addUser: () => {
    const userName = generateNewUser();
    return {
        type: 'ADD_USER',
        userName
      };
  }
};
