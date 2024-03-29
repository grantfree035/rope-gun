'use strict'

function onSignIn (googleUser) {
  var profile = googleUser.getBasicProfile()
  console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName())
  console.log('Image URL: ' + profile.getImageUrl())
  console.log('Email: ' + profile.getEmail())
}

function onFailure (error) {
  console.log(error)
}