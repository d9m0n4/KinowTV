import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as rootActions from '../store/actions';

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators({...rootActions}, dispatch);
}
