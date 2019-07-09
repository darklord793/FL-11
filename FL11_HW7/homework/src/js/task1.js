let user = prompt('Enter your email pliase');
const Firsе_Lenght = 6;
const Second_Lenght = 5;
if (user === '') {
    alert('Canceled');
} else {
  if (user.length <Firsе_Lenght) {
    alert('I do not know any emails having name length less than 6 symbols');
  } else if (user === 'user@gmail.com' || user === 'admin@gmail.com') {
    let password = prompt('Pliase enter your password');
    if (password === '') {
      alert('Canceled');
    } else if (password === 'UserPass' & user === 'user@gmail.com'
    || password === 'AdminPass' & user === 'admin@gmail.com') {
      if (confirm('Do you want to change your password?')) {
        let passwordRepitte = prompt('Pliase enter your old password');
        if (passwordRepitte === password) {
        let newPassword = prompt('Pliase enter your new password');
        if (newPassword.length <Second_Lenght) {
          alert('It’s too short password. Sorry.');
        } else {
          let newConformadPassword = prompt('Pliase enter your new password');
          if (newPassword === newConformadPassword) {
            let password = newPassword;
            alert('You have successfully changed your password.' + password);
          } else {
            alert('You wrote the wrong password.');
          }
        }
      }
    } else {
        alert('You have failed the change.');
    }
    } else {
      alert('Wrong password');
    }
  } else {
    alert('I don’t know you');
  }
}
