import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import Typed from 'typed.js';
import Styles from "./Styles.module.css"
import html from "./../image/html.png";
import css from "./../image/css.png";
import bootstrap from "./../image/bootstrap.png";
import react from "./../image/react.png";
import js from "./../image/js.png";
import emailjs from '@emailjs/browser';
import linkedin from './../image/linkedin.png';
import github from './../image/github.png';
import gmail from './../image/gmail.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

function Navbar() {
    const form = useRef();


    // Email


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_glxyfas', 'template_s8vbqmq', form.current, 'g9Ygz9yrP3xH7X_0s')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    // FUNCION DE NAV


    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (window.innerWidth >= 768) {
            return;
        }
        setClicked(!clicked);
    }


    


    useEffect(() => {

        // EFECTOS DE MOVIMIENTO


        AOS.init({
            duration: 800,
        });

        // EFECTO DE ESCRITURA

        const options = {
            strings: [
                `<i>&lt;/&gt;</i>`,
                `<i>Ceccotti</i>`,
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
        };

        const typed = new Typed('.typed', options);

        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <div className={Styles.body}>
            <NavContainer>
                <StyledText>
                    <div>
                        <h2>Octavio <span className='typed'></span></h2>
                    </div>
                </StyledText>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#SobreMi">Sobre mi</a>
                    <a onClick={handleClick} href="#Habilidades">Habilidades</a>
                    <a onClick={handleClick} href="#Proyectos">Proyectos</a>
                    <a onClick={handleClick} href="#Contacto">Contacto</a>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
            <div id="SobreMi" className={Styles.items}>
                <h2 data-aos="fade-left" className={Styles.title}>Sobre mi</h2>
                <div data-aos="fade-right" className={Styles.container1}>
                    <p className={Styles.paragraph1}>Soy Octavio, un apasionado programador front-end con base en Buenos Aires, Argentina. Mi mundo gira en torno al desarrollo de interfaces de usuario para aplicaciones web y sitios web. Me encanta la tecnología y estoy constantemente en busca de crecer en este emocionante campo. Siempre he sido un amante del diseño y la estética, lo que se refleja en mi capacidad para crear interfaces de usuario visualmente atractivas. Estoy comprometido con la mejora constante y la colaboración con otros profesionales para crear experiencias web excepcionales.</p>
                </div>
            </div>

            <div id="Habilidades" className={Styles.items}>
                <h3 data-aos="fade-right" className={Styles.title1}>Habilidades</h3>
                <div data-aos="fade-left" className={Styles.container2}>
                    <img className={Styles.img} src={html} alt='html' />
                    <img className={Styles.img1} src={css} alt='css' />
                    <img className={Styles.img2} src={bootstrap} alt='bootstrap' />
                    <img className={Styles.img3} src={react} alt='react' />
                    <img className={Styles.img4} src={js} alt='js' />
                </div>
            </div>

            <div id="Proyectos" className={Styles.items}>
                <h3 data-aos="fade-left" className={Styles.title2}>Proyectos</h3>
                <div data-aos="fade-right" className={Styles.container3}>
                    <p className={Styles.proyect}>En desarrollo.</p>
                </div>
            </div>

            <div id="Contacto" className={Styles.items1}>
                <h3 data-aos="fade-right" className={Styles.title1}>Contactame !</h3>
                <div data-aos="fade-left" className={Styles.container4}>
                    <form ref={form} onSubmit={sendEmail} className={Styles.field}>
                        <input type="text" name="user_name" required={true} />
                        <label className={Styles.lbl_nombre}><span className={Styles.nomb}>Nombre</span></label>
                        <input type="email" name="user_email" required={true} />
                        <label className={Styles.lbl_nombre2}><span className={Styles.nomb}>Email</span></label>
                        <textarea name="message" required={true} />
                        <label className={Styles.lbl_nombre3}><span className={Styles.nomb}>Mensaje</span></label>
                        <input className={Styles.button} type="submit"  value="Enviar"  /> 
                    </form>
                </div>
            </div>    
            <footer>
                <div className={Styles.container5}>
                    <div className={Styles.imagecontainer5}>
                        <a href="https://www.linkedin.com/in/octavio-ceccotti-a613b524b/"><img className={Styles.img5} src={linkedin} alt="Linkedin" /></a>
                        <a href="https://github.com/CeccottiOctavio"><img className={Styles.img6} src={github} alt="Github" /></a>
                        <a href="mailto:ceccottioctavio@gmail.com"><img className={Styles.img7}  src={gmail} alt="Gmail" /></a>
                    </div>
                    <p className={Styles.paragraph2}>diseñado por Octavio Ceccotti &copy; 2023</p>
                </div>
            </footer>
        </div>
    );
}

export default Navbar;

const NavContainer = styled.nav`

    h2 {
        color:#fff;
        font-family: 'Iceland', cursive;
        font-size: 35px;
        margin-left:10px;
        color:white;
}

box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.8);
padding: .4rem;
background-color: #333;
display:flex;
align-items:center;
justify-content:space-between;
position:fixed;
width:100%;
z-index:2;

a{
    padding-left:40px;
    margin-right:20px;
    color:#fff;
    text-decoration: none;
}

.links{
    position: absolute;
    top: -700px;
    left:-2000px;
    right:0;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    transition: all .5s ease;

    a{
        color:#fff;
        font-size:2rem;
        display:block;
    } 

    @media(min-width:768px){
        position: initial;
        margin:0;
        
        a{
            font-size:1rem;
            color:#fff;
            display:inline;
        }
    }
}

.links.active{
    width:100%;
    display:block;
    position:absolute;
    margin-left:auto;
    margin-right:auto;
    top:10%;
    left:0;
    right:0;
    z-index:5;
    position:fixed;
   
    a{
        font-size:2rem;
        margin-top:50px;
        color:#fff;
    }

    a:hover{
        color:#3DF0D1;
    }

}

.burguer{
    @media(min-width:768px){
    display:none;
    }
}
`

const BgDiv = styled.div`
    position: absolute;
    background-color: #333;
    top:-1000px;
    left:-2000px;
    width:100%;
    height:100%;
    transition: all .6s ease;
    position:fixed;
    z-index:1;
    &.active{
        border-radius: 0 0 70% 0;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.8);
    }
`

const StyledText = styled.span`
 i{
    font-weight: bold;
    color: #3DF0D1;
    font-style: normal;
 }
`



