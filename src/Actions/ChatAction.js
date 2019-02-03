import firebase from 'firebase';
import * as Constants from '../Constants/ChatConstants';

export const changeMessageTextAction = text => ({
  type: Constants.CHANGE_CHAT_CONTACT_TEXT,
  payload: text,
});

export const sendMessageAction = (message, other) => ((dispatch) => {
  const myUid = firebase.auth().currentUser.uid;
  firebase.database().ref(`/users/${myUid}`)
    .once('value', (snapshot) => {
      const myName = snapshot.val().name;
      const myEmail = snapshot.val().email;
      firebase.database().ref(`/messages/${myUid}/${other.uid}/messageList`)
        .push({
          message,
          type: 'send',
        }).then(() => {
          firebase.database()
            .ref(`/messages/${other.uid}/${myUid}/messageList`)
            .push({
              message,
              type: 'received',
            });
        })
        .then(() => {
          firebase.database().ref(`/messages/${myUid}/${other.uid}`).update({
            otherName: other.name,
            otherEmail: other.email,
          }).then(() => {
            firebase.database().ref(`/messages/${other.uid}/${myUid}`)
              .update({
                otherName: myName,
                otherEmail: myEmail,
              });
          });
        })
        .then(() => dispatch({ type: 'sucesso' }));
    });
});

export const fetchMessagesAction = (otherUid) => {
  const myUid = firebase.auth().currentUser.uid;
  firebase.database().ref(`/messages/${myUid}/${otherUid}`)
    .on('value')
    .then((snapshot) => {
      console.log(snapshot.val());
    });
  return { type: Constants.MESSAGE_LIST };
};
