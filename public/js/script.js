fetch("./_partials/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch("./_partials/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

fetch("./_partials/presentation-skills.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("presentation-skills").innerHTML = data;
  });

fetch("./_partials/projects.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("projects").innerHTML = data;
  });

fetch("./_partials/contact.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("contact").innerHTML = data;
  });

fetch("./_partials/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


fetch("./public/js/ui-script.js")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("ui-script").innerHTML = data;
  });
