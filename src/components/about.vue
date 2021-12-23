<template>
 <div class="about">
       
      <button id="back"><a href="http://localhost:8080/home" >Back</a></button>
      <h1 >OUR TEAM </h1> 
      </div> 
      </template>
      <script type="text/javascript">
        let progress = document.getElementById('progressbar');
        let totalHeight = document.body.scrollHeight -
        window.innerHeight;
       window.onscroll = function()
       {
         let progressHeight = (window.pageYOffset/ totalHeight)*100;
         progress.style.height = progressHeight + "%";
       }
     
        </script>
      <script> 
          export default 
          { 
              setup() 
              { 

              },} 
              </script> 
 <style> 
        body
        {
            background-color: black;
        }
        h1
        {
            font-family: 'Monoton', cursive;
            font-size: 50px;
        
            text-align: center;
            color: white;
            padding-top: 20px;
            padding-bottom: 70px;
        }
        img
        {
            border-radius: 100%;
        }
        #back
        {
           
            margin-left: 100px;
            margin-top: 20px;
            height: 50px;
            width: 100px;
            border-radius: 30px;
            background-color: rgb(103, 64, 245);
            text-decoration: none;
        }
        a{
        color: white;
        
        }
        a:hover{
        color: white;
        text-decoration: none;
        font-size: 20px;
        }
        .card
        {
            opacity:1;
          align-items: center;
          text-align: center;
        }
        /* Progressbar */
        ::-webkit-scrollbar
  {
      width: 0;
  }
  #scrollpath
  {
     position: fixed;
     top: 0;
     right:0;
     width: 20px;
     height: 100%;
     background: rgba(225, 255, 255, 0.05);

    }
    #progressbar
    {
        position: fixed;
     top: 0;
     right:0;
     width: 20px;
     
     background: linear-gradient(to top,#008aff,rgb(163, 27, 163));
     animation: animate 5s linear infinite;
    }
    @keyframes animate
    {
        0%,100%
        {
            filter: hue-rotate(0deg);
        }
        50%
        {
            filter: hue-rotate(360deg);
        }
    }
    #progressbar:before
    {
         content: '';
         position: absolute;
         top: 0;
         left:0;
         width: 100%;
         height: 100%;
         background: linear-gradient(to top,#008aff,rgb(163, 27, 163));
          filter: blur(10px);
    }
    #progressbar:after
    {
         content: '';
         position: absolute;
         top: 0;
         left:0;
         width: 100%;
         height: 100%;
         background: linear-gradient(to top,#008aff,rgb(163, 27, 163));
          filter: blur(30px);
    }
    
    </style>