import React, { useEffect, useState } from 'react'
import './Contact.scss'
import { IoIosSend } from 'react-icons/io';

const BOT_TOKEN = "6984601542:AAHCF1HdL0BTa71xaByGNiITcVnhiFoCY_k";
const CHAT_ID = "-4276448242";

let initialState = {
  fname: "",
  email: "",
  messege: "",
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Contact %0A";
    text += `Fullname: <b>${data.fname}</b> %0A`;
    text += `Email: <b>${data.email}</b> %0A%0A`;
    text += `Messege: <b>${data.messege}</b>`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <main>
      <section className="contact">
        <div className="container contact__content">
          <div className="contact__left">
            <h1>get in touch</h1>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>
              20 Prince Hakerem Lekki <br /> Phase 1, Lagos.
            </p>
          </div>
          <div className="contact__right">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="fullname">Fullname</label>
              <input
                value={data.fname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fname: e.target.value }))
                }
                type="text"
                id="fullname"
                placeholder="James Doe"
              />
              <label htmlFor="email">Email</label>
              <input
                value={data.email}
                onChange={(e) =>
                  setData((p) => ({ ...p, email: e.target.value }))
                }
                type="email"
                id="email"
                placeholder="jamesdoe@gmail.com"
              />
              <label htmlFor="message">Message</label>
              <textarea
                value={data.messege}
                onChange={(e) =>
                  setData((p) => ({ ...p, messege: e.target.value }))
                }
                name=""
                id="message"
                rows="10"
                placeholder="Type your message"
              ></textarea>
              <button>
                <IoIosSend color="white" size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact
