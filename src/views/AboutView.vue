<template>
  <div class="container-fluid d-lg-flex d-md-block about1">
    <div class="div-right d-block w-50">
      <h1 class="about">About us</h1>
      <img src="https://i.ibb.co/BqXPMqN/about.png" alt="">
      </div>
    <div class="div-left w-50 container-fluid d-block">
      <h2>Background</h2>
      <p class="text-black">Established in 2000 within the dynamic cityscape of Cape Town, Cape Digital Hub stands as a beacon of innovation in the laptop industry. Founded with a vision to redefine technology, our commitment to excellence has propelled us to the forefront of the market. Through our state-of-the-art design, advanced features, and unwavering dedication to customer satisfaction, we have revolutionized the way people engage with technology. Our range of premium laptops, meticulously crafted to inspire productivity and creativity, caters to the diverse needs of modern consumers. As a global leader, Cape Digital Hub extends its reach far beyond Cape Town, empowering individuals and businesses worldwide. With sustainability at our core, we are shaping the future of computing while preserving the planet for generations to come.
      </p>

      <h2>Mission</h2>
      <p class="text-light">
        Cape Digital Hub's mission is to provide cutting-edge laptops that inspire creativity, enhance productivity, and simplify everyday life. We aim to exceed customer expectations by delivering innovative solutions tailored to meet the evolving needs of our global community.
      </p>

      <h2>Vision</h2>
      <p class="text-black">
        At Cape Digital Hub, our vision extends beyond mere innovation. We aspire to cultivate a digital ecosystem where technology seamlessly integrates into every aspect of life, enriching experiences and fostering meaningful connections. Through our commitment to pushing boundaries and embracing change, we strive to empower individuals and communities to unlock their full potential in the digital age. Our unwavering dedication to excellence drives us forward as we continue to shape the future of technology with purpose and passion.
      </p>
    </div>
  </div>
</template>
<style scoped>
.about1 {
  background-color: #1e1e70; 
  background-image: linear-gradient(to bottom,white, #1e1e70); /* #00bfff*/
  color: grey; 
  height: 100vh;
}

.about{
  font-size: 5rem;
}
.div-right img{
  font-size: 4rem;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
}
.div-left{
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.div-left h2{
  color:burlywood;
  padding-top: 1rem;
}
.div-left p{
  color: grey;
  padding-top: 1rem;
}
.div-right{
  background-repeat: no-repeat;
  background-size: cover;
  height: 92.2vh;
}

@media screen and (max-width:300px) {
  .about1 {
  background-color: #1e1e70; 
  background-image: linear-gradient(to bottom,#1e1e70,white, #1e1e70); /* #00bfff*/
  color: grey; 
  height: 400vh;
}
  .about{
  font-size: 5rem;
}
  .div-right img{
  height: 150px;
  width: 285px;
}
}

@media screen and (max-width:400px) {
  .about1 {
  background-color: #1e1e70; 
  background-image: linear-gradient(to bottom,#1e1e70,white, #1e1e70); /* #00bfff*/
  color: grey; 
  height: 300vh;
}
  .about{
  font-size: 5rem;
}
  .div-right img{
  height: 220px;
  width: 385px;
}
.div-left{
 
}
.div-left h2{
  color:burlywood;
  padding-top: 1rem;
}
.div-left p{
  color: grey;
  padding-top: 1rem;
}
}

@media screen and (max-width:768px) {
  .about1 {
  background-color: #1e1e70; 
  background-image: linear-gradient(to bottom,#1e1e70,white, #1e1e70); /* #00bfff*/
  color: grey; 
  height: 215vh;
}
  .about{
  font-size: 5rem;
}
  .div-right img{
  height: 320px;
  width: 700px;
}
.div-left{
 
}
.div-left h2{
  color:burlywood;
  padding-top: 1rem;
}
.div-left p{
  color: grey;
  padding-top: 1rem;
}
}
@media screen and (max-width:991px) {
  .about1 {
  background-color: #1e1e70; 
  background-image: linear-gradient(to bottom,#1e1e70,white, #1e1e70); /* #00bfff*/
  color: grey; 
  height: 210vh;
}
  .about{
  font-size: 6rem;
}
  .div-right img{
  height: 380px;
  width: 700px;
}
.div-left h2{
  color:burlywood;
  padding-top: 1rem;
}
.div-left p{
  color: grey;
  /* padding-top: 1rem; */
}
}

</style>
