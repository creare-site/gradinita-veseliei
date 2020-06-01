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
              <a href="tel:0761338098">0761338098</a>
            </li>
            
            <li className="icon fa-envelope">
              <a href="mailto:contact@gradinita-veseliei.ro">contact@gradinita-veseliei.ro</a>
            </li>
          </ul>
          <p>
          </p>
        </div>
      </section>

      <section id="contact">
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
              <h3>Ajutoarele Moșului Nicolae</h3>
              <p>
                Proiect desfasurat in perioada 2-6 decembrie - II-a etapă a campaniei "Dăruiește un zâmbet".
                În ziua de Sf.Nicolae, preșcolarii din Istria, judetul Constanța, ne-au primit în cadru festiv, cu brațele larg deschise, mulțumindu-i, prin noi, lui Moș Nicolae.
                <strong>Multumim tuturor celor implicati</strong>.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
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
