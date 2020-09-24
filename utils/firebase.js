import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import { objectToArray } from 'helpers/object';
import { baseJars } from 'common';
import { JARSPERCENT } from 'constant/common';

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_APIKEY;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECTID;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APPID;

const firebaseConfig = {
  apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId,
  appId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const jars = baseJars();
const usersModel = firebase.database().ref('/users');
const transactionsModel = firebase.database().ref('/transactions');

// Users Methods
export function getUsers() {
  return usersModel
    .once('value')
    .then((snapshot) => {
      const usersData = snapshot.val();
      return objectToArray(usersData);
    })
    .catch((err) => alert(err));
}

export function getUser(_id) {
  return usersModel
    .child(_id)
    .once('value')
    .then((snapshot) => snapshot.val())
    .catch((err) => alert(err));
}

export function newUser(data) {
  const display_name = data.username;
  const balance = { percent: JARSPERCENT, income: jars, expense: jars };
  return usersModel
    .push({ ...data, display_name, balance })
    .then(async (res) => {
      return getUser(res.key).then((user) => {
        return updateUser(res.key, { ...user, _id: res.key });
      });
    })
    .catch((err) => alert(err));
}

export function updateUser(_id, update) {
  return getUser(_id).then((user) => {
    const dataUpdate = { ...user, ...update };
    usersModel.child(_id).set(dataUpdate);
    return dataUpdate;
  });
}

export function getTransactions(user) {
  return transactionsModel
    .child(user)
    .once('value')
    .then((snapshot) => {
      const transactions = snapshot.val();
      const newTransactions = [];
      for (const key in transactions) {
        if (transactions.hasOwnProperty(key))
          newTransactions.push({
            ...transactions[key],
          });
      }
      return newTransactions;
    })
    .catch((err) => alert(err));
}

export function newTransaction(user, data) {
  return transactionsModel
    .child(user)
    .push(data)
    .then((res) => {
      return getTransaction(user, res.key).then((transaction) => {
        return updateTransaction(user, res.key, { ...transaction, _id: res.key });
      });
    })
    .catch((err) => alert(err));
}

export function getTransaction(user, _id) {
  return transactionsModel
    .child(user)
    .child(_id)
    .once('value')
    .then((snapshot) => snapshot.val())
    .catch((err) => alert(err));
}

export function updateTransaction(user, _id, update) {
  return getTransaction(user, _id).then((transaction) => {
    const dataUpdate = { ...transaction, ...update };
    transactionsModel.child(user).child(_id).set(dataUpdate);
    return dataUpdate;
  });
}

export function deleteTransaction(user, _id) {
  return getTransaction(user, _id).then((transaction) => {
    transactionsModel.child(user).child(_id).remove();
    return transaction;
  });
}
