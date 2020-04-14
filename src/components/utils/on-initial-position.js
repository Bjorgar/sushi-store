import { initialPosition } from '../../actions';
import store from '../../store';

const onInitialPosition = (e) => {
  const x = e.pageX;
  const y = e.pageY;
  store.dispatch(initialPosition(x, y));
};

export default onInitialPosition;
