const initialState = [
  {
    id: '0',
    question: 'hi',
    reponse: 'Bonjour',
  },
  {
    id: '1',
    question: 'heure',
    reponse: `${new Date().toLocaleTimeString()}`,
  },
  {
    id: '2',
    question: 'meteo',
    reponse: 'Paris 20 degré',
  }
];

const data = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default data;