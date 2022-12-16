import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators({ ...actions }, dispatch);
}
