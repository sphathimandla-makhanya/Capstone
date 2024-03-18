<template>
  <footer>
      <div class="container-fluid fixed-bottom ">
      <div class="row ">
        <div>
          <p class="text">
               <span>{{ currYear }}</span>&copy;S'phathimandlaMakhanya
          </p>
          <!-- <a href="https://github.com/sphathimandla-makhanya" target="blank"><img src="https://i.ibb.co/BP1w1RD/3291695.png" alt=""></a>
          <a href="https://www.linkedin.com/in/s-phathimandla-makhanya-0b80391aa/" target="blank"><img src="https://i.ibb.co/YQ5Kfx8/download.png" alt=""></a>
          <a href=""><img src="https://i.ibb.co/d4PcH2P/download-1.png" alt=""></a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: 'FooterComp',
data(){
    return{
        currYear: new Date().getFullYear()
    }
}
}
</script>

<style>
p{
    color: antiquewhite;
}

</style>