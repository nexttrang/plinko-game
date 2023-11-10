/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { initializeApp } from 'firebase/app'
import { useDeviceLanguage, getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDp3W9F1SBLVu4RdlWTCyI6li8O5RtKEIM",
  authDomain: "pinko-eb991.firebaseapp.com",
  projectId: 'pinko-eb991',
  storageBucket: 'pinko-eb991.appspot.com',
  messagingSenderId: '786586792076',
  appId: "1:786586792076:web:dff99633626ec15afb0ba9",
  measurementId: 'G-8ZYYHJ9EDT',
  databaseURL: 'https://pinko-eb991-default-rtdb.asia-southeast1.firebasedatabase.app'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const database = getDatabase(app)

useDeviceLanguage(auth)
