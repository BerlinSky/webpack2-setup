function edit () {
  $('.view').hide()
  $('.edit').show()
}

function cancel () {
  $('.view').show()
  $('.edit').hide()
}

function save () {
  $.ajax('/' + user.username, {
    method: 'PUT',
    data: {
      street: $('#street').val(),
      city: $('#city').val(),
      state: $('#state').val(),
      zip: $('#zip').val()
    },
    complete: function () {
      cancel()
      location.reload()
    }
  })
}

function del (userName) {
  console.log('user.username', userName);

  $.ajax('/' + userName, {
    method: 'DELETE',
    complete: function () {
      location = '/'
    }
  })
}

// console.log('inside user.js');