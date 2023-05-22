import React from 'react';
import"./DesignCompo.css"
import imagemobile from "../../assets/mobile.png"

const DesignCompo = () => {
  return (



   <div className='testcontanier'>
    <div class="design">
        <div class="image">
            <img src={imagemobile} alt="mobil"></img>
        </div>
        <div class="text">
            <h2>OUR DESIGN COMES WITH...</h2>
            <ul>
                <li><i class="fa-solid fa-desktop"></i>Responsive Design</li>
                <li><i class="fa-solid fa-desktop"></i>Modern And Clean Design</li>
                <li><i class="fa-solid fa-desktop"></i>Clean Code</li>
                <li><i class="fa-solid fa-desktop"></i>Browser Friendly</li>
            </ul>
        </div>
    </div>
    </div>




  );
}

export default DesignCompo;
