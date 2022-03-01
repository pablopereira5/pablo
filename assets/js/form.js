var form = document.getElementById("form");
      
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = alert('gracias por contactarme, te escribo en breve :)');
    form.reset()
  }).catch(error => {
    status.innerHTML = "Algo salió mal"
  });
}
form.addEventListener("submit", handleSubmit)