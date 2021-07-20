import firebase from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHdqXZsVSKe_yk4tBEsvBM5c3bIfp7i9U",
  authDomain: "v-repo.firebaseapp.com",
  projectId: "v-repo",
  storageBucket: "v-repo.appspot.com",
  messagingSenderId: "1084794520150",
  appId: "1:1084794520150:web:d1a870591b17a9ee33f1f7",
  measurementId: "G-835Y0YEBG4",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var provider = new firebase.auth.OAuthProvider("microsoft.com");
provider.setCustomParameters({
  // Optional "tenant" parameter in case you are using an Azure AD tenant.
  // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
  // or "common" for tenant-independent tokens.
  // The default value is "common".
  tenant: "c7b00d7f-ad99-442a-b12f-c2c912044fdc",
});

export { auth, provider };
