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
            Unitate de invatamant pentru ciclul primar, care ofera program prelungit si masa. 
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
            In casul in care doriti sa intrati <strong>in contact</strong> cu noi, o puteti face prin telefon sau email. Program Lu-Vi, 9.00 - 16.00.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-phone"> 
              <a href="tel:0769667334">0769667334</a>
            </li>
            
            <li className="icon fa-envelope">
              <a href="mailto:contact@gradinita-veseliei.ro">contact@gradinita-veseliei.ro</a>
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
