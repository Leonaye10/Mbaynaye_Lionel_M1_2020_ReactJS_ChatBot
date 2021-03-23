export const actionTypes = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  RECEVE_MESSAGE: 'RECEVE_MESSAGE'
};

export const sendMessage = (message) => ({
  type: actionTypes.SEND_MESSAGE,
  message
});

export const receveMessage = (message) => ({
  type: actionTypes.RECEVE_MESSAGE,
  message
});