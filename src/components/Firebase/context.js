// import React from 'react';

// const FirebaseContext = React.createContext(null);

// export const withFirebase = Component => props => (
//   <FirebaseContext.consumer>
//     {firebase => <Component {...props} firebase={firebase} />}
//   </FirebaseContext.consumer>
// );
// export default FirebaseContext;

import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
