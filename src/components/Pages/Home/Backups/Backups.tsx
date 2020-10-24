import FormAlternative from 'src/components/UI/Form/FormAlternative';
import * as TEXT from 'src/constant/text';
import { FastField, Form, Formik } from 'formik';
import { getDateNow } from 'src/helpers/datetime';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

interface Props {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  nameFile: string;
  csvHeaders: any;
  csvData: any;
  resetCsvData: any;
}

const Backups: React.FC<Props> = (props) => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    nameFile,
    csvData,
    csvHeaders,
    resetCsvData,
  } = props;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="px-3 mt-3">
          <div className="mb-3">
            <div className="mb-0 text-10 weight-800 text-uppercase text-success mb-2">
              {TEXT.EXPORT_DATA}
            </div>
            <FastField
              name="name"
              component={FormAlternative}
              type="text"
              placeholder={TEXT.NAME_FILE}
            />
            <Row className="mb-2">
              <Col xs={6} lg={12}>
                <FastField
                  name="from"
                  component={FormAlternative}
                  type="date"
                  placeholder={TEXT.FILTER_BY_FROM_DATE}
                />
              </Col>
              <Col xs={6} lg={12}>
                <FastField
                  name="to"
                  component={FormAlternative}
                  type="date"
                  placeholder={TEXT.FILTER_BY_TO_DATE}
                />
              </Col>
            </Row>
            <Button className="text-capitalize" type="submit" variant="primary" size="sm">
              Lấy dữ liệu
            </Button>
            {csvData.length !== 0 && (
              <CSVLink
                data={csvData}
                headers={csvHeaders}
                filename={`${nameFile || `Expense_(${getDateNow()})`}.csv`}
                onClick={resetCsvData}
                className="btn btn-success btn-sm text-capitalize"
                target="_blank"
              >
                {TEXT.EXPORT} {TEXT.FILE_EXCEL}
              </CSVLink>
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Backups;
