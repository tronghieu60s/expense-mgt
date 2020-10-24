import React from 'react';
import * as TEXT from 'src/constant/text';

interface Props {
  year: number;
  version: string;
}

const Footer: React.FC<Props> = (props) => {
  const { year, version } = props;

  return (
    <div className="expense-footer mt-5 mb-3">
      <div className="text-13 text-center">
        © {year} - {TEXT.NAME_WEBSITE}. Version: {version}
      </div>
    </div>
  );
};

export default Footer;
