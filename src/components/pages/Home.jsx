import style from '../styles/Home.module.css'
import foto from '../../img/profile.png'
import PDF from '../../Yohran.pdf'
import loading from '../../img/loading.svg'

import { Link } from 'react-router-dom'


export default function Home(){


    return(
        
            <div className={style.home}>
            <section className={style.card_portfolio}>
                <img src={foto} alt='perfil' />
                <h2>Yohran</h2>
                <ul>
                    <li><Link to='/portfolio/sobre'>Sobre Mim</Link></li>
                    <li><a href={PDF} target='blank'>Currículo</a></li>
                    <li><a target='blank' href='/SrMackfly/'>Projeto </a>
                    <div className={style.img}>
                        <img src={loading} />
                    </div>
                     </li>
                    <li><a href='https://www.linkedin.com/in/yohran-ven%C3%A2ncio-96017b120/' target='blank'>LinkedIn</a></li>
                    <li><a href='https://github.com/yohran1' target='blank'>GitHub</a></li>
                    
                    
                </ul>
            </section>
            </div>
    )
}