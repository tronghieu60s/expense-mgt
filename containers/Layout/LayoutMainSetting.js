import bcrypt from 'bcryptjs';
import LayoutMainSetting from 'components/LayoutMainSetting';
import * as TEXT from 'constant/text';
import { delayLoading, toastCustom } from 'helpers/common';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';
import { getUser, updateUser } from 'utils/firebase';

const LayoutMainSettingContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { _id } = user;

  const initialValues = {
    old_password: '',
    new_password: '',
    renew_password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email(TEXT.INVALID_EMAIL),
    old_password: Yup.string(),
    new_password: Yup.string().matches(/^[A-Za-z0-9]{6,}$/, TEXT.PASSWORD_NOT_MATCH),
    renew_password: Yup.string(),
  });

  const onSubmit = async (values) => {
    const { old_password, new_password, renew_password } = values;
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

export default LayoutMainSettingContainer;
