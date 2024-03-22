<template>
  <div class="container-fluid d-lg-flex d-md-block about1">
    <div class="div-right d-block w-50">
      <h1 class="about">About us</h1>
      <img src="https://i.ibb.co/BqXPMqN/about.png" alt="">
      </div>
    <div class="div-left w-50 container-fluid d-block">
      <h2>background</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo voluptatem, dicta facilis molestias assumenda libero rerum, porro dolorum adipisci necessitatibus, repudiandae molestiae possimus ducimus soluta numquam autem obcaecati iure?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni doloribus cumque impedit labore eum incidunt dolorem, delectus tempore ab suscipit earum perspiciatis a. Expedita facilis soluta quaerat dolor ducimus impedit?</p>

      <h2>Mission</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, esse ab. Saepe similique sapiente, iusto perferendis, suscipit ipsam aperiam officiis et quo qui nobis? Culpa, iusto! Totam dolorem commodi voluptas?</p>

      <h2>Vision</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt consequuntur culpa quasi voluptatibus blanditiis earum, obcaecati porro rerum officia hic, dolore soluta a cupiditate dignissimos molestias aspernatur! Debitis, consequatur facere.</p>
    </div>
  </div>
</template>
<style>
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
