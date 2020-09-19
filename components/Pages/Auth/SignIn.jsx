import FormAlternative from 'components/UI/Form/FormAlternative';
import FormCheckAlternative from 'components/UI/Form/FormCheckAlternative';
import * as PATH from 'constant/path';
import * as TEXT from 'constant/text';
import { FastField, Form } from 'formik';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const SignIn = () => {
  return (
    <Form>
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
      <FastField name="remember" component={FormCheckAlternative} text={TEXT.FORM_REMEMBER_ME} />
      <Button type="submit" variant="primary" className="mb-2 mt-3" block>
        {TEXT.LOGIN_TITLE}
      </Button>
      <div className="text-13">
        <span className="mr-1">{TEXT.NEED_A_ACCOUNT}</span>
        <Link href={PATH.REGISTER_PAGE}>
          <a className="weight-600">{TEXT.REGISTER_TITLE}</a>
        </Link>
      </div>
    </Form>
  );
};

export default SignIn;
