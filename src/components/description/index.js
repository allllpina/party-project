import { React, useState } from "react";
import "./style.css";
import "aos/dist/aos.css";

export function Description(props) {
  const [language1, setLanguage1] = useState("block");
  const [language2, setLanguage2] = useState("none");
  const [btn1, setBtn1] = useState("button actived");
  const [btn2, setBtn2] = useState("button ");

  const languageEng = () => {
    if (language1 === "none") {
      setLanguage1("block");
      setLanguage2("none");
      setBtn1(`button actived`);
      setBtn2("button ");
    } else {
      return;
    }
  };
  const languageRus = () => {
    if (language2 === "none") {
      setLanguage1("none");
      setLanguage2("block");
      setBtn1("button");
      setBtn2(`button actived`);
    } else {
      return;
    }
  };

  return (
    <section className={props.className} id="description">
      <div className="descriptionCase" data-aos="fade-left">
        <div className="buttonCase">
          <button id={props.id} onClick={languageEng} className={btn1}>
            English
          </button>
          <button id={props.id} onClick={languageRus} className={btn2}>
            Русский
          </button>
        </div>
        <div className="textCase">
          <h1 style={{ display: `${language1}` }}>Description</h1>
          <h1 style={{ display: `${language2}` }}>Описание</h1>
          <p style={{ display: `${language1}` }}>
            Hey!!! And so, you are on our site - which means you are on the
            right track. Ways to search for perfect technologies and design,
            effective work and advertising. Who are you? You only know who we
            are? This will show and tell the site where we are happy to meet all
            seekers. We see our life and ourselves in search of perfection, the
            perfection of the image and the result. The key to our success with
            you in realizing your desires and visions, we see ours and help you
            see yours. We will create and design a website for an individual
            order or according to ready-made templates, we will help to fill it
            with information and update it. Our team consists of artists,
            programmers, stylists, designers, screenwriters - all creative and
            bold, we are not afraid of bold ideas and solutions, it is fun and
            productive with us. Join us.
          </p>
          <p style={{ display: `${language2}` }}>
            Привет!!! И так, ты на нашем сайте – а значит на правильном пути.
            Пути поиска совершенных технологий и дизайна, эффективной работы и
            рекламы. Кто ты? Знаешь только ты, а кто мы? Это покажет и расскажет
            сайт, на котором мы рады встречать Всех ищущих. Мы видим свою жизнь
            и себя в поисках совершенства, совершенство образа и результата.
            Залог нашего с Вами успеха в осознании своих желаний и видений, мы
            свои видим поможем увидеть и ваши. Создадим и оформим сайт по
            индивидуальному заказу или по готовым шаблонам, поможем наполнить
            информацией и актуализировать. В нашей команде работают художники,
            программисты, стилисты дизайнеры, сценаристы - все креативные и
            смелые, мы не боимся смелых идей и решений, с нами весело и
            продуктивно. Присоединяйся.
          </p>
        </div>
      </div>
    </section>
  );
}
