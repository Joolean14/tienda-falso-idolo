import './Footer.css'
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Footer() {
    return (
        <footer className='footer'>
            <div className='text-links'>
                <p className='link'>© FALSO ÍDOLO</p>
                <p className='link'>TÉRMINOS Y CONDICIONES</p>                
                <p className='link'>POLÍTICAS DE PRIVACIDAD</p>
            </div>  
            <div className='icons'>
                <div className='icon'>
                    <InstagramIcon></InstagramIcon>
                </div>
                <div className='icon'>
                    <YouTubeIcon></YouTubeIcon>
                </div>
                <div className='icon'>
                    <FacebookIcon></FacebookIcon>
                </div>
                <div className='icon'>
                    <MusicNoteIcon></MusicNoteIcon>
                </div>
            </div>              
        </footer>
    );
}



export default Footer;




