import { toast } from 'react-toastify';
import { Toast } from 'react-bootstrap';
import * as TEXT from 'constant/text';

const timeDelayLoading = 500; // milliseconds
const timeAutoCloseToast = 4000; // milliseconds

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const delayLoading = async () => {
  await delay(timeDelayLoading);
};

export const toastCustom = async (status, values) => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  await toast[status](
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
      autoClose: timeAutoCloseToast,
    },
  );
};
