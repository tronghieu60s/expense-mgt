import Backups from 'components/pages/Home/Backups/Backups';
import { JARS, TYPES } from 'constant/common';
import * as TEXT from 'constant/text';
import { delayLoading, toastCustom } from 'helpers/common';
import { formatDateMark, getDateNow, getDateNowAgo, parseDateString } from 'helpers/datetime';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoadingUi, showLoadingUi } from 'redux/actions/ui.action';
import * as Yup from 'yup';

const BackupsContainer = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const initialValues = {
    name: `Expense_(${getDateNow()})`,
    from: getDateNowAgo(10),
    to: getDateNow(),
  };
  const [nameFile, setNameFile] = useState('');
  const [csvData, setCsvData] = useState([]);
  const csvHeaders = [
    { label: TEXT.TYPE, key: 'type' },
    { label: TEXT.MONEY, key: 'money' },
    { label: TEXT.JAR, key: 'jar' },
    { label: TEXT.DATE, key: 'date' },
    { label: TEXT.DESCRIPTION, key: 'description' },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().typeError(TEXT.FIELD_NOT_MATCHES).required(TEXT.FIELD_IS_REQUIRED),
    from: Yup.date()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .transform(parseDateString)
      .required(TEXT.FIELD_IS_REQUIRED),
    to: Yup.date()
      .typeError(TEXT.FIELD_NOT_MATCHES)
      .transform(parseDateString)
      .required(TEXT.FIELD_IS_REQUIRED),
  });

  const onSubmit = async (values) => {
    dispatch(showLoadingUi());

    let data = [...transactions];
    data = data.filter(
      (label) =>
        new Date(values.from) <= new Date(label.date) &&
        new Date(values.to) >= new Date(label.date),
    );
    const formatData = data.map((trans) => {
      return {
        type: TYPES[trans.type].name,
        money: trans.money,
        jar: JARS[trans.jar].name,
        date: formatDateMark(trans.date),
        description: trans.description,
      };
    });
    setNameFile(values.name);
    setCsvData(formatData);

    toastCustom('success', TEXT.FILTER_DATA_SUCCESS);
    await delayLoading();
    dispatch(hideLoadingUi());
  };

  return (
    <>
      <Backups
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        nameFile={nameFile}
        csvData={csvData}
        csvHeaders={csvHeaders}
        resetCsvData={() => setCsvData([])}
      />
    </>
  );
};

export default BackupsContainer;
