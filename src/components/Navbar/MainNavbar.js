import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './MainNavbar.css'; // Asegúrate de tener un archivo CSS para los estilos personalizados
import { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';


const enableFullTextSearchBox = (config) => {
   config.forEach(({ boxId, deptId, idxId, btnId, searchTerm, placeholder }) => {
     const box = document.getElementById(boxId);
     const dept = document.getElementById(deptId);
     const idx = document.getElementById(idxId);
     const btn = document.getElementById(btnId);
 
     if (box && dept && idx && btn) {
       btn.addEventListener('click', () => {
         const query = box.value;
         const department = dept.value;
         const index = idx.value;
         const url = `${searchTerm}?q=${query}&dept=${department}&idx=${index}`;
         window.location.href = url;
       });
 
       box.setAttribute('placeholder', placeholder);
     }
   });
 };

function MainNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  
  const handleMouseEnter = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
   enableFullTextSearchBox([
      {
        boxId: 'ftBox49e17e80ad274210b55f27644f53a23d',
        deptId: 'ftDept49e17e80ad274210b55f27644f53a23d',
        idxId: 'ftIdx49e17e80ad274210b55f27644f53a23d',
        btnId: 'ftBtn49e17e80ad274210b55f27644f53a23d',
        searchTerm: '/SEARCHTERM',
        placeholder: 'BUSCAR'
      },
      {
        boxId: 'ftBoxMobile49e17e80ad274210b55f27644f53a23d',
        deptId: 'ftDeptMobile49e17e80ad274210b55f27644f53a23d',
        idxId: 'ftIdxMobile49e17e80ad274210b55f27644f53a23d',
        btnId: 'ftBtnMobile49e17e80ad274210b55f27644f53a23d',
        searchTerm: '/SEARCHTERM',
        placeholder: 'BUSCAR'
      }
    ]);
 }, []);

  return (
    <>
    <div className="search search-mobile" style={{borderBottom: '1px solid'}}>
        <div className="search__container">
          <i className="fal fa-search search__icon"></i>
          <fieldset className="busca">
            <legend>Buscar</legend>
            <label>Buscar</label>
            <select id="ftDeptMobile49e17e80ad274210b55f27644f53a23d">
              <option value="">Todo o Site</option>
              <option value="1">Ropa</option>
              <option value="4">Accesorios</option>
              <option value="5">Zapatos</option>
              <option value="127">Hombre</option>
              <option value="167">Mujer</option>
              <option value="177">Niñas</option>
            </select>
            <input
              placeholder="Buscar"
              type="hidden"
              id="ftIdxMobile49e17e80ad274210b55f27644f53a23d"
              value=""
            />
            <input
              id="ftBoxMobile49e17e80ad274210b55f27644f53a23d"
              className="fulltext-search-box ui-autocomplete-input"
              type="text"
              size="20"
              accessKey="b"
              autoComplete="off"
              role="textbox"
              aria-autocomplete="list"
              aria-haspopup="true"
            />
            <input
              id="ftBtnMobile49e17e80ad274210b55f27644f53a23d"
              type="button"
              value="Buscar"
              className="btn-buscar"
            />
          </fieldset>
          <ul
            className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all"
            role="listbox"
            aria-activedescendant="ui-active-menuitem"
            style={{ zIndex: 10, top: '0px', left: '0px', display: 'none' }}
          ></ul>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-main">
      <Container fluid style={{flexWrap: 'nowrap'}} className='navbar-container'>
        <Button variant="primary" className='submenu-button toggle-submenu-button' onClick={toggleSubMenu} >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" fill="black" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        </Button>
        <Navbar.Brand href="#home" className='logo-content' style={{margin: 'auto'}}>
         <img className='logo__image w-100 img-fluid' src={process.env.PUBLIC_URL + '/landing/' + 'logo.png'} alt="Item 1" />
   
          </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className='responsive-navbar-nav' /> */}
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton style={{position: 'absolute', top: '0', right: '0', zIndex: '1'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  {/* Offcanvas */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="me-auto menu productLines_menu">
                  <Nav.Link className='productLines__item' href="#features">MUJER</Nav.Link>
                  <Nav.Link className='productLines__item' href="#pricing">HOMBRE</Nav.Link>
               </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu productLines_menu">
            <Nav.Link className='productLines__item' href="#features">MUJER</Nav.Link>
            <Nav.Link className='productLines__item' href="#pricing">HOMBRE</Nav.Link>
            
          </Nav>
        </Navbar.Collapse> */}
        <Nav className='navbar-nav-end secondaryNav__menu secondaryNav' style={{flexDirection: 'row', width: 'auto'}}>
        <div className="search">
      <div className="search__container">
        <i className="fal fa-search search__icon"></i>
        <fieldset className="busca">
          <legend>Buscar</legend>
          <label>Buscar</label>
          <select id="ftDept49e17e80ad274210b55f27644f53a23d">
            <option value="">Todo o Site</option>
            <option value="1">Ropa</option>
            <option value="4">Accesorios</option>
            <option value="5">Zapatos</option>
            <option value="127">Hombre</option>
            <option value="167">Mujer</option>
            <option value="177">Niñas</option>
          </select>
          <input
            placeholder="Buscar"
            type="hidden"
            id="ftIdx49e17e80ad274210b55f27644f53a23d"
            value=""
          />
          <input
            id="ftBox49e17e80ad274210b55f27644f53a23d"
            className="fulltext-search-box ui-autocomplete-input"
            type="text"
            size="20"
            accessKey="b"
            autoComplete="off"
            role="textbox"
            aria-autocomplete="list"
            aria-haspopup="true"
          />
          <input
            id="ftBtn49e17e80ad274210b55f27644f53a23d"
            type="button"
            value="Buscar"
            className="btn-buscar"
          />
        </fieldset>
        <ul
          className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all"
          role="listbox"
          aria-activedescendant="ui-active-menuitem"
          style={{ zIndex: 10, top: '0px', left: '0px', display: 'none' }}
        ></ul>
      </div>
         </div>
            <Nav.Link href="#deets" style={{display: 'flex', alignItems: 'center'}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
               </svg>
               <span class="secondaryNav__label" style={{margin: 'auto'}}>Iniciar Sesión</span>
            </Nav.Link>
            <Nav.Link style={{margin: 'auto', paddingTop: 0, paddingBottom: 0}} eventKey={2} href="#memes" className='secondaryNav__item'>
               <svg style={{height: 'fit-content', margin: 'auto'}} xmlns="http://www.w3.org/2000/svg" width="25" height="fit-content" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
               </svg>
            </Nav.Link>
            <Nav.Link style={{paddingTop: 0, paddingBottom: 0, display: 'flex', height: 'fit-content'}} eventKey={2} href="#memes" className='secondaryNav__item my-auto'>
               <div style={{position: 'relative', margin: 'auto'}}>
                  <svg style={{height: 'fit-content'}}  xmlns="http://www.w3.org/2000/svg" width="24" height="fit-content" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <div class="secondaryNav__badge"><span>0</span></div>
               </div>
               
               <span class="secondaryNav__label" style={{margin: 'auto', paddingLeft: '5px'}}>Carrito</span>
               
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    {showSubMenu && (
        <div className="submenu">
          <Container fluid className='p-0'>
          <div class="mainNav__container menuWoman">
   <div class="mainNav__mobileAssets">
      <button class="button--close" aria-label="Close Menu" type="button"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
      <div class="productLines">
         <ul class="menu productLines_menu">
            <li class="productLines__item">
               {/* <!--<a href="/ropa?O=OrderByTopSaleDESC">Mujer</a>--><a href="/ropa?O=OrderByReleaseDateDESC">Mujer</a> */}
            </li>
            <li class="productLines__item">
               {/* <!--<a href="/hombre?O=OrderByReleaseDateDESC">Hombre</a>--><a href="/man">Hombre</a> */}
            </li>
         </ul>
      </div>
      <div class="productLines clock" style={{cursor:"pointer"}} id="contadorGeneral">
         <ul class="menu productLines_menu clock-flat">
            <li class="productLines__item horas reloj"></li>
            <li class="productLines__item minutos reloj"></li>
            <li class="productLines__item segundos reloj"></li>
            <li class="productLines__item item"></li>
         </ul>
      </div>
   </div>
   <ul class="menu mainNav__menu dropdown" data-responsive-menu="drilldown large-dropdown" data-back-button="<li class=&quot;js-drilldown-back&quot;><a tabindex=&quot;0&quot;>Atrás</a></li>" data-auto-height="true" data-animate="slide-in-down slide-out-up" id="main-menu" role="menubar" data-n="cxydip-n" data-mutate="dgocjn-responsive-menu" data-events="mutate">
      {/* <!-- MEGA MENU --> */}
      <li id='Nuevo' onMouseEnter={() => {handleMouseEnter('prueba-nuevo')}} onMouseLeave={handleMouseLeave} class="megamenu megamenu-nuevo is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Nuevo" data-is-click="false">
         <a href="/nuevo" class="label-nuevo">Nuevo</a>
         <ul id="prueba-nuevo" 
         className={`vertical menu submenu is-dropdown-submenu first-sub ${activeMenu === 'prueba-nuevo' ? 'js-dropdown-active' : ''}`}
         data-submenu="" role="menubar">
            <li class="navigation is-submenu-item is-dropdown-submenu-item" role="menuitem">
               <div class="grid-x grid-margin-x">
                  <div class="cell large-3">
                     <h4 class="submenu-title">Nuevos Productos</h4>
                     <div class="links-group"><a class="bold" href="/nuevo"><span>Ver todo</span></a><a href="/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC"><span>Camisas y
                        blusas</span></a><a href="/jeans?O=OrderByReleaseDateDESC"><span>Jeans</span></a><a href="/ropa/chaquetas?O=OrderByReleaseDateDESC"><span>Chaquetas</span></a><a href="/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC"><span>Pantalones
                        e
                        inferiores</span></a><a href="/zapatos?O=OrderByReleaseDateDESC"><span>Zapatos</span></a><a href="/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC"><span>Bolsos</span></a>
                     </div>
                  </div>
                  <div class="cell large-9 megamenu-large">
                     <h4 class="submenu-title">Nuevas Colecciones</h4>
                     <div class="grid-x">
                        <div class="cell small-2 historia ofertas hide"><a href="/ofertas"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/cat-ropa-ofertas.jpg?v=637229858719100000" alt="Ropa Ofertas" title="Ropa Ofertas"/><span class="title">Ofertas</span></a></div>
                        
                        <div class="cell small-2 historia"><a href="/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Blusas-100423.jpg?v=638167331851670000" alt="Ropa Blusas" title="Ropa Blusas"/><span class="title">Blusas</span></a></div>
                        <div class="cell small-2 historia"><a href="/ropa/body?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Bodies-100423.jpg?v=638167331857270000" alt="Ropa Bodies" title="Ropa Bodies"/><span class="title">Bodies</span></a></div>
                        <div class="cell small-2 historia"><a href="/ropa/vestidos?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Vestidos-100423.jpg?v=638167331789200000" alt="Ropa Vestidos" title="Ropa Vestidos"/><span class="title">Vestidos</span></a></div>
                        <div class="cell small-2 historia"><a href="/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Pantalones-100423.jpg?v=638167331724970000" alt="Ropa Pantalones" title="Ropa Pantalones"/><span class="title">Pantalones</span></a></div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <li id='Jeans' onMouseEnter={() => {handleMouseEnter('prueba-jeans') }} onMouseLeave={handleMouseLeave} class="megamenu menuItemMujer is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Jeans" data-is-click="false">
         <a href="/jeans?O=OrderByReleaseDateDESC">Jeans</a>
         <ul id="prueba-jeans" 
         className={`vertical menu submenu is-dropdown-submenu first-sub ${activeMenu === 'prueba-jeans' ? 'js-dropdown-active' : ''}`} 
         data-submenu="" role="menubar">
            <li class="navigation is-submenu-item is-dropdown-submenu-item" role="menuitem">
               <div class="grid-x grid-margin-x">
                  <div class="cell large-4">
                     <h4 class="submenu-title">Jeans</h4>
                     <div class="grid-x grid-margin-x">
                        <div class="cell large-6 links-group"><a class="bold ofertas hide" href=""><span>Ofertas</span></a><a class="bold" href="/jeans?O=OrderByReleaseDateDESC"><span>Ver
                           todo</span></a><a href="/jeans/bota-campana?O=OrderByReleaseDateDESC"><span>Bota
                           campana</span></a><a href="/jeans/bota-recta?O=OrderByReleaseDateDESC"><span>Bota
                           recta</span></a><a href="/jeans/skinny?O=OrderByReleaseDateDESC"><span>Skinny</span></a><a href="/jeans/palazzo?O=OrderByReleaseDateDESC"><span>Palazzo</span></a>
                        </div>
                        <div class="cell large-6 links-group"><a href="" class="hide"><span>Capri</span></a><a href="/jeans/ultra-slim-fit?O=OrderByReleaseDateDESC"><span>Ultra slim
                           fit</span></a><a href="/jeans/jeggings?O=OrderByReleaseDateDESC"><span>Jeggings</span></a><a href="/jeans/cropped?O=OrderByReleaseDateDESC"><span>Cropped</span></a><a href="/jeans/boyfriend?O=OrderByReleaseDateDESC"><span>Boyfriend</span></a>
                        </div>
                     </div>
                  </div>
                  <div class="cell large-8 megamenu-large">
                     <h4 class="submenu-title">Basic Jeans</h4>
                     <div class="grid-x grid-margin-x">
                        <div class="cell small-3 submenu-coleccion">
                           <img src="https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Taylor-060720.jpg?v=637296638365470000" alt="Basic Jeans - Taylor" title="Basic Jeans - Taylor"/>
                           <a href="/basic-jeans/2024/taylor/producto" class="detalles flex-container flex-dir-column align-center-middle">
                              <small>Basic Jeans</small>
                              <h4>Taylor</h4>
                              <span class="button">Comprar</span>
                           </a>
                        </div>
                        <div class="cell small-3 submenu-coleccion">
                           <img src="https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Bardot-060720.jpg?v=637296638356970000" alt="Basic Jeans - Bardot" title="Basic Jeans - Bardot"/>
                           <a href="/basic-jeans/2024/bardot-high/producto" class="detalles flex-container flex-dir-column align-center-middle">
                              <small>Basic Jeans</small>
                              <h4>Bardot</h4>
                              <span class="button">Comprar</span>
                           </a>
                        </div>
                        <div class="cell small-3 submenu-coleccion">
                           <img src="https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Crawford-060720.jpg?v=637296638345600000" alt="Basic Jeans - Crawford" title="Basic Jeans - Crawford"/>
                           <a href="/basic-jeans/2024/crawford-light/producto" class="detalles flex-container flex-dir-column align-center-middle">
                              <small>Basic Jeans</small>
                              <h4>Crawford</h4>
                              <span class="button">Comprar</span>
                           </a>
                        </div>
                        <div class="cell small-3 submenu-coleccion">
                           <img src="https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Loren-060720.jpg?v=637296638336370000" alt="Basic Jeans - Loren" title="Basic Jeans - Loren"/>
                           <a href="/basic-jeans/2024/producto/" class="detalles flex-container flex-dir-column align-center-middle">
                              <small>Basic Jeans</small>
                              <h4>VER TODO</h4>
                              <span class="button">Comprar</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <li id='Ropa' onMouseEnter={() => { handleMouseEnter('prueba-ropa')}} onMouseLeave={handleMouseLeave} class="megamenu menuItemMujer is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Ropa" data-is-click="false">
         <a href="/ropa?O=OrderByReleaseDateDESC">Ropa</a>
         <ul id="prueba-ropa" 
         className={`vertical menu submenu is-dropdown-submenu first-sub ${activeMenu === 'prueba-ropa' ? 'js-dropdown-active' : ''}`} 
         data-submenu="" role="menubar" >
            <li class="navigation is-submenu-item is-dropdown-submenu-item" role="menuitem">
               <div class="grid-x grid-margin-x">
                  <div class="cell large-6">
                     <h4 class="submenu-title">Ropa</h4>
                     <div class="grid-x grid-margin-x">
                        <div class="cell large-4 links-group">
                           <a class="bold ofertas hide" href=""><span>Ofertas</span></a>
                           {/* <!--DESCOMENTAR ESTE--> */}
                           {/* <!-- <a class="bold" href="/nuevo"><span>Nuevo</span></a> --> */}
                           <a class="bold" href="/ropa?O=OrderByReleaseDateDESC"><span>Ver
                           todo</span></a><a href="/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC"><span>Camisas y
                           blusas</span></a><a href="/ropa/body?O=OrderByReleaseDateDESC"><span>Bodies</span></a><a href="/ropa/blazer?O=OrderByReleaseDateDESC"><span>Blazers</span></a><a href="/ropa/chaquetas?O=OrderByReleaseDateDESC"><span>Chaquetas</span></a>
                        </div>
                        <div class="cell large-4 links-group"><a href="/ropa/busos?O=OrderByReleaseDateDESC"><span>Buzos</span></a><a href="/ropa/ponchos-y-sobretodos?O=OrderByReleaseDateDESC"><span>Ponchos
                           y
                           sobretodos</span></a><a href="/ropa/chalecos?O=OrderByReleaseDateDESC"><span>Chalecos</span></a><a href="/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC"><span>Pantalones
                           y
                           leggings</span></a><a href="/ropa/shorts?O=OrderByReleaseDateDESC"><span>Shorts</span></a><a href="/ropa/vestidos?O=OrderByReleaseDateDESC"><span>Vestidos</span></a>
                        </div>
                        <div class="cell large-4 links-group">
                           <a href="/ropa/enterizos-y-conjuntos?O=OrderByReleaseDateDESC"><span>Enterizos
                           y conjuntos</span></a><a href="/ropa/faldas?O=OrderByReleaseDateDESC"><span>Faldas</span></a><a href="/indispensables"><span>Básicos</span></a><a href="/ropa/abrigos-y-gabanes"><span>Abrigos y gabanes</span></a>
                           {/* <!-- Agregado vestidos de baño --> */}
                           <a href="/ropa/vestidos-de-bano?O=OrderByReleaseDateDESC"><span>Vestidos de baño</span></a>
                        </div>
                     </div>
                  </div>
                  <div class="cell large-6 megamenu-large">
                     <h4 class="submenu-title">Categorías Destacadas</h4>
                     <div class="grid-x">
                        <div class="cell small-3 historia ofertas hide"><a href="/ofertas"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/cat-ropa-ofertas.jpg?v=637229858719100000" alt="Ropa Ofertas" title="Ropa Ofertas"/><span class="title">Ofertas</span></a></div>
                        <div class="cell small-3 historia nuevo hide">
                          <a href="/nuevo"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Nuevo-100423.jpg?v=638167331719630000" alt="Ropa Nueva" title="Ropa Nueva"/><span class="title">Nuevo</span></a>
                        </div>
                        <div class="cell small-3 historia"><a href="/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Blusas-100423.jpg?v=638167331851670000" alt="Ropa Blusas" title="Ropa Blusas"/><span class="title">Blusas</span></a></div>
                        <div class="cell small-3 historia"><a href="/ropa/body?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Bodies-100423.jpg?v=638167331857270000" alt="Ropa Bodies" title="Ropa Bodies"/><span class="title">Bodies</span></a></div>
                        <div class="cell small-3 historia"><a href="/ropa/vestidos?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Vestidos-100423.jpg?v=638167331789200000" alt="Ropa Vestidos" title="Ropa Vestidos"/><span class="title">Vestidos</span></a></div>
                        <div class="cell small-3 historia"><a href="/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC"><img class="historia-img" src="https://studiofco.vteximg.com.br/arquivos/Categoria-Ropa-Pantalones-100423.jpg?v=638167331724970000" alt="Ropa Pantalones" title="Ropa Pantalones"/><span class="title">Pantalones</span></a></div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <li id='Zapatos' onMouseEnter={() => { handleMouseEnter('prueba-zapatos')}} onMouseLeave={handleMouseLeave} class="megamenu menuItemMujer is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Zapatos" data-is-click="false">
         <a href="/zapatos?O=OrderByReleaseDateDESC">Zapatos</a>
         <ul id="prueba-zapatos" 
         className={`vertical menu submenu is-dropdown-submenu first-sub ${activeMenu === 'prueba-zapatos' ? 'js-dropdown-active' : ''}`} 
         data-submenu="" role="menubar" >
            <li class="navigation is-submenu-item is-dropdown-submenu-item" role="menuitem">
               <div class="grid-x grid-margin-x">
                  <div class="cell large-4">
                     <h4 class="submenu-title">Zapatos</h4>
                     <div class="grid-x grid-margin-x">
                        <div class="cell large-6 links-group">
                           <a class="bold" href="/zapatos?O=OrderByReleaseDateDESC"><span>Ver
                           todo</span></a>
                           {/* <!-- <a
                              href="/zapatos/bailarinas?O=OrderByReleaseDateDESC"><span>Bailarinas</span></a> --> */}
                              <a href="/zapatos/botas?O=OrderByReleaseDateDESC"><span>Botas</span></a>
                        </div>
                        <div class="cell large-6 links-group"><a href="/zapatos/sandalias?O=OrderByReleaseDateDESC"><span>Sandalias</span></a><a href="/zapatos/tenis?O=OrderByReleaseDateDESC"><span>Tenis</span></a><a href="/zapatos/zapatos-cerrados?O=OrderByReleaseDateDESC"><span>Zapatos
                           cerrados</span></a>
                        </div>
                     </div>
                  </div>
                  <div class="cell large-8 megamenu-large">
                     <h4 class="submenu-title">Categorias Destacadas</h4>
                     <div class="grid-x ">
                        <div class="cell small-2 historia nuevo"><a href="/zapatos/sandalias?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Zapatos-Sandalias-100423.jpg?v=638167331737100000" alt="Sandalias" title="Sandalias" class="historia-img "/><span class="title">Sandalias</span></a></div>
                        <div class="cell small-2 historia nuevo"><a href="/zapatos/tenis?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Zapatos-Tenis-100423.jpg?v=638167331735230000" alt="Tenis" title="Tenis" class="historia-img "/><span class="title">Tenis</span></a></div>
                        <div class="cell small-2 historia nuevo"><a href="/zapatos/botas?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Zapatos-Botas-100423.jpg?v=638167331727370000" alt="Botas" title="Botas" class="historia-img "/><span class="title">Botas</span></a></div>
                        <div class="cell small-2 historia nuevo"><a href="/zapatos/zapatos-cerrados?O=OrderByReleaseDateDESC&amp;PS=12"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Zapatos-Zapato-Cerrado-100423.jpg?v=638167331734900000" alt="Botas" title="Botas" class="historia-img "/><span class="title">Zapatos cerrados</span></a></div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <li id='Accesorios' onMouseEnter={() => { handleMouseEnter('prueba-accesorios')}} onMouseLeave={handleMouseLeave} class="megamenu menuItemMujer is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Accesorios" data-is-click="false">
         <a href="/accesorios?O=OrderByReleaseDateDESC">Accesorios</a>
         <ul id="prueba-accesorios" 
         className={`vertical menu submenu is-dropdown-submenu first-sub ${activeMenu === 'prueba-accesorios' ? 'js-dropdown-active' : ''}`}
         data-submenu="" role="menubar">
            <li class="navigation is-submenu-item is-dropdown-submenu-item" role="menuitem">
               <div class="grid-x grid-margin-x">
                  <div class="cell large-4">
                     <h4 class="submenu-title">Accesorios</h4>
                     <div class="grid-x grid-margin-x">
                        <div class="cell large-6 links-group"><a class="bold" href="/accesorios?O=OrderByReleaseDateDESC"><span>Ver
                           todo</span></a><a href="/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC"><span>Bolsos
                           y
                           carteras</span></a><a href="/accesorios/bisuteria"><span>Bisuteria</span></a>
                        </div>
                        <div class="cell large-6 links-group"><a href="/accesorios/correas?O=OrderByReleaseDateDESC"><span>Correas</span></a><a href="/accesorios/accesorios?O=OrderByReleaseDateDESC"><span>Otros</span></a></div>
                     </div>
                  </div>
                  <div class="cell large-8 megamenu-large">
                     <h4 class="submenu-title">Categorias Destacadas</h4>
                     <div class="grid-x ">
                        <div class="cell small-2 historia nuevo"><a href="/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Accesorio-Bolsos-100423.jpg?v=638167339356030000" alt="Bolsos" title="Bolsos" class="historia-img "/><span class="title">Bolsos</span></a></div>
                        <div class="cell small-2 historia nuevo"><a href="/accesorios/correas?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Accesorios-Correas-100423.jpg?v=638167331785000000" alt="Correas" title="Correas" class="historia-img "/><span class="title">Correas</span></a></div>
                        <div class="cell small-2 historia nuevo"><a href="/accesorios/accesorios?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Accesorios-Sombreros-100423.jpg?v=638167346166830000" alt="Gafas" title="Sombreros" class="historia-img "/><span class="title">Accesorios</span></a></div>
                        <div class="cell small-2 historia nuevo"><a href="/accesorios/bisuteria?O=OrderByReleaseDateDESC"><img src="https://studiofco.vteximg.com.br/arquivos/Categoria-Accesorios-Bisuteria-100423.jpg?v=638167331854600000" alt="Gafas" title="Gafas" class="historia-img "/><span class="title">Bisutería</span></a></div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <li role="menuitem"><a href="/indispensables">Básicos</a></li>
      <li role="menuitem"><a href="/colecciones">Colecciones</a></li>
      <li role="menuitem"><a href="/fit-finder" class="">Fit Finder</a></li>
      <li role="menuitem"><a href="/tencard" class="btn-tencard">Ten Card</a></li>

      <li id='Man' onMouseEnter={() => { handleMouseEnter('prueba-man') }} onMouseLeave={handleMouseLeave} class="megamenu menuItemMujer is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="MAN" data-is-click="false">
         <a href="/man">MAN</a>
         <ul id="prueba-man" 
         className={`vertical menu submenu is-dropdown-submenu first-sub ${activeMenu === 'prueba-man' ? 'js-dropdown-active' : ''}`}
         data-submenu="" role="menubar">
            <li class="navigation is-submenu-item is-dropdown-submenu-item" role="menuitem">
               <div class="grid-x grid-margin-x" >
                  <div class="cell large-4">
                     <h4 class="submenu-title">MAN</h4>
                     <div class="grid-x grid-margin-x" style={{width: 'max-content'}}>
                        <div class="cell large-6 links-group"><a class="bold" href="/hombre?O=OrderByReleaseDateDESC"><span>Ver
                           todo</span></a><a href="/man/superiores"><span>Superiores</span></a><a href="/man/inferiores"><span>Inferiores</span></a><a href="/man/complementos"><span>Complementos</span></a><a href="/man/calzado"><span>Calzado</span></a>
                        </div>
                        <div class="cell large-6 links-group"><a href="/man/casual"><span>Casual</span></a><a href="/man/formal"><span>Formal</span></a></div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </li>

      <li role="menuitem">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.css"/>
         <style>
            
         </style>
         {/* <!--<a href="/ofertas/70-off" class="mainNav__item mainNav__item-highlight" style=" color: #ce3333!important;"><b>70% OFF</b></a>--> */}
         <a id="stf-btn-amore-mio" href="/gift-card" class="mainNav__item mainNav__item-highlight" style={{color: "#000 !important"}}><b> Gift Card</b></a>
         {/* <!----><!-- ATENÇÃO, esse erro prejudica a performance do seu site, o conteudo de nome Gift Card não foi renderizado por nao ser um XDocument válido, erro: - The 'link' start tag on line 1 position 8 does not match the end tag of 'html'. Line 25, position 10.--> */}
      </li>
      <li role="menuitem"></li>
   </ul>
</div>
          </Container>
        </div>
      )}
    </>
  );
}

export default MainNavbar;