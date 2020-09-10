import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { LOGIN_PAGE } from 'constants/path';
import { Button } from 'react-bootstrap';

const Register = (props) => {
  const { inputValues } = props;

  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group mb-3">
        <div className="input-group input-group-merge input-group-alternative">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            required
            name="user_email"
            value={inputValues.user_email}
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="input-group input-group-merge input-group-alternative">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user" aria-hidden="true" />
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Tên đăng nhập"
            type="text"
            required
            title="Tên đăng nhập có độ dài từ 4-15 kí tự, không bao gồm kí tự đặc biệt, và không bắt đầu bằng một số."
            pattern="[a-z]{1}[a-z0-9_-]{3,15}"
            name="user_login"
            value={inputValues.user_login}
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="input-group input-group-merge input-group-alternative">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-key" aria-hidden="true" />
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Mật khẩu"
            type="password"
            required
            name="user_pass"
            value={inputValues.user_pass}
            onChange={props.onChange}
          />
        </div>
      </div>
      <Button type="submit" variant="primary" className="mb-2" block>
        Đăng ký
      </Button>
      <div className="text-13 mb-3">
        <Link href={LOGIN_PAGE}>
          <a className="weight-600">Đã có tài khoản?</a>
        </Link>
      </div>
      <div className="text-11">
        Khi nhấn nút đăng ký, nghĩa là bạn đã đồng ý với
        <a href="true" className="weight-600 mx-1">
          Điều Khoản Dịch vụ
        </a>
        và
        <a href="true" className="weight-600 mx-1">
          Chính Sách Bảo Mật
        </a>
        của Expense.
      </div>
    </form>
  );
};

Register.propTypes = {
  inputValues: PropTypes.shape({
    user_email: PropTypes.string.isRequired,
    user_login: PropTypes.string.isRequired,
    user_pass: PropTypes.string.isRequired,
  }).isRequired,

  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
