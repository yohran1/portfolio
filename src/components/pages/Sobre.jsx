import foto from '../../img/profile.png';
import style from '../styles/Sobre.module.css';

import { Link } from 'react-router-dom'


export default function Sobre(){

    return(
            <div className={style.sobre}>
            <section className={style.card_portfolio}>
                <img src={foto} alt='perfil' />
                <h2>Yohran</h2>
                <p>Olá me chamo Yohran sou natural de Florianópolis/SC, tenho 24 anos, apaixonado pela tecnologia e sua evolução ao longo dos anos podendo nos proporcionar grandes e melhores revolução no mundo moderno, estudo através de cursos pagos e também de canais abertos, pretendo iniciar na carreira em Front-End e depois ir para Back-End, para ter o conhecimento dos dois lados da moeda e dominar ambos para me tornar um Dev FullStack, esse é meu plano de carreira, tenho uma ótima comunicação em grupo, grande gana de aprender cada vez mais, a cada dia superando um novo obstáculo.</p>
                   <div className={style.btnHome}>
                        <Link to='/portfolio'>Home</Link>
                   </div>
            </section>
            </div>
    )
}