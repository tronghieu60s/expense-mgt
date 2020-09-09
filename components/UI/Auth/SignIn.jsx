import { REGISTER_PAGE } from 'constants/path';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SignIn = (props) => {
  const { inputValues, rememberMe } = props;

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
      <div className="custom-control custom-control-alternative custom-checkbox mb-3">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
          checked={rememberMe}
          onChange={props.setRememberMe}
        />
        <label className="custom-control-label" htmlFor=" customCheckLogin">
          <span className="text-muted">Nhớ tôi</span>
        </label>
      </div>
      <Button type="submit" variant="primary" className="mb-2" block>
        Đăng nhập
      </Button>
      <div className="text-13">
        <span className="mr-1">Cần một tài khoản?</span>
        <Link href={REGISTER_PAGE}>
          <a className="weight-600">Đăng ký</a>
        </Link>
      </div>
    </form>
  );
};

SignIn.propTypes = {
  inputValues: PropTypes.shape({
    user_email: PropTypes.string,
    user_pass: PropTypes.string,
  }).isRequired,

  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

  rememberMe: PropTypes.bool.isRequired,
  setRememberMe: PropTypes.func.isRequired,
};

export default SignIn;
