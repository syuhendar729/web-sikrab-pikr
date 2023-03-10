/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xbjeypdj",
  title: "Kirim pesanmu terkait acara ini!",
  fields: [
    { 
      type: "email", 
      label: "Masukkan email :", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Pesan:",
      name: "message",
      placeholder: "Tulis pesanmu disini!",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});
