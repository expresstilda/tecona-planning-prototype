"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE_PATH}${path}`;

const stages = [
  {
    label: "01 · Схема",
    title: "Планируем расстановку",
    text: "Переносим размеры помещения в 2D, распределяем посадочные зоны и намечаем удобные проходы.",
    image: asset("/plan-2d.png"),
    alt: "Схема расстановки мебели в помещении",
  },
  {
    label: "02 · Объём",
    title: "Проверяем зал целиком",
    text: "Показываем пространство сверху: так проще оценить вместимость, логику зонирования и работу персонала.",
    image: asset("/plan-3d.png"),
    alt: "Трёхмерный план расстановки мебели",
  },
  {
    label: "03 · Атмосфера",
    title: "Показываем будущий интерьер",
    text: "Собираем наглядный ракурс с мебелью, светом и материалами, чтобы решение можно было увидеть до заказа.",
    image: asset("/interior-3d.png"),
    alt: "Визуализация интерьера с мебелью Tecona",
  },
];

const benefits = [
  ["Посадочные места", "Понимаете, сколько гостей можно разместить без ощущения тесноты."],
  ["Удобные проходы", "Заранее проверяете маршруты гостей и работу персонала."],
  ["Мебель Tecona", "Видите подходящие модели, размеры и конфигурации в своём помещении."],
  ["Цвет и материал", "Сравниваете варианты обивки в одной и той же обстановке."],
];

const colorShots = [
  {
    image: asset("/color-room-olive.jpg"),
    alt: "Оливковый диван и горчичные кресла в интерьере кафе",
    label: "Оливковый + горчичный",
    portrait: false,
  },
  {
    image: asset("/color-room-yellow.jpg"),
    alt: "Горчичный диван и розовые кресла в интерьере кафе",
    label: "Горчичный + розовый",
    portrait: false,
  },
  {
    image: asset("/color-palette-nine.jpg"),
    alt: "Девять вариантов цвета дивана в одном интерьере",
    label: "9 оттенков дивана",
    portrait: true,
  },
  {
    image: asset("/color-palette-four.jpg"),
    alt: "Четыре варианта цвета дивана в одном интерьере",
    label: "4 базовых оттенка",
    portrait: true,
  },
  {
    image: asset("/color-combinations.jpg"),
    alt: "Четыре сочетания цветов дивана и кресел",
    label: "Диван + стулья",
    portrait: false,
  },
  {
    image: asset("/color-variants.jpg"),
    alt: "Сравнение цветовых вариантов мебели в одном интерьере",
    label: "Два решения",
    portrait: true,
  },
];

export default function Home() {
  const [stage, setStage] = useState(1);
  const [colorShot, setColorShot] = useState(0);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tecona, на главную">
          <Image src={asset("/tecona-logo.svg")} alt="Tecona" width={132} height={52} priority />
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#result">Что получите</a>
          <a href="#process">Как это работает</a>
          <a href="#example">Пример</a>
        </nav>
        <div className="header-actions">
          <a className="phone" href="tel:+79269890852">+7 (926) 989-08-52</a>
          <a className="small-button" href="#request">Обсудить проект</a>
        </div>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src={asset("/interior-3d.png")}
          alt="Будущий интерьер заведения с мебелью Tecona"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light"><span /> Планировка и 3D в подарок</div>
          <h1>Посмотрите, как будет выглядеть<br />пространство до заказа мебели</h1>
          <p>
            По размерам помещения подготовим схему расстановки и
            3D-визуализацию с мебелью Tecona, поможем оценить посадку,
            проходы и цвета.
          </p>
          <div className="hero-actions">
            <a className="primary-button light-button" href="#request">Обсудить мой зал</a>
            <a className="text-link light-link" href="#example">Посмотреть пример <span>↘</span></a>
          </div>
          <div className="hero-note">Для проектов, комплектуемых мебелью Tecona</div>
        </div>
        <div className="hero-card">
          <div className="hero-card-number">3D</div>
          <p>Решение, которое можно увидеть и обсудить до запуска в производство</p>
        </div>
      </section>

      <section className="trust-row" aria-label="Ключевые преимущества">
        <div><strong>0 ₽</strong><span>при заказе мебели</span></div>
        <div><strong>2D + 3D</strong><span>понятный результат</span></div>
        <div><strong>300+</strong><span>вариантов тканей</span></div>
        <div><strong>до 10 дней</strong><span>изготовление мебели</span></div>
      </section>

      <section className="intro section" id="result">
        <div className="section-heading">
          <div className="eyebrow"><span /> Не просто подбор мебели</div>
          <h2>От размеров помещения<br />к понятному образу будущего зала</h2>
        </div>
        <div className="intro-copy">
          <p className="large-copy">
            Хорошая комплектация начинается не с каталога, а с понимания
            пространства. Поэтому мы помогаем связать мебель, планировку и
            атмосферу в одно решение.
          </p>
          <p>
            Это предварительная визуальная концепция: достаточно наглядная,
            чтобы принять решение, и без лишней сложности полноценного
            дизайн-проекта.
          </p>
        </div>
      </section>

      <section className="benefit-grid section">
        {benefits.map(([title, text], index) => (
          <article className="benefit-card" key={title}>
            <span className="card-index">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="case-section" id="example">
        <div className="case-header section">
          <div>
            <div className="eyebrow light"><span /> Реальный пример</div>
            <h2>Один проект.<br />Три уровня ясности.</h2>
          </div>
          <p>
            Клиент прислал только размеры. Менеджер Tecona продумал
            расстановку, перенёс её в 2D и показал результат в объёме.
          </p>
        </div>

        <div className="case-viewer section">
          <div className="stage-copy">
            <div className="stage-tabs" role="tablist" aria-label="Этапы визуализации">
              {stages.map((item, index) => (
                <button
                  className={stage === index ? "active" : ""}
                  key={item.label}
                  onClick={() => setStage(index)}
                  role="tab"
                  aria-selected={stage === index}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="stage-description">
              <span>0{stage + 1}</span>
              <h3>{stages[stage].title}</h3>
              <p>{stages[stage].text}</p>
            </div>
            <div className="viewer-arrows">
              <button
                onClick={() => setStage((stage + stages.length - 1) % stages.length)}
                aria-label="Предыдущий этап"
              >←</button>
              <span>{stage + 1} / {stages.length}</span>
              <button
                onClick={() => setStage((stage + 1) % stages.length)}
                aria-label="Следующий этап"
              >→</button>
            </div>
          </div>
          <div className={`stage-image stage-image-${stage}`}>
            <Image
              key={stages[stage].image}
              src={stages[stage].image}
              alt={stages[stage].alt}
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
            />
            <div className="image-label">{stages[stage].label}</div>
          </div>
        </div>
      </section>

      <section className="color-section section" id="process">
        <div className={`color-visual ${colorShots[colorShot].portrait ? "color-portrait" : ""}`}>
          <Image
            key={colorShots[colorShot].image}
            src={colorShots[colorShot].image}
            alt={colorShots[colorShot].alt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="color-main-label">{colorShots[colorShot].label}</div>
          <div className="color-counter">{String(colorShot + 1).padStart(2, "0")} / {String(colorShots.length).padStart(2, "0")}</div>
        </div>
        <div className="color-copy">
          <div className="eyebrow"><span /> Цвет без сомнений</div>
          <h2>Сравните варианты<br />в знакомой обстановке</h2>
          <p className="large-copy">
            Один и тот же диван может по-разному менять характер пространства.
            Покажем несколько вариантов обивки, чтобы выбирать было проще.
          </p>
          <ul>
            <li><span>01</span> Подбираем ткани под стиль и нагрузку</li>
            <li><span>02</span> Показываем альтернативные сочетания</li>
            <li><span>03</span> Фиксируем выбранный вариант в заказе</li>
          </ul>
          <div className="color-thumbs" aria-label="Примеры цветовых решений">
            {colorShots.map((shot, index) => (
              <button
                className={colorShot === index ? "active" : ""}
                key={shot.image}
                onClick={() => setColorShot(index)}
                aria-label={`Показать пример: ${shot.label}`}
                aria-pressed={colorShot === index}
              >
                <Image src={shot.image} alt="" fill sizes="92px" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section section">
        <div className="section-heading">
          <div className="eyebrow"><span /> Как это работает</div>
          <h2>Отправьте план.<br />Остальное сделаем вместе</h2>
        </div>
        <div className="steps-list">
          {[
            ["01", "Расскажите о задаче", "Тип заведения, площадь, количество посадочных мест и сроки."],
            ["02", "Пришлите размеры", "Подойдёт план, чертёж, схема от руки или замеры помещения."],
            ["03", "Получите концепцию", "Схема расстановки, модели мебели и наглядные 3D-ракурсы."],
            ["04", "Согласуйте детали", "Выбираем цвет, ткань, размеры и готовим расчёт комплектации."],
          ].map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scope-section section">
        <div className="scope-mark">i</div>
        <div>
          <div className="eyebrow"><span /> Честный формат</div>
          <h2>Наглядная концепция,<br />а не сложный дизайн-проект</h2>
        </div>
        <p>
          Визуализация помогает оценить расстановку и внешний вид мебели.
          Она не заменяет архитектурный или инженерный проект и уточняется
          после финальных замеров.
        </p>
      </section>

      <section className="request-section" id="request">
        <div className="request-copy">
          <div className="eyebrow light"><span /> Начнём с вашего помещения</div>
          <h2>Покажем, как может<br />выглядеть ваш зал</h2>
          <p>
            Оставьте контакты и приложите план помещения. Менеджер уточнит
            задачу и расскажет, какие варианты можно подготовить.
          </p>
          <div className="request-contact">
            <span>Или позвоните нам</span>
            <a href="tel:+79269890852">+7 (926) 989-08-52</a>
          </div>
        </div>

        {sent ? (
          <div className="success-card" role="status">
            <div className="success-icon">✓</div>
            <h3>Спасибо! Заявка принята</h3>
            <p>Менеджер свяжется с вами, чтобы обсудить помещение и будущую комплектацию.</p>
            <button onClick={() => setSent(false)}>Отправить ещё одну</button>
          </div>
        ) : (
          <form className="request-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                <span>Имя</span>
                <input name="name" type="text" placeholder="Как к вам обращаться?" required />
              </label>
              <label>
                <span>Телефон</span>
                <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
              </label>
            </div>
            <label>
              <span>Тип объекта</span>
              <select name="type" defaultValue="">
                <option value="" disabled>Выберите тип заведения</option>
                <option>Ресторан</option>
                <option>Кафе</option>
                <option>Бар</option>
                <option>Отель</option>
                <option>Столовая</option>
                <option>Другое</option>
              </select>
            </label>
            <label className="upload">
              <input name="plan" type="file" accept=".pdf,.png,.jpg,.jpeg" />
              <span className="upload-plus">+</span>
              <span><strong>Приложить план помещения</strong><small>PDF, JPG или PNG до 20 МБ</small></span>
            </label>
            <label className="consent">
              <input type="checkbox" required />
              <span>Я даю согласие на обработку персональных данных</span>
            </label>
            <button className="primary-button submit-button" type="submit">Получить планировку <span>→</span></button>
          </form>
        )}
      </section>

      <footer>
        <Image src={asset("/tecona-logo.svg")} alt="Tecona" width={122} height={48} />
        <p>Мебель для ежедневного потока гостей</p>
        <div>
          <a href="https://tecona.ru/catalog/">Каталог</a>
          <a href="https://tecona.ru/projects/">Проекты</a>
          <a href="https://tecona.ru/production/">Производство</a>
        </div>
        <span>Прототип страницы · 2026</span>
      </footer>
    </main>
  );
}
