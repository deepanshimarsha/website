window.addEventListener("load",() => {
    const form = document.querySelector("form");
    form.addEventListener("submit",(e) => {
      e.preventDefault();
      let data = new FormData(form);
      console.log(data);
      axios({
        method: "post",
        url: "https://porfolio-contacts.herokuapp.com/api/v1/contact/",
        data: data,

      })
      .then((response) =>{
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      form.reset();
    });
  });


