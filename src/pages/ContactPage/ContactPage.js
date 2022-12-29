import emailjs from "@emailjs/browser"
import ContactPageStyle from "./ContactPageStyle.module.css"
import { useRef } from "react";
export const ContactPage = () => {
    const style = ContactPageStyle
    const form = useRef()
    const sendMessage = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_tjre33d','template_4k9ax0s',form.current,'bKcZzz_g5kNe5nk_a').then((res)=>{
            console.log(res)
          })
    }
  return (
    <div>
      <div className={style.container} id="contact">
        <h1>Kontakt</h1>
        <p>Budite slobodni da pitate, predložite ili uputite bilo šta.</p>
        <form
          ref={form}
          className={style.ContactForm}
          onSubmit={(e) => sendMessage(e)}
        >
          <div className={style.containerInput}>
            <label className={style.containerInputLabel}>
              Name
              <input className={style.contactInput} name="user_name"></input>
            </label>
            <label className={style.containerInputLabel}>
              E-mail
              <input
                className={style.contactInput}
                name="user_email"
                required
                type="email"
              ></input>
            </label>
          </div>
          <div className={style.containerInput}>
            <label className={style.containerInputLabel}>
              Subject
              <input
                className={style.contactInput + " " + style.subject}
              ></input>
            </label>
          </div>
          <div className={style.containerInput}>
            <label className={style.containerInputLabel}>
              Message
              <textarea
                className={style.contactTextArea}
                name="message"
              ></textarea>
            </label>
          </div>
          <label className={style.containerInputLabel}>
            
          </label>
          <button className="getStarted-btn" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
