import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

var useActions = function useActions(actions) {
  var dispatch = useDispatch();
  return useMemo(function () {
    if (Array.isArray(actions)) {
      return actions.map(function (a) {
        return bindActionCreators(a, dispatch);
      });
    }

    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
};

export default useActions;