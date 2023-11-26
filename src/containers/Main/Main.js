import React from "react";
import s from "./Main.module.css";
import Header from "../../components/Header/Header";
import tomatoVideo from "../../assets/images/Томат kg.mp4";
import proizvodstvo_1 from "../../assets/images/proizvodstvo-tomat-kyrgyzstan.jpg";
import proizvodstvo_2 from "../../assets/images/proizvodstvo-tomat-kyrgyzstan-2.jpg";
import Line from "../../components/Line/Line";
import offer_tomatoes from "../../assets/images/offer_tomatoes.jpg";

const Main = () => {
  return (
    <>
      <Header />

      <main>
        <div className={s.videoBackground}>
          <video autoPlay loop muted className={s.video}>
            <source src={tomatoVideo} type="video/mp4" />
          </video>

          <div className={s.content}>
            <h1>
              "TOMAT.KG" - ОДНО ИЗ САМЫХ КРУПНЫХ И СОВРЕМЕННЫХ ПРЕДПРИЯТИЙ ПО
              ПРОИЗВОДСТВУ ТОМАТНОЙ ПАСТЫ В КЫРГЫЗСТАНЕ.
            </h1>
          </div>
        </div>

        <Line />
        <div className="container">
          <div className={s.info__main}>
            <p>
              Кыргызстан обладает идеальными климатическими условиями для
              выращивания томатов.
            </p>
            <br />
            <p>
              Мы самостоятельно выращиваем на площади{" "}
              <span className="red__span">600 га</span> лучшие сорта томатов, в
              прекрасном экологически чистом районе предгорий Тянь-Шаня.
            </p>
            <br />
            <p>
              В производственном корпусе "Tomat KG" установлено современное
              оборудование, которое позволяет ежедневно перерабатывать{" "}
              <span className="red__span">750 тонн</span>
              свежих томатов.
            </p>

            <p>
              Наши аграномы, на протяжении всего сезона заботливо следят за
              выращиванием томатов.
            </p>
            <br />
            <p>
              Уборка урожая производится итальянскими томатоуборочными
              комбайнами. При переработке используется кристально чистая
              артезианская вода!
            </p>
            <br />
            <p>
              <span className="red__span">
                Покупая нашу томатную пасту из Кыргызстана, вы можете быть
                уверены в её соответствии самым высоким стандартам качества!
              </span>
            </p>

            <div className="row">
              <div className="col-6">
                <div className={s.box}>
                  <img src={proizvodstvo_1} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className={s.box}>
                  <img src={proizvodstvo_2} alt="" />
                </div>
              </div>
            </div>

            <p>
              Переработка томатов осуществляется со строжайшим соблюдением всех
              технологических и санитарных норм и требований.
            </p>

            <div className={s.important__info}>
              <ul>
                <li>
                  <p>
                    Продукт проходит предпродажные испытания на отсутствие
                    пестицидов, химикатов, красителей, консервантов.
                  </p>
                </li>
                <li>
                  <p>
                    Мы предлагаем оптовым покупателям высококачественную
                    томатную пасту, произведенную в Кыргызстане.
                  </p>
                </li>
                <li>
                  <p>
                    Продукция имеет асептическую упаковку, расфасована в
                    металлических бочках, около 225 кг в 1 бочке (± 3 кг).
                  </p>
                </li>
                <li>
                  <p>
                    Заинтересованным клиентам, можем предоставить копии
                    сертификатов соответствия, и образцы продукции в специальной
                    асептической килограммовой упаковке.
                  </p>
                </li>
              </ul>
            </div>

            <div className={s.offer}>
              <Line title="МЫ ПРЕДЛАГАЕМ ТОМАТНУЮ ПАСТУ ВЫСШЕГО СОРТА BRIX 36-38%!" />
              <div className="row">
                <div className="col-6">
                  <div className={s.box}>
                    <ol>
                      <li>
                        <p>
                          * Без содержания{" "}
                          <span className="red__span">красителей</span> *
                        </p>
                      </li>
                      <li>
                        <p>
                          * Без добавления{" "}
                          <span className="red__span">крахмала</span> и{" "}
                          <span className="red__span">ароматизаторов</span> *
                        </p>
                      </li>
                      <li>
                        <p>
                          * Без добавления{" "}
                          <span className="red__span">соли</span> *
                        </p>
                      </li>
                      <li>
                        <p>
                          * Без <span className="red__span">ГМО</span> *
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-6">
                  <div className={s.box__offer}>
                    <img src={offer_tomatoes} alt="offer_tomatoes" />
                  </div>
                </div>
              </div>
            </div>
            <div className={s.offer}>
              <Line title="ПРОДУКТ СООТВЕТСТВУЕТ ТРЕБОВАНИЯМ:" />

              <div className={s.requirements}>
                <p>ГОСТ 3343-89 «ПРОДУКТЫ ТОМАТНЫЕ КОНСЕРВИРУЕМЫЕ»;</p>
                <p>ТР ТС 021-2001 «О БЕЗОПАСНОСТИ ПИЩЕВОЙ ПРОДУКЦИИ»</p>
                <hr className={s.hr} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
