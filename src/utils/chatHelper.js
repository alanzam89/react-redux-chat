import randomstring from 'randomstring';

export function generateNewUser() {
  const id = Math.floor(Math.random() * 100);
  const generatedUserName = `User_${id}`;
  return generatedUserName;
}

export function generateNewChat() {
  const id = Math.floor(Math.random() * 100);
  const generatedUserName = `User_${id}`;
  const message = randomstring.generate();
  const chatMessage = {
    userName: generatedUserName,
    message: message
  };
  return chatMessage;
}


export function generateResponse(userName) {
  const message = randomstring.generate();
  const chatMessage = {
    userName: userName,
    message: message
  };
  return chatMessage;
}
