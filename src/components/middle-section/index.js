import { React, useState } from "react";
import "./style.css";
import photo1 from "./imgs/pic-html-on-page.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function MiddleSection() {
  Aos.init({ duration: 1500 });
  const [left, setLeft] = useState(-200);
  const openModal = () => {
    setLeft(0);
    window.document.body.style.overflowY = "hidden";
  };
  const closeModal = () => {
    setLeft(-200);
    window.document.body.style.overflowY = "scroll";
  };

  return (
    <section id="cards-section">
      <div className="modal" style={{ left: `${left}%` }}>
        <div className="innerModal">
          <div className="modalInfo">
            <h1>Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              congue justo. Nullam convallis maximus libero ut auctor.
              Vestibulum placerat convallis ante nec laoreet. Aliquam a ligula
              mi. Nam magna nisl, scelerisque vel eros at, varius condimentum
              risus. Nullam at condimentum sapien. Suspendisse blandit dignissim
              ante, et blandit tortor condimentum sed. Phasellus lorem ex,
              malesuada sit amet dui sit amet, dignissim consequat metus. Donec
              dapibus, metus in condimentum rhoncus, nisi mauris condimentum
              dolor, et malesuada sapien orci et ex. Fusce id magna ac neque
              volutpat venenatis. Nunc pellentesque a leo quis rhoncus. Vivamus
              vel tempus eros. Proin pulvinar pellentesque est eu hendrerit.
              Duis dignissim neque ac massa posuere rutrum. Suspendisse finibus
              luctus lobortis. Donec id turpis ut nulla gravida commodo. Nam
              quis quam id nulla fringilla hendrerit a non ipsum. Mauris vel
              laoreet leo, a ultricies ipsum. Mauris mollis orci ipsum, ac
              viverra nisl varius quis. In hac habitasse platea dictumst. Cras
              luctus, ex et rutrum feugiat, lorem lacus sagittis risus, a
              tristique nibh ipsum in lectus. Curabitur tincidunt odio turpis,
              molestie ullamcorper ipsum auctor ut. Aenean ullamcorper suscipit
              nulla vel sodales. Duis bibendum dolor at dui pretium ullamcorper.
              Proin semper neque vel augue pellentesque, sit amet ultricies nisl
              sollicitudin. Proin lobortis, sem in pretium eleifend, ligula ex
              rhoncus nibh, vel facilisis mauris ligula et felis. Vivamus
              aliquam vehicula sem vitae convallis. Donec vel dapibus justo.
              Quisque mattis dolor eget sem aliquet, vitae accumsan sem lacinia.
              Phasellus nec posuere erat. Mauris tincidunt lectus eget turpis
              tristique maximus. Quisque malesuada rutrum eros aliquam eleifend.
              Nunc tempor placerat mi. Etiam auctor quis erat non molestie.
              Pellentesque rutrum porttitor nibh at fringilla. Phasellus
              venenatis ex vitae feugiat venenatis. Mauris quis odio purus.
              Morbi malesuada eros mauris, vitae vestibulum quam consectetur
              nec. Etiam lacus eros, laoreet ac sapien et, euismod fringilla
              nulla. Suspendisse bibendum mauris vitae mauris dictum, sit amet
              ullamcorper purus ultrices. Sed sit amet augue nibh. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Fusce blandit laoreet dui, aliquam scelerisque mi
              laoreet id. Sed massa nulla, tincidunt in tempus quis, congue et
              lacus. Nam pretium erat quis finibus faucibus. Aliquam convallis
              dui nec tortor tempor, eu interdum dolor semper. Donec in dolor
              sed metus pharetra dapibus vitae ac urna. Sed vulputate erat
              rhoncus massa viverra, vel euismod quam commodo. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Sed convallis ipsum et massa imperdiet, nec viverra
              elit rutrum. Ut tristique massa id tristique rutrum. Suspendisse
              potenti. Phasellus feugiat egestas felis. Fusce vitae augue ex.
              Morbi nulla nisi, volutpat eget euismod non, placerat quis velit.
              Donec massa magna, faucibus at vulputate quis, finibus vitae
              sapien. Nam tempor felis nunc, eget molestie est fermentum a.
              Morbi vel tempor felis. Phasellus mollis feugiat vestibulum. Nulla
              fermentum risus a turpis laoreet dapibus. Morbi nec orci ut purus
              rhoncus iaculis in vel dolor.
            </p>
          </div>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="code" className="cardPhoto"></img>
        <div className="info">
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
            congue justo. Nullam convallis maximus libero ut auctor. Vestibulum
            placerat convallis ante nec laoreet. Aliquam a ligula mi. Nam magna
            nisl, scelerisque vel eros at, varius condimentum risus. Nullam at
            condimentum sapien. Suspendisse blandit dignissim ante, et blandit
            tortor condimentum sed. Phasellus lorem ex, malesuada sit amet dui
            sit amet, dignissim consequat metus. Donec dapibus, metus in
            condimentum rhoncus, nisi mauris condimentum dolor, et malesuada
            sapien orci et ex. Fusce id magna ac neque volutpat venenatis. Nunc
            pellentesque a leo quis rhoncus. Vivamus vel tempus eros. Proin
            pulvinar pellentesque est eu hendrerit. Duis dignissim neque ac
            massa posuere rutrum. Suspendisse finibus luctus lobortis. Donec id
            turpis ut nulla gravida commodo. Nam quis quam id nulla fringilla
            hendrerit a non ipsum. Mauris vel laoreet leo, a ultricies ipsum.
            Mauris mollis orci ipsum, ac viverra nisl varius quis. In hac
            habitasse platea dictumst. Cras luctus, ex et rutrum feugiat, lorem
            lacus sagittis risus, a tristique nibh ipsum in lectus. Curabitur
            tincidunt odio turpis, molestie ullamcorper ipsum auctor ut. Aenean
            ullamcorper suscipit nulla vel sodales. Duis bibendum dolor at dui
            pretium ullamcorper. Proin semper neque vel augue pellentesque, sit
            amet ultricies nisl sollicitudin. Proin lobortis, sem in pretium
            eleifend, ligula ex rhoncus nibh, vel facilisis mauris ligula et
            felis. Vivamus aliquam vehicula sem vitae convallis. Donec vel
            dapibus justo. Quisque mattis dolor eget sem aliquet, vitae accumsan
            sem lacinia. Phasellus nec posuere erat. Mauris tincidunt lectus
            eget turpis tristique maximus. Quisque malesuada rutrum eros aliquam
            eleifend. Nunc tempor placerat mi. Etiam auctor quis erat non
            molestie. Pellentesque rutrum porttitor nibh at fringilla. Phasellus
            venenatis ex vitae feugiat venenatis. Mauris quis odio purus. Morbi
            malesuada eros mauris, vitae vestibulum quam consectetur nec. Etiam
            lacus eros, laoreet ac sapien et, euismod fringilla nulla.
            Suspendisse bibendum mauris vitae mauris dictum, sit amet
            ullamcorper purus ultrices. Sed sit amet augue nibh. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Fusce blandit laoreet dui, aliquam scelerisque mi
            laoreet id. Sed massa nulla, tincidunt in tempus quis, congue et
            lacus. Nam pretium erat quis finibus faucibus. Aliquam convallis dui
            nec tortor tempor, eu interdum dolor semper. Donec in dolor sed
            metus pharetra dapibus vitae ac urna. Sed vulputate erat rhoncus
            massa viverra, vel euismod quam commodo. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Sed convallis ipsum et massa imperdiet, nec viverra elit rutrum. Ut
            tristique massa id tristique rutrum. Suspendisse potenti. Phasellus
            feugiat egestas felis. Fusce vitae augue ex. Morbi nulla nisi,
            volutpat eget euismod non, placerat quis velit. Donec massa magna,
            faucibus at vulputate quis, finibus vitae sapien. Nam tempor felis
            nunc, eget molestie est fermentum a. Morbi vel tempor felis.
            Phasellus mollis feugiat vestibulum. Nulla fermentum risus a turpis
            laoreet dapibus. Morbi nec orci ut purus rhoncus iaculis in vel
            dolor.
          </p>
        </div>
        <button onClick={openModal}>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="code" className="cardPhoto"></img>
        <img src={photo1} alt="code" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="code" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="code" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="code" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
    </section>
  );
}
