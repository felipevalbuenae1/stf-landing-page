import React from 'react';
import './CarouselTest.css';

const items = [
  {
    id: "1259574",
    title: "Blazer unicolor",
    href: "https://www.studiof.com.co/blazer--unicolor-s301805a-/p",
    imgSrc: "https://studiofco.vteximg.com.br/arquivos/ids/1507825-4000-4284/-stfco-producto-Blazer-NARANJA-S301805A-1.jpg?v=638276314124770000",
    imgAlt: "-stfco-producto-Blazer-NARANJA-S301805A-1",
    discount: "50%",
    price: "$ 164,950",
    oldPrice: "$ 329,900"
  },
  {
    "id": "1260403",
    "title": "Top tejido cruzado",
    "href": "https://www.studiof.com.co/top-tejido-cruzado-s174164-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1554582-4000-4284/-stfco-producto-Camisasyblusas-ROSAPASTEL-S174164A-1.jpg?v=638458763051570000",
    "imgAlt": "-stfco-producto-Camisasyblusas-ROSAPASTEL-S174164A-1",
    "discount": null,
    "price": "$ 159,900",
    "oldPrice": null
  },  
  {
    "id": "1256270",
    "title": "Jean skinny levanta cola,tiro alto, pret",
    "href": "https://www.studiof.com.co/jean-skinny-levanta-colatiro-alto-pret-s139909c-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1333064-4000-4284/-stfco-producto-Skinny-NEGRO-S139909C-1.jpg?v=638001474958800000",
    "imgAlt": "-stfco-producto-Skinny-NEGRO-S139909C-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },
  {
    "id": "1254282",
    "title": "Jean bota campana, tiro alto, cinco bols",
    "href": "https://www.studiof.com.co/jean-bota-campana-tiro-alto-cinco-bols-s139667-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1286533-4000-4284/-stfco-producto-Bota-campana-AZULOSCURO-S139667-1.jpg?v=637804529536670000",
    "imgAlt": "-stfco-producto-Bota-campana-AZULOSCURO-S139667-1",
    "discount": null,
    "price": "$ 189,900",
    "oldPrice": null
  },
  {
    "id": "1259332",
    "title": "Blusa camisera manga larga",
    "href": "https://www.studiof.com.co/blusa-camisera-manga-larga-s173880-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1486411-4000-4284/-stfco-producto-Camisasyblusas-NATURAL-S173880-1.jpg?v=638223718476630000",
    "imgAlt": "-stfco-producto-Camisasyblusas-NATURAL-S173880-1",
    "discount": null,
    "price": "$ 259,900",
    "oldPrice": null
  },
  {
    "id": "1261357",
    "title": "Blusa camisera manga larga fit ajustado",
    "href": "https://www.studiof.com.co/blusa-camisera-manga-larga-fit-ajustado-s174173-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1508602-4000-4284/-stfco-producto-Camisasyblusas-BLANCO-S174173-1.jpg?v=638276319294700000",
    "imgAlt": "-stfco-producto-Camisasyblusas-BLANCO-S174173-1",
    "discount": null,
    "price": "$ 239,900",
    "oldPrice": null
  },  
  {
    "id": "1259161",
    "title": "Short con botones en delantero",
    "href": "https://www.studiof.com.co/short-con-botones-en-delantero-s104187-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1363989-4000-4284/-stfco-producto-Shorts-FUCSIA-S104187-1.jpg?v=638100804582700000",
    "imgAlt": "-stfco-producto-Shorts-FUCSIA-S104187-1",
    "discount": null,
    "price": "$ 198,900",
    "oldPrice": null
  },
  {
    "id": "1259890",
    "title": "Bolso manos libres acolchado con mini bo",
    "href": "https://www.studiof.com.co/bolso-manos-libres-acolchado-con-mini-bo-s411630-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1504748-4000-4284/-stfco-producto-Bolsosycarteras-VERDESELVA-S411630-1.jpg?v=638276294037630000",
    "imgAlt": "-stfco-producto-Bolsosycarteras-VERDESELVA-S411630-1",
    "discount": null,
    "price": "$ 239,900",
    "oldPrice": null
  },
  {
    "id": "1258730",
    "title": "Short basic taylor color",
    "href": "https://www.studiof.com.co/short-basic-taylor-color-s104103e-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1357795-4000-4284/-stfco-producto-Shorts-NARANJA-S104103E-1.jpg?v=638072574105900000",
    "imgAlt": "-stfco-producto-Shorts-NARANJA-S104103E-1",
    "discount": null,
    "price": "$ 159,900",
    "oldPrice": null
  },
  {
    "id": "1260154",
    "title": "Blusa crop tejida de tira con ruche",
    "href": "https://www.studiof.com.co/blusa-crop-tejida-de-tira-con-ruche-s172202b-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1505435-4000-4284/-stfco-producto-Camisasyblusas-ROJO-S172202B-1.jpg?v=638276298293470000",
    "imgAlt": "-stfco-producto-Camisasyblusas-ROJO-S172202B-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },
  {
    "id": "1258590",
    "title": "Jeggings tiro alto, cinco bolsillos, tay",
    "href": "https://www.studiof.com.co/jeggings-tiro-alto-cinco-bolsillos-tay-s740087b-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1364153-4000-4284/-stfco-producto-Pantalonesleggings-BLANCO-S740087B-1.jpg?v=638100806007430000",
    "imgAlt": "-stfco-producto-Pantalonesleggings-BLANCO-S740087B-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },  
  {
    "id": "1258294",
    "title": "Body camisero",
    "href": "https://www.studiof.com.co/body-camisero-s163019-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1357575-4000-4284/-stfco-producto-Body-ROJOTOMATE-S163019-1.jpg?v=638072572337970000",
    "imgAlt": "-stfco-producto-Body-ROJOTOMATE-S163019-1",
    "discount": null,
    "price": "$ 239,900",
    "oldPrice": null
  },
  {
    "id": "1259573",
    "title": "Blazer unicolor",
    "href": "https://www.studiof.com.co/blazer--unicolor-s301805b-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1528083-4000-4284/-stfco-producto-Blazer-AZULKLEIN-S301805B-1.jpg?v=638357710898930000",
    "imgAlt": "-stfco-producto-Blazer-AZULKLEIN-S301805B-1",
    "discount": null,
    "price": "$ 329,900",
    "oldPrice": null
  },
  {
    "id": "1256360",
    "title": "Blusa tiras con herraje",
    "href": "https://www.studiof.com.co/blusa-tiras-con-herraje-s173502-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1340588-4000-4284/-stfco-producto-Camisasyblusas-ROJOBLOOD-S173502-1.jpg?v=638037145433930000",
    "imgAlt": "-stfco-producto-Camisasyblusas-ROJOBLOOD-S173502-1",
    "discount": null,
    "price": "$ 179,900",
    "oldPrice": null
  },
  {
    "id": "1259554",
    "title": "Sandalia tacon en charol y tacon grueso",
    "href": "https://www.studiof.com.co/sandalia-tacon-en-charol-y-tacon-grueso-s342067-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1519969-4000-4284/-stfco-producto-Sandalias-NEGRO-S342067-1.jpg?v=638312746994900000",
    "imgAlt": "-stfco-producto-Sandalias-NEGRO-S342067-1",
    "discount": null,
    "price": "$ 259,900",
    "oldPrice": null
  },
  {
    "id": "1256515",
    "title": "Jeggings tiro alto, cinco bolsillos, tay",
    "href": "https://www.studiof.com.co/jeggings-tiro-alto-cinco-bolsillos-tay-s139896aa-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1324825-4000-4284/-stfco-producto-Pantalonesleggings-AZULOSCURO-S139896AA-1.jpg?v=637963483359900000",
    "imgAlt": "-stfco-producto-Pantalonesleggings-AZULOSCURO-S139896AA-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },  
  {
    "id": "1260372",
    "title": "Blusa corta, manga 3/4 puño ancho",
    "href": "https://www.studiof.com.co/blusa-corta-manga-3-4--puño-ancho-s173209b-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1519428-4000-4284/-stfco-producto-Camisasyblusas-SUPERPINK-S173209B-1.jpg?v=638312743626330000",
    "imgAlt": "-stfco-producto-Camisasyblusas-SUPERPINK-S173209B-1",
    "discount": null,
    "price": "$ 219,900",
    "oldPrice": null
  },  
  {
    "id": "1260414",
    "title": "Blusa crop manga corta con guardapolvo y",
    "href": "https://www.studiof.com.co/blusa-crop-manga-corta-con-guardapolvo-y-s173187a-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1517785-4000-4284/-stfco-producto-Camisasyblusas-AZULCOBALTO-S173187A-1.jpg?v=638300447618000000",
    "imgAlt": "-stfco-producto-Camisasyblusas-AZULCOBALTO-S173187A-1",
    "discount": null,
    "price": "$ 189,900",
    "oldPrice": null
  },
  {
    "id": "1260483",
    "title": "Pantalón clásico con correa gruesa",
    "href": "https://www.studiof.com.co/pantalon-clasico-con-correa-gruesa-s028469b-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1509546-4000-4284/-stfco-producto-Pantalonesleggings-AZULKLEIN-S028469B-1.jpg?v=638276325462730000",
    "imgAlt": "-stfco-producto-Pantalonesleggings-AZULKLEIN-S028469B-1",
    "discount": null,
    "price": "$ 298,900",
    "oldPrice": null
  },
  {
    "id": "1255304",
    "title": "Short basic taylor color",
    "href": "https://www.studiof.com.co/short-basic-taylor-color-s104072a-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1323547-4000-4284/-stfco-producto-Shorts-VERDESELVA-S104072A-1.jpg?v=637963453390070000",
    "imgAlt": "-stfco-producto-Shorts-VERDESELVA-S104072A-1",
    "discount": null,
    "price": "$ 159,900",
    "oldPrice": null
  },
  {
    "id": "1260173",
    "title": "Blusa tejida manga corta cuello redondo",
    "href": "https://www.studiof.com.co/blusa-tejida-manga-corta-cuello-redondo-s173625a-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1509372-4000-4284/-stfco-producto-Camisasyblusas-AZULPASTEL-S173625A-1.jpg?v=638276324306270000",
    "imgAlt": "-stfco-producto-Camisasyblusas-AZULPASTEL-S173625A-1",
    "discount": null,
    "price": "$ 189,900",
    "oldPrice": null
  },
  {
    "id": "1259376",
    "title": "Blusa tiras con herraje",
    "href": "https://www.studiof.com.co/blusa-tiras-con-herraje-s173502a-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1502513-4000-4284/-stfco-producto-Camisasyblusas-NEGRO-S173502A-1.jpg?v=638259807898470000",
    "imgAlt": "-stfco-producto-Camisasyblusas-NEGRO-S173502A-1",
    "discount": null,
    "price": "$ 189,900",
    "oldPrice": null
  },
  {
    "id": "1256275",
    "title": "Jean girlfriend basico kendall tiro alto",
    "href": "https://www.studiof.com.co/jean-girlfriend-basico-kendall-tiro-alto-s139979-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1323364-4000-4284/-stfco-producto-Newfits-AZULMEDIO-S139979-1.jpg?v=637957597703000000",
    "imgAlt": "-stfco-producto-Newfits-AZULMEDIO-S139979-1",
    "discount": null,
    "price": "$ 189,900",
    "oldPrice": null
  },
  {
    "id": "1258744",
    "title": "Jeggings tiro alto, cinco bolsillos,tayl",
    "href": "https://www.studiof.com.co/jeggings-tiro-alto-cinco-bolsillostayl-s740087-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1497224-4000-4284/-stfco-producto-Jeggings-AZULOSCURO-S740087-1.jpg?v=638242741465430000",
    "imgAlt": "-stfco-producto-Jeggings-AZULOSCURO-S740087-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },  
  {
    "id": "1261324",
    "title": "Blusa camisera manga larga sateen",
    "href": "https://www.studiof.com.co/blusa-camisera-manga-larga-sateen-s174182-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1505085-4000-4284/-stfco-producto-Camisasyblusas-SUPERPINK-S174182-1.jpg?v=638276296101600000",
    "imgAlt": "-stfco-producto-Camisasyblusas-SUPERPINK-S174182-1",
    "discount": null,
    "price": "$ 259,900",
    "oldPrice": null
  },  
  {
    "id": "1259262",
    "title": "Blusa tiras con herraje",
    "href": "https://www.studiof.com.co/blusa-tiras-con-herraje-s173502aa-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1499218-4000-4284/-stfco-producto-Camisasyblusas-VERDELIMA-S173502AA-1.jpg?v=638255721180270000",
    "imgAlt": "-stfco-producto-Camisasyblusas-VERDELIMA-S173502AA-1",
    "discount": null,
    "price": "$ 179,900",
    "oldPrice": null
  },
  {
    "id": "1256802",
    "title": "Jean ultraslim crawford light tiro medio",
    "href": "https://www.studiof.com.co/jean-ultraslim-crawford-light-tiro-medio-s138317gm-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1370652-4000-4284/-stfco-producto-Ultra-Slim-Fit-BLANCO-S138317GM-1.jpg?v=638115758155100000",
    "imgAlt": "-stfco-producto-Ultra-Slim-Fit-BLANCO-S138317GM-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },
  {
    "id": "1259635",
    "title": "Jean ultraslim crawford, pretina ancha c",
    "href": "https://www.studiof.com.co/jean-ultraslim-crawford-pretina-ancha-c-s740132-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1504074-4000-4284/-stfco-producto-UltraSlimFit-NEGRO-S740132-1.jpg?v=638276260121170000",
    "imgAlt": "-stfco-producto-UltraSlimFit-NEGRO-S740132-1",
    "discount": null,
    "price": "$ 259,900",
    "oldPrice": null
  },
  {
    "id": "1258267",
    "title": "Camisera manga larga",
    "href": "https://www.studiof.com.co/camisera-manga-larga-cartera-escondida-s173722-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1376858-4000-4284/-stfco-producto-Camisasyblusas-AZULKLEIN-S173722-1.jpg?v=638167347678400000",
    "imgAlt": "-stfco-producto-Camisasyblusas-AZULKLEIN-S173722-1",
    "discount": null,
    "price": "$ 239,900",
    "oldPrice": null
  },
  {
    "id": "1260258",
    "title": "Jean skinny levanta cola,tiro alto, pret",
    "href": "https://www.studiof.com.co/jean-skinny-levanta-colatiro-alto-pret-s740078-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1489210-4000-4284/-stfco-producto-Skinny-AZULOSCURO-S740078M-1.jpg?v=638223740147730000",
    "imgAlt": "-stfco-producto-Skinny-AZULOSCURO-S740078M-1",
    "discount": null,
    "price": "$ 169,900",
    "oldPrice": null
  },
  {
    "id": "1259318",
    "title": "Body tiras cadena",
    "href": "https://www.studiof.com.co/body-tiras-cadena-s163021-/p",
    "imgSrc": "https://studiofco.vteximg.com.br/arquivos/ids/1502346-4000-4284/-stfco-producto-Body-VERDELIMA-S163021-1.jpg?v=638259806729530000",
    "imgAlt": "-stfco-producto-Body-VERDELIMA-S163021-1",
    "discount": null,
    "price": "$ 198,900",
    "oldPrice": null
  },
  
  // Agrega más elementos aquí si es necesario
];

const CarouselTest = () => {
  return (
    <section className="recomendado p-3">
      <h2><span>quizá te pueda interesar</span></h2>
      <div className="shelf n1colunas">
        <h2>Recomendados</h2>
        {items.map(item => (
          <ul key={item.id}>
            <li className="ropa-para-mujer-|-studio-f---pagina-oficial last">
              <div className="item">
                <div className={`item__image ${item.id}`}>
                  <a className={`img_${item.id}`} title={item.title} href={item.href}>
                    <img src={item.imgSrc} width="4000" height="4284" alt={item.imgAlt} />
                  </a>
                  <a className={`imgs_${item.id} img2`} style={{ display: 'none' }} title={item.title} href={item.href}></a>
                  <div id={`shop-Fast-${item.id}`} style={{ display: 'none' }}>
                    <a className="thickbox qvBinded" alt={item.title} href={`http://www.studiof.com.co/quick-view/?idproduto=${item.id}&KeepThis=true&TB_iframe=true`}>Espiar</a>
                  </div>
                  <span className="item__collection"></span>
                  {item.discount && <span className="item__discount">{item.discount}</span>}
                  {/* <span className="item__discount">{item.discount}</span> */}
                </div>
                <div className="item__name">
                  <a title={item.title} href={item.href}>
                    {item.title}
                  </a>
                </div>
                <span className="item__price">
                  <a title={item.title} href={item.href}>
                    <span className={`item__price item__price--best item__price--formatted ${ item.discount ? 'item__price--discount' : 'item__price' }`}>{item.price}</span>
                    <span className="item__price item__price--old item__price--formatted">{item.oldPrice}</span>
                  </a>
                </span>
              </div>
            </li>
            <li id={`helperComplement_${item.id}`} style={{ display: 'none' }} className="helperComplement"></li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default CarouselTest;