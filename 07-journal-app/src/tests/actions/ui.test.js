import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Tests on ui-actions', () => {
  test('Shoud return the type uiSetError and err payload properly', () => {

    const err = "HELP!";

    const setErrorAction = setError(err);

    expect(setErrorAction).toEqual({
      type: types.uiSetError,
      payload: err
    });

  });

  test('Shoud return the type properly uiRemoveError', () => {

    const removeErrorAction = removeError();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });

  });

  test('Shoud return the type properly startLoading', () => {

    const startLoadingAction = startLoading();

    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });

  });

  test('Shoud return the type properly uiFinishLoading', () => {

    const finishLoadingAction = finishLoading();

    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });

  });
});
