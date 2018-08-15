export const state = () => (
  [
    {
      id: 1,
      content: 'nice to meet you',
      loaded: true,
      sender: 'bot',
    },
    {
      id: 2,
      content: 'my name is TAKESHITAROU',
      loaded: true,
      sender: 'bot',
    },
    {
      id: 3,
      content: 'where from?',
      loaded: true,
      sender: 'bot',
    },
  ]
);

export const mutations = {
  add(state, message) { state.push(message) },

  setLoaded(state, messageId) {
    const index = state.findIndex(m => m.id === messageId);
    const message = state[index];
    if (message) message.loaded = true;
  },
};
