import React, { useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Archivo CSS para estilos personalizados

const Footer = () => {
   const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };
  return (
    <>
    <footer>
    <div class="footer grid-x" id="footerSectionStf">
      <section class="newsletterr cell medium-6 large-4">
         <div class="newsletter__container">
            <p class="text1-news">¡Regístrate hoy y recibe un descuento del 20% en tu primera compra!</p>
            <h2 class="newsletter__title">NEWS LETTER</h2>
            <p>Recibir información de moda para:</p>
            <form class="form" action="">
               <div class="form__group form__group--block">
                  <div class="checkbox"><input class="checkbox__input" id="newsletter-mujer" type="checkbox" name="intereses" value="Mujer" /><label class="checkbox__icon" for="newsletter-mujer"></label><label class="checkbox__label" for="newsletter-mujer">Mujeres</label></div>
                  <div class="checkbox"><input class="checkbox__input" id="newsletter-hombre" type="checkbox" name="intereses" value="Hombre" /><label class="checkbox__icon" for="newsletter-hombre"></label><label class="checkbox__label" for="newsletter-hombre">Hombres</label></div>
                  <div class="checkbox"><input class="checkbox__input" id="newsletter-ninos" type="checkbox" name="intereses" value="Niños" /><label class="checkbox__icon" for="newsletter-ninos"></label><label class="checkbox__label" for="newsletter-ninos">Niños</label></div>
               </div>
               <div class="form__group form__group--block">
                <input class="newsletter__input" type="text" id="newsletter-birthdate" name="birthday" placeholder="Fecha de nacimiento: DD/MM/AAAA" onfocus="(this.type='date')" style={{display: "inline"}} /><label id="fecha-nacimiento-error" for="fecha-nacimiento"></label><input class="newsletter__input" type="email" id="newsletter-email" name="email" placeholder="Correo electrónico..." /><input type="submit" class="button" value="SUSCRIBIRME" name="submit" style={{backgroundColor: "black;"}} /><label id="newsletter-email-error" for="newsletter-email"></label>
                </div>
               <div class="form__group form__group--block">
                  <div class="checkbox">
                     <input class="checkbox__input" type="checkbox" id="newsletter-politica" name="politica" /><label class="checkbox__icon" for="newsletter-politica"></label>
                     <label class="checkbox__label form__label form__label--small" for="newsletter-politica">
                        Sí autorizo a STF GROUP S.A. el tratamiento de mis datos personales, de acuerdo a las finalidades de su política de tratamiento 
                        de datos personales <a href="/politicas/politicas-proteccion-datos" target="_blank">(Consúltala aquí).</a>
                        <p>Certifico que he sido informado sobre los términos y condiciones de la página web 
                           (<a href="/politicas/terminos-condiciones" target="_blank">Consulta aquí los términos y condiciones</a>)
                        </p>
                     </label>
                     <label id="newsletter-politica-error" for="newsletter-politica"></label>
                  </div>
               </div>
            </form>
         </div>
      </section>
      <div class="content-footer-menu-desktop cell medium-6 large-8">
         <div class="footer__social"><a href="https://www.facebook.com/studiofinternational"><i class="fab fa-facebook-square fa-2x"></i></a><a href="https://www.instagram.com/studiofcolombia/"><i class="fab fa-instagram fa-2x"></i></a><a href="https://twitter.com/studiofcolombia"><i class="fab fa-twitter fa-2x"></i></a><a href="https://www.youtube.com/channel/UCvj2Mq1S1g-5-Jp87l_4fHg/videos"><i class="fab fa-youtube fa-2x"></i></a></div>
         <div class="footer__container grid-x">
            <div class="cell-medium 4">
               <div class="footer__linkss">
                  <ul class="footer__menu">
                     <li>
                        <h4 class="footermenu-title">Descubre Studio F</h4>
                        <ul class="footer__submenu links-group">
                           <li><a href="/descubre-studiof/nuestra-marca"><span>Nuestra marca</span></a></li>
                           {/* <!-- <li><a href="/descubre-studiof/distribuidores"><span>Distribuidores</span></a></li> --> */}
                           <li><a href="/descubre-studiof/reconocimientos"><span>Reconocimientos</span></a></li>
                           <li><a href="/trabaja-con-nosotros"><span>Trabaja con Nosotros</span></a></li>
                           <li><a href="/nuestra-marca-en-latinoamerica"><span>Nuestra marca en Latinoamérica</span></a></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="cell-medium 4">
               <div class="footer__linkss">
                  <ul class="footer__menu">
                     <li>
                        <h4 class="footermenu-title">Links de interés</h4>
                        <ul class="footer__submenu links-group">
                           <li class="label-nuevo"><a href="/gift-card" target="_blank">Gift Card Studio F</a></li>
                           <li><a href="https://www.credi10.com.co/originacionecommerce" target="_blank"><span>Solicita tu cupo Credi10</span></a></li>
                           <li><a href="/servicio-al-cliente">Servicio al cliente</a></li>
                           <li><a href="/notificaciones-judiciales">Notificaciones judiciales</a></li>
                           <li><a target="_blank" href="https://studiofsoporte.zendesk.com/hc/es/requests/new">Radicar PQRS</a></li>
                           <li><a href="/tencard"><span>Ten Card Studio F</span></a></li>
                           {/* <!--<li><a href="/personal-shopper"><span>Personal Shopper</span></a></li> --> */}
                           <li><a href="https://www.konnecta.net/iprov/logueo/stfgroup/iProveedor.htm" target="_blank"><span>Proveedores</span></a></li>
                           <li><a href="/tiendas"><span>Localiza tu tienda</span></a></li>
                           <li><a href="/links-interes/preguntas-frecuentes"><span>Preguntas Frecuentes</span></a></li>
                           <li><a href="/ayuda/canal-de-transparencia"><span>Canal de Transparencia</span></a></li>
                           <li><a href="/rastreo"><span>Rastrear pedido</span></a></li>
                           <li><a href="https://www.credi10.com.co/originacionecommerce" target="_blank">Solicita tu cupo Credi10</a></li>
                           <li><a href="https://credi10.com.co/"><span> Recaudo Credi 10 </span></a></li>
                           <li><a href="/devoluciones"><span> Devoluciones </span></a></li>
                           <li><a href="/sitemap"><span> Mapa del sitio </span></a></li>
                           {/* <!-- <li><a href="https://solicitudfe.studiof.com.co:22254" target="_blank"><span>Solicita Tu Factura Electrónica</span></a></li> --> */}
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="cell-medium 4">
               <div class="footer__linkss ">
                  <ul class="footer__menu">
                     <li>
                        <h4 class="footermenu-title">Políticas</h4>
                        <ul class="footer__submenu links-group">
                           <li><a href="/politicas/terminos-condiciones"><span>Términos y condiciones</span></a></li>
                           <li><a href="/politicas/politicas-privacidad"><span>Aviso de privacidad</span></a></li>
                           <li><a href="/politicas/politicas-proteccion-datos"><span>Políticas de Protección de Datos</span></a></li>
                           <li><a href="/politicas/politica-uso-cookies"><span>Política de Uso de Cookies</span></a></li>
                           <li><a href="/politicas/politica-cambios"><span>Política comercial de cambios</span></a></li>
                           <li><a href="/politicas/Promociones-y-eventos"><span>Promociones y Eventos</span></a></li>
                           <li><a href="/politicas/derecho-a-retracto"><span>Derecho a retracto</span></a></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <ul className="accordion footer__menu" data-accordion="true" data-deep-link="true" data-update-history="true" data-deep-link-smudge="true" id="deeplinked-accordion-2" role="tablist" data-n="rsxge6-n">
      <li className={`accordion-item ${activeAccordion === 'accordion21' ? 'is-active' : ''}`} data-accordion-item="true">
        <a
          href="#accordion21"
          className="accordion-title footermenu-title"
          aria-controls="accordion21"
          role="tab"
          id="accordion21-label"
          aria-expanded={activeAccordion === 'accordion21'}
          aria-selected={activeAccordion === 'accordion21'}
          onClick={() => handleAccordionClick('accordion21')}
        >
          Descubre Studio F
        </a>
        <div
          className="accordion-content"
          data-tab-content="true"
          id="accordion21"
          role="tabpanel"
          aria-labelledby="accordion21-label"
          aria-hidden={activeAccordion !== 'accordion21'}
          style={{ display: activeAccordion === 'accordion21' ? 'block' : 'none' }}
        >
          <ul className="footer__submenu links-group">
            <li><a href="/descubre-studiof/nuestra-marca">Nuestra marca</a></li>
            <li><a href="/descubre-studiof/reconocimientos">Reconocimientos</a></li>
            <li><a href="/trabaja-con-nosotros">Trabaja con Nosotros</a></li>
            <li><a href="/nuestra-marca-en-latinoamerica">Nuestra marca en Latinoamérica</a></li>
          </ul>
        </div>
      </li>
      <li className={`accordion-item ${activeAccordion === 'accordion22' ? 'is-active' : ''}`} data-accordion-item="true">
        <a
          href="#accordion22"
          className="accordion-title footermenu-title"
          aria-controls="accordion22"
          role="tab"
          id="accordion22-label"
          aria-expanded={activeAccordion === 'accordion22'}
          aria-selected={activeAccordion === 'accordion22'}
          onClick={() => handleAccordionClick('accordion22')}
        >
          Links de Interés
        </a>
        <div
          className="accordion-content"
          data-tab-content="true"
          id="accordion22"
          role="tabpanel"
          aria-labelledby="accordion22-label"
          aria-hidden={activeAccordion !== 'accordion22'}
          style={{ display: activeAccordion === 'accordion22' ? 'block' : 'none' }}
        >
          <ul className="footer__submenu links-group">
            <li className="label-nuevo"><a href="/gift-card" target="_blank">Gift Card Studio F</a></li>
            <li><a href="https://www.credi10.com.co/originacionecommerce" target="_blank">Solicita tu cupo Credi10</a></li>
            <li><a href="https://credi10.com.co/"><span> Recaudo Credi 10 </span></a></li>
            <li><a href="/servicio-al-cliente">Servicio al cliente</a></li>
            <li><a href="/notificaciones-judiciales">Notificaciones judiciales</a></li>
            <li><a target="_blank" href="https://studiofsoporte.zendesk.com/hc/es/requests/new">Radicar PQRS</a></li>
            <li><a href="/tencard">Ten Card Studio F</a></li>
            <li><a href="https://www.konnecta.net/iprov/logueo/stfgroup/iProveedor.htm" target="_blank">Proveedores</a></li>
            <li><a href="/tiendas">Localiza tu tienda</a></li>
            <li><a href="/links-interes/preguntas-frecuentes">Preguntas Frecuentes</a></li>
            <li><a href="/ayuda/canal-de-transparencia">Canal de Transparencia</a></li>
            <li><a href="/rastreo">Rastrear pedido</a></li>
          </ul>
        </div>
      </li>
      <li className={`accordion-item ${activeAccordion === 'accordion23' ? 'is-active' : ''}`} data-accordion-item="true">
        <a
          href="#accordion23"
          className="accordion-title footermenu-title"
          aria-controls="accordion23"
          role="tab"
          id="accordion23-label"
          aria-expanded={activeAccordion === 'accordion23'}
          aria-selected={activeAccordion === 'accordion23'}
          onClick={() => handleAccordionClick('accordion23')}
        >
          Políticas
        </a>
        <div
          className="accordion-content"
          data-tab-content="true"
          id="accordion23"
          role="tabpanel"
          aria-labelledby="accordion23-label"
          aria-hidden={activeAccordion !== 'accordion23'}
          style={{ display: activeAccordion === 'accordion23' ? 'block' : 'none' }}
        >
          <ul className="footer__submenu links-group">
            <li><a href="/politicas/terminos-condiciones">Términos y condiciones</a></li>
            <li><a href="/politicas/politicas-privacidad">Aviso de privacidad</a></li>
            <li><a href="/politicas/politicas-proteccion-datos">Políticas de Protección de Datos</a></li>
            <li><a href="/politicas/politica-uso-cookies">Política de Uso de Cookies</a></li>
            <li><a href="/politicas/politica-cambios">Política comercial de cambios</a></li>
            <li><a href="/politicas/promociones-y-eventos">Promociones y Eventos</a></li>
            <li><a href="/politicas/derecho-a-retracto">Derecho a retracto</a></li>
          </ul>
        </div>
      </li>
    </ul>
      </div>
   </div>
   <div class="footer__payment-logos">
      {/* <!--<img src="/arquivos/digicert.jpg?v=636366175579700000" alt="Digicert" />--><img src="/arquivos/METODOS-DE-PAGO-STFCO-26092023.png?v=638313573580330000" alt="Métodos de Pago - Studio F Colombia"><a href="https://www.sic.gov.co/" target="_blank"><img src="/arquivos/LOGO-SIC-COLOMBIA-02102023.png?v=638318621127030000" alt="Logo SIC Colombia"></a> */}
   </div>
   <div class="footer__canal-transparencia">
      <p>STF GROUP se encuentra comprometido con la transparencia y la legalidad en la realización de todas sus operaciones, y es por ello que pone a disposición del público en genral un canal de denuncias por posibles actos de corrupción o fraude que involucren directa o indirectamente a funcionarios de la compañía. Este canal permite realizar denuncias de forma anónima. Para acceder haz clic en el link Canal de transparencia ubicado en la parte inferior de nuestra página Links de
         Interés.
      </p>
   </div>
   {/* <!-- <div class="footer__copyright">
      © COPYRIGHT 2020 STUDIO F. TODOS LOS DERECHOS RESERVADOS.
      </div> --> */}
   <div class="footer__copyright">
      © COPYRIGHT 2020 STF GROUP S.A. TODOS LOS DERECHOS RESERVADOS.
   </div>
   {/* <!--Botón volve en mobile--> */}
   <div onclick="(window.location=document.referrer)" class="btnVolverMobile"><a><i class="fa-solid fa-arrow-left"></i>VOLVER</a></div>
    </footer>
    </>
  );
};

export default Footer;
