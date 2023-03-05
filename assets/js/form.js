/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xbjeypdj",
  title: "Kirim masukkan, saran, atau pertanyaan!",
  fields: [
    { 
      type: "email", 
      label: "Masukkan email (jika ingin direply) :", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Pesan:",
      name: "message",
      placeholder: "Apa yang kamu tanyakan?",
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
