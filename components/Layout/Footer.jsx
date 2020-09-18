import React from 'react';
import PropTypes from 'prop-types';
import * as TEXT from 'constant/text';

const Footer = (props) => {
  return (
    <div className="expense-footer mt-5 mb-3">
      <div className="text-13 text-center">
        © {props.year} - {TEXT.NAME_WEBSITE}. Version: {props.version}
      </div>
    </div>
  );
};

Footer.propTypes = {
  year: PropTypes.number,
  version: PropTypes.string,
};

Footer.defaultProps = {
  year: 0,
  version: '',
};

export default Footer;
