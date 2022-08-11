import React from "react";
import newsReal1 from '../../assets/noticiasReal1.jpeg'
import newsReal2 from '../../assets/noticiasReal2.jpeg'
import newsReal3 from '../../assets/noticiasReal3.jpg'
import newsReal4 from '../../assets/noticiasReal4.jpg'
import style from '../../styles/news.module.css'

export default function News() {

    return (
        <div className={style.wrapper}>
            <h1 className={style.titulo}>NEWS</h1>
            <h3 className={style.newsTitle}>Starlink en Colombia</h3>
            <div className={style.containerNews}>
                <div>
                    <img src={newsReal1} alt='imagen de noticia' className={style.img} />
                </div>
                <div>
                    <p className={style.texto}>El Ministerio de Tecnologías de la Información y las Comunicaciones le otorgó oficialmente los permisos a Starlink para que funcione en el país. Según las autoridades, el proyecto ofrece una oportunidad para mejorar la conexión de las zonas rurales en el territorio.
                        <br />
                        “En nuestra ruta por cerrar la brecha digital desde todos los puntos de vista, la entrada de esta nueva compañía al país significó una mejora sustancial en la forma en que se conectarán las regiones, pues gracias a la tecnología satelital de actores como Starlink se ampliará la oferta en el mercado, y gracias a los beneficios establecidos en el nuevo régimen, el dinero que deja de percibir el MinTIC en materia de pagos por uso de espectro podrán ser reinvertidos para mejora del servicio al usuario final”, afirmó Carmen Ligia Valderrama Rojas, Ministra TIC.
                        <br />
                        La Resolución 376 de 2022 busca abrir el camino para que lleguen nuevas empresas satelitales al país. Con este mismo permiso, se buscará mejorar las conexiones 4G y 5G en Colombia.

                    </p>
                </div>
            </div>
            <h3 className={style.newsTitle}>Las ciudades inteligentes se abren paso en Colombia con Enel X</h3>
            <div className={style.containerNews}>
                <div>
                    <p className={style.texto}>“Una ciudad inteligente o 'smart city' aplica las nuevas tecnologías para lograr objetivos como alcanzar las metas de desarrollo y sostenibilidad de cada administración, mejorar la calidad de vida de sus habitantes tomando decisiones en tiempo real, aumentar la participación ciudadana en el ecosistema urbano, y garantizar la correcta disposición y el uso eficiente de los recursos disponibles”, explica Diego Valderrama, subgerente de clientes de gobierno de Enel X, línea de negocio de Enel Colombia.
                        <br />
                        Por ello, una ciudad intel gente no solo se destaca por sus altos niveles de conectividad, sino también por dirigir sus esfuerzos hacia la sostenibilidad económica, social y ambiental.
                        <br />
                        Enel X trabaja de la mano con las administraciones municipales para que estas puedan responder de manera más efectiva tanto a sus necesidades particulares como a los desafíos globales.</p>
                </div>
                <div>
                    <img src={newsReal2} alt='imagen de noticia' className={style.img} />
                </div>
            </div>
            <h3 className={style.newsTitle}>Liga Master Flow de LOL: Leviatán es el campeón tras vencer a Boca por 3 a 0 en el polideportivo de San Lorenzo</h3>
            <div className={style.containerNews}>
                <div>
                    <img src={newsReal3} alt='imagen de noticia' className={style.img} />
                </div>
                <div>
                    <p className={style.texto}>Luego de varias finales sin público, la comunidad argentina de League of Legends tuvo por fin su gran final presencial de la Liga Master Flow donde Leviatán demostró por qué es el mejor equipo del año tras vencer por un aplastante 3 a 0 a la escuadra de Boca Juniors Gaming.
                        <br />
                        Con Mateo “Buggax” Aroztegui como Top-Lane, Manuel “Pancake” Scala como jungla, Nicolás “TopLop” Marinoni como Mid-Lane, Brandon “Nothing” Merlo en el carril inferior y con Pedro Luis “Lyonz” Peralta como support, Leviatán por fin levantó la tan preciada copa de la liga más importante de LoL del país.
                        <br />
                        En el microestadio del polideportivo de San Lorenzo, en Ciudad de Buenos Aires, más de 1500 fanáticos disfrutaron de un evento con show de trap, paseo de comidas, actividades y con la frutilla del postre: poder ver a los dos mejores equipos del torneo enfrentarse acompañados por sus hinchadas, que cantaron, festejaron y sufrieron durante las 4 horas que duró el evento.
                    </p>
                </div>
            </div>
            <h3 className={style.newsTitle}>El país que busca profesionales altamente calificados y al que no es imposible migrar sin ciudadanía europea</h3>
            <div className={style.containerNews}>
                <div>
                    <p className={style.texto}>“Lo que más me gusta de Bélgica es la internacionalidad que tiene. Yo no hablo francés ni neerlandés, pero con el nivel de inglés que tengo y con el español me manejo muy bien, al menos en Bruselas. En esta ciudad, al tener una comunidad de tantas nacionalidades todos tratan de entenderte y ayudarte. Además, no tengo ciudadanía europea, llegué como estudiante y, por mi profesión, ya encontré empleo. Es más, ya tengo la residencia belga”, cuenta Sofía Ovejero, una argentina de 27 años que actualmente se desempeña como Business Operations Manager y Data Privacy Advisor en IT Healthcare, en la ciudad de Ghent.
                        <br />
                        Ella migró desde Bella Vista, provincia de Buenos Aires, hacia este país europeo en septiembre de 2021 para hacer un doctorado en política internacional y, mientras estaba estudiando, la contactaron reclutadores para hacerle diferentes ofertas laborales. “Siempre les dije la verdad, que estaba con una visa de estudiante y que si querían que trabajara su compañía debía sponsorearme la visa de trabajo. Así logré la residencia”, cuenta.</p>
                </div>
                <div>
                    <img src={newsReal4} alt='imagen de noticia' className={style.img} />
                </div>
            </div>
        </div>
    )
}