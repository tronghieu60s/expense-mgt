import FormAlternative from 'components/UI/Form/FormAlternative';
import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import { FastField, Form } from 'formik';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <Form>
      <FastField
        name="email"
        component={FormAlternative}
        type="email"
        icon="fa fa-envelope"
        placeholder={TEXT.FORM_EMAIL}
      />
      <FastField
        name="username"
        component={FormAlternative}
        type="text"
        icon="fa fa-user"
        placeholder={TEXT.FORM_USERNAME}
      />
      <FastField
        name="password"
        component={FormAlternative}
        type="password"
        icon="fa fa-key"
        placeholder={TEXT.FORM_PASSWORD}
      />
      <Button type="submit" variant="primary" className="mb-2 mt-3" block>
        {TEXT.REGISTER_TITLE}
      </Button>
      <div className="text-13 mb-3">
        <Link href={PATH.LOGIN_PAGE}>
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
    </Form>
  );
};

export default SignUp;
