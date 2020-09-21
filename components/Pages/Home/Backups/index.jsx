import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import * as TEXT from 'constant/text';

const Backups = (props) => {
  return (
    <div className="px-3 mt-3">
      <div className="mb-3">
        <div className="mb-0 text-10 weight-800 text-uppercase mb-2">{TEXT.EXPORT_DATA}</div>
        <div className="d-flex justify-content-center mb-2">
          <Button className="text-capitalize" variant="success" size="sm">
            {TEXT.EXPORT} {TEXT.FILE_EXCEL}
          </Button>
          <Button className="text-capitalize" variant="primary" size="sm">
            {TEXT.EXPORT} {TEXT.FILE_JSON}
          </Button>
        </div>
      </div>

      <div>
        <div className="mb-0 text-10 weight-800 text-uppercase mb-2">{TEXT.IMPORT_DATA}</div>
        <div className="d-flex justify-content-center mb-2">
          <Button className="text-capitalize" variant="success" size="sm">
            {TEXT.IMPORT} {TEXT.FILE_EXCEL}
          </Button>
          <Button className="text-capitalize" variant="primary" size="sm">
            {TEXT.IMPORT} {TEXT.FILE_JSON}
          </Button>
        </div>
      </div>
    </div>
  );
};

Backups.propTypes = {};

export default Backups;
