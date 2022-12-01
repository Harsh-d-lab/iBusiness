import * as React from 'react';
function Sidebar(){
    return(
            <nav class="navbar background">
                    <ul class="nav-list">
                        <div class="logo">
                        <img src="https://th.bing.com/th/id/R.4732d7249e2fe01140ad1dfae08b650e?rik=o%2blgI1pAP6WaPg&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f10%2fPNGPIX-COM-Opened-Book-PNG-Transparent-Image.png&ehk=krDn0luLU%2bE5Vffvg0NW269ef0C90MDBNfFJzQqsN2M%3d&risl=&pid=ImgRaw&r=0" alt="logo"/>
                        </div>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Products">Products</a></li>
                        <li><a href="#Wishlist">Wishlist</a></li>
                        <li><a href='#Clients'>Clients</a></li>
                        <li><a href='#AboutUs'>AboutUs</a></li>
                    </ul>
             </nav>
        );
    }
    export default Sidebar;