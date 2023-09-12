import React from 'react'
import style from "styled-components"


 function BurguerButton(props) {
    return (
      <Burguer >
        <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </Burguer>
    )
  }


export default BurguerButton

const Burguer = style.div `
.nav-icon-5{
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    z-index:10;
    
  }
  
  .nav-icon-5 span{
    margin-left:-10px;
    background-color:#fff;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  }

  .nav-icon-5 span:nth-child(1){
    top:0px;
    left: 0px;
  }

  .nav-icon-5 span:nth-child(2){
    top:13px;
    left: 0px;
    opacity:1;
  }

  .nav-icon-5 span:nth-child(3){
    bottom:0px;
    left: 0px;
  }

  .nav-icon-5:not(.open):hover span:nth-child(1){
    transform: rotate(-3deg) scaleY(1.1);
  }

  .nav-icon-5:not(.open):hover span:nth-child(2){
    transform: rotate(3deg) scaleY(1.1);
  }

  .nav-icon-5:not(.open):hover span:nth-child(3){
    transform: rotate(-4deg) scaleY(1.1);
  }

  .nav-icon-5.open span:nth-child(1){
    transform: rotate(45deg);
    top: 13px;
  }

  .nav-icon-5.open span:nth-child(2){
    opacity:0;
  }

  .nav-icon-5.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 13px;
  }

  .nav-icon-5.open span:nth-child(1){
    position:fixed;
    width:35px;
    left: auto; /* Quitar la propiedad left */
    top:45px;
  }

  .nav-icon-5.open span:nth-child(3){
    position:fixed;
    width:35px;
    left: auto; /* Quitar la propiedad left */
    top:45px;
  }
`