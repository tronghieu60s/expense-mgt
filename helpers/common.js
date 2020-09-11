import { toast } from 'react-toastify';
import { Toast } from 'react-bootstrap';
import * as TEXT from 'constant/text';

const autoClose = 4000;

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const toastCustom = (status, values) => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  toast[status](
    () => {
      return (
        <Toast>
          <Toast.Header>
            <strong className="mr-auto">{TEXT.NAME_WEBSITE}</strong>
            <small>{currentTime}</small>
          </Toast.Header>
          <Toast.Body>{values}</Toast.Body>
        </Toast>
      );
    },
    {
      autoClose,
    },
  );
};
