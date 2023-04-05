import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_100_pov = [{
    src: require('../assets/images/gallery/100-povesti/100-depovesti-full.png'),
    thumbnail: require('../assets/images/gallery/100-povesti/100-depovesti-thumb.png'),
    title: 'Citește-mi 100 de povești',
    desc: 'O initiativa Asociația OvidiuRo în parteneriat cu Ministerul Educației și Cercetării și Ministerul Culturii.',
	full: true,
}, ];

const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/08.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/08.jpg'),
    title: 'Dăruiește un zâmbet',
    desc: 'O initiativa Gradinita Veseliei Navodari.',
  },
  {
    src: require('../assets/images/gallery/fulls/09.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/09.jpg'),
    title: 'Dăruiește un zâmbet',
    desc: 'O initiativa Gradinita Veseliei Navodari.',
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/10.jpg'),
    title: 'Dăruiește un zâmbet',
    desc: 'O initiativa Gradinita Veseliei Navodari.',
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>
            Despre noi
          </h2>
        </header>
        <div className="content">
          <p>
            Unitate de invatamant pentru ciclul prescolar, care ofera program prelungit si masa. 
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section id="contact">
        <header>
          <h2>Contact</h2>
        </header>
        <div className="content">
          <p>
            In cazul in care doriti sa intrati <strong>in contact</strong> cu noi, o puteti face prin telefon sau email. Program Lu-Vi, 9.00 - 16.00.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-phone"> 
              <a href="tel:0341454589">0341 454 589</a>
            </li>
            
            <li className="icon fa-envelope">
              <a href="mailto:contact@gradinita-veseliei.ro">contact@gradinita-veseliei.ro</a>
            </li>
          </ul>
          <p>
          </p>
        </div>
      </section>

      <section id="avizier">
        <header>
          <h2>Avizier</h2>
        </header>
        <div className="content">
          
		  <p>
            Sectiune documente publice - Gradinita Veseliei.
          </p>
		  
          <ul className="feature-icons">
            <li className="icon fa-download"> 
              <a href="https://static.gradinita-veseliei.ro/2021-09-stat-personal.pdf" download>Stat Personal pe niveluri de invatamant</a>
            </li>
            <li>
              <br />
            </li>
            <li className="icon fa-download"> 
              <a href="https://static.gradinita-veseliei.ro/transparenta-salariala.pdf" download>Transparenta Salariala (actualizat 2023-04-05)</a>
            </li>

          </ul>

          <p>
          </p>
        </div>
      </section>
	  
      <section id="inscriere">
        <header>
          <h2>Inscriere 2020/2021</h2>
        </header>
        <div className="content">
          <p>
            <strong>PRIMA ETAPĂ 09.06 -03.07.2020</strong>
            <br />
            09.06 - 26.06.2020 – Colectare cereri 
            <br />
            26.06 - 03.07.2020 – Procesare cereri
          </p>

          <p>
            <strong>A DOUA ETAPĂ DE ÎNSCRIERE 20.07-10.08.2020 (dacă rămân locuri vacante după încheierea primei etape)</strong>
            <br />
            20.07 - 31.07.2020 - Colectare cereri 
            <br />
            03.08 - 10.08.2020 - Procesare cereri
            <br />
            ETAPA DE AJUSTĂRI 11.08-31.08.2020
          </p>

          <p>
            Pentru mai multe informații accesați articolul {' '} 
            <strong>
            <a href="https://blog.gradinita-veseliei.ro/inscrierea-copiilorla-gradinita-cuprogram-prelungit-veseliei-an-scolar-2020-2021/">
            ÎNSCRIEREA COPIILOR LA GRĂDINIȚA
            </a>
            </strong>.
          </p>
          
          <ul className="feature-icons">
            <li className="icon fa-download"> 
              <a href="https://static.gradinita-veseliei.ro/20200601-cerere-inscriere.pdf">Cerere TIP pentru inscriere</a>
            </li>
          </ul>
          <p>
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Proiecte</h2>
        </header>
        <div className="content">
          <p>
            Ne implicam activ in proiecte sociale si educationale.
          </p>

          <section>
            <header>
              <h3>Citește-mi 100 de povești</h3>
              <p>
                Derulat de Asociația OvidiuRo în parteneriat cu Ministerul Educației și Cercetării și Ministerul Culturii, sub egida proiectului „România educată”.
              </p>
            </header>
            <div className="content">
			
			  <p>
				Considerăm că participarea în acest proiect are o contribuție majoră în atingerea misiunii  grădiniței: „Educație pentru toți, educație pentru fiecare”.
				Urmărim permanent  asigurarea unui act educațional de performanță care să contribuie la formarea unei personalități autonome și creative, 
				la formarea unor copii sănătoși, creativi, eficienți, activi, cooperanți care să se adapteze ușor la regimul muncii școlare și la orice situație în viață, fiind dovedit faptul că literația este cel mai clar predictor al succesului școlar, iar educația timpurie cea mai eficientă investiție.
			  </p>			
			
              <div className="gallery">
                <Gallery images={img_100_pov} />
              </div>
            </div>
          </section>

        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
