import bcrypt from 'bcryptjs';
import LayoutMainSetting from 'components/layout/Layout-Main-Setting';
import * as TEXT from 'constant/text';
import { delayLoading, toastCustom } from 'helpers/common';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import { setUser } from 'redux/actions/user.action';
import { getUser, updateUser } from 'utils/firebase';
import * as Yup from 'yup';

const LayoutMainSettingContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { _id } = user;

  const initialValues = {
    display_name: user.display_name,
    old_password: '',
    new_password: '',
    renew_password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email(TEXT.INVALID_EMAIL),
    display_name: Yup.string(),
    old_password: Yup.string(),
    new_password: Yup.string().matches(/^[A-Za-z0-9]{6,}$/, TEXT.PASSWORD_NOT_MATCH),
    renew_password: Yup.string(),
  });

  const onSubmit = async (values) => {
    const { old_password, new_password, renew_password, display_name } = values;
    dispatch(showLoadingUi());

    if (old_password && new_password) {
      if (new_password !== renew_password) {
        toastCustom('error', TEXT.PASSWORD_NOT_MATCH_2_FORM);
        return dispatch(hideLoadingUi());
      }

      const userId = await getUser(_id);
      if (!bcrypt.compareSync(old_password, userId.password)) {
        toastCustom('error', TEXT.PASSWORD_VALIDATE_INCORRECT);
        return dispatch(hideLoadingUi());
      }

      const hash = bcrypt.hashSync(new_password, 12);
      await updateUser(_id, { password: hash });
      toastCustom('success', TEXT.PASSWORD_CHANGE_SUCCESS);
    }

    const update = updateUser(_id, { display_name });
    dispatch(setUser(update));
    toastCustom('success', TEXT.UPDATE_DATA_SUCCESS);
    await delayLoading();
    dispatch(hideLoadingUi());
    return null;
  };

  return (
    <LayoutMainSetting
      user={user}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(LayoutMainSettingContainer);
