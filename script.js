import { auth, db } from './firebase-config_firebase.js';

// Admin Login
document.getElementById('admin-login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Admin logged in');
      alert('Admin logged in successfully');
    })
    .catch((error) => {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + error.message);
    });
});

// Create Driver Account
document.getElementById('create-driver').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('driver-email').value;
  const password = document.getElementById('driver-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Driver account created');
      alert('Driver account created successfully');
    })
    .catch((error) => {
      console.error('Error creating account:', error);
      alert('Error creating account: ' + error.message);
    });
});