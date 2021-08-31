import { React, useState } from "react";
import "./style.css";

export function Description() {
  const [size1, setSize1] = useState(25);
  const [size2, setSize2] = useState(15);
  const focus1 = () => {
    setSize1(25);
    setSize2(15);
  };
  const focus2 = () => {
    setSize1(15);
    setSize2(25);
  };

  return (
    <section id="description">
      <div className="desc" onClick={focus1}>
        <p style={{ "font-size": `${size1}px` }}>
          Привет!!! И так, ты на нашем сайте – а значит на правильном пути. Пути
          поиска совершенных технологий и дизайна, эффективной работы и рекламы.
          Кто ты? Знаешь только ты, а кто мы? Это покажет и расскажет сайт, на
          котором мы рады встречать Всех ищущих. Мы видим свою жизнь и себя в
          поисках совершенства, совершенство образа и результата. Залог нашего с
          Вами успеха в осознании своих желаний и видений, мы свои видим поможем
          увидеть и ваши. Создадим и оформим сайт по индивидуальному заказу или
          по готовым шаблонам, поможем наполнить информацией и актуализировать.
          В нашей команде работают художники, программисты, стилисты дизайнеры,
          сценаристы - все креативные и смелые, мы не боимся смелых идей и
          решений, с нами весело и продуктивно. Присоединяйся.{" "}
        </p>
      </div>
      <div className="desc" onClick={focus2}>
        <p style={{ "font-size": `${size2}px` }}>
          Hey!!! And so, you are on our site - which means you are on the right
          track. Ways to search for perfect technologies and design, effective
          work and advertising. Who are you? You only know who we are? This will
          show and tell the site where we are happy to meet all seekers. We see
          our life and ourselves in search of perfection, the perfection of the
          image and the result. The key to our success with you in realizing
          your desires and visions, we see ours and help you see yours. We will
          create and design a website for an individual order or according to
          ready-made templates, we will help to fill it with information and
          update it. Our team consists of artists, programmers, stylists,
          designers, screenwriters - all creative and bold, we are not afraid of
          bold ideas and solutions, it is fun and productive with us. Join us.
        </p>
      </div>
    </section>
  );
}
