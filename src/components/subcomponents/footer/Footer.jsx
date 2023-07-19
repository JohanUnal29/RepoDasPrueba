import React from 'react'
import './Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";

export default function Footer() {
    return (
        <footer class="pie-pagina">
            <div class="grupo-1">
                <div class="box">
                    <figure>
                        <img src="https://drive.google.com/uc?export=download&id=1tBsb0t3bUc1vG8BzvAs0wuCOBos_2_fa" alt="Logo de Dasein" />
                    </figure>
                </div>
                <div class="box">
                    <h2>Contactanos</h2>
                    <p><MdCall /> (+57) 304 4173426</p>
                    <p><AiFillMail />dasein.accesorios@gmail.com</p>
                </div>
                <div class="box">
                    <h2>Siguenos</h2>
                    <div class="red-social">
                        <a href="https://api.whatsapp.com/message/FKO3LZ4ELRU4E1?autoload=1&app_absent=0"><FaWhatsapp className='fa fa-whatsapp' /></a>
                        <a href="https://instagram.com/dasein.accesorios?igshid=Yzg5MTU1MDY="><FaInstagram className='fa fa-instagram' /></a>
                        <a href="https://twitter.com/Dasein_Joyeria?t=oLz6gMHnPquQC8BFYdeCwA&s=09"><FaTwitter className='fa fa-twitter' /></a>
                        <a href="https://www.facebook.com/Dasein.outfit?mibextid=ZbWKwL"><FaFacebook className='fa fa-facebook' /></a>
                        <a href="https://www.facebook.com/Dasein.outfit?mibextid=ZbWKwL"><FaTiktok className='fa fa-tiktok' /></a>
                    </div>
                </div>
            </div>
            <div class="grupo-2">
                <small>&copy; 2022 <b>Dasein</b></small>
            </div>
        </footer>
    )
}
