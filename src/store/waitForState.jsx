import createWaitForState from 'redux-wait-for-state';

const { waitForState, setStore } = createWaitForState();

export default waitForState;
export { setStore };
