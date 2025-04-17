import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: "https://alex-cerezo.firebaseio.com",
  projectId: "alex-cerezo",
  storageBucket: "alex-cerezo.firebasestorage.app",
  messagingSenderId: "482323943",
  appId: "1:482323943:web:400d20c68e4c22b5d06142",
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };