import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import initializeStore from './reducers';

export default (mapStateToProps, actions) => {
    return (component) => withRedux(initializeStore, mapStateToProps, actions)(component);
}
