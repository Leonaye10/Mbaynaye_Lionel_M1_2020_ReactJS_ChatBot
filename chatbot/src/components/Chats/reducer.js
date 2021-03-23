import { actionTypes } from './actions';

const initialState = {
  chats: []
};

const sendMessage = (state, action) => ({
  chats: [...state.chats, {
    message: action.message,
    incommingMsg: false,
    sendMsg: true
  }]
});

const receveMessage = (state, action) => ({
  chats: [...state.chats, {
    message: action.message,
    incommingMsg: true,
    sendMsg: false
  }]
});

const chatsList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return sendMessage(state, action);
    case actionTypes.RECEVE_MESSAGE:
      return receveMessage(state, action);
    default:
      return state;
  }
};

export default chatsList;