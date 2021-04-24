<template>
  <footer>
        <span class="foot-cover">
            <nav class="footer-nav">
                <div class="foot-logo">
                     <img src="~/assets/image/foot-logo.svg" />
                    <p>ОФИЦИАЛНЫЙ ИНТЕРНЕТ <br> МАГАЗИН В УЗБЕКИСТАНЕ</p>
                    <h3>Все наченается с мечты !</h3>
                </div>
                <div class="foot-info">
                    <h3>Информации</h3>
                    <ul>
                        <li> <img src="~/assets/image/location.svg" /> <span>Тошкент ш.</span></li>
                        <li> <img src="~/assets/image/foot-phone.svg" /> <span>+998(99) 329-14-04</span></li>
                        <li> <img src="~/assets/image/message.svg" /> <span>info@mechta.uz</span></li>
                        <li> <img src="~/assets/image/foot-watch.svg" /> <span>режим работа: 9,00-20,00 без выходных</span></li>
                    </ul>
                </div>
                <div class="foot-contact">
                    <h3>Сотциалних сети</h3>
                   <ul>
                       <li> <a href="#" class="messenger">
                        <div>
                         <svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"/></svg>
                        </div></a></li>

                        <li>
                            <a href="#" class="messenger">
                            <div>
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="169.063px" height="169.063px" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;"
	 xml:space="preserve">
<g>
	<path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
	<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
	<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></div>
                        </a>
                        </li>

                        <li><a href="#" class="messenger">
                            <img src="~/assets/image/twit.svg" />
                        </a></li>

                        <li><a href="#" class="messenger">
                            <img src="~/assets/image/facebook.svg" />
                        </a></li>

                        <li><a href="#" class="messenger">
                            <img src="~/assets/image/youtube.svg" />
                        </a></li>
                  
                   </ul>
                </div>
            </nav>
        </span>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    height: 358px;
   background: url('~assets/image/sasa.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .foot-cover{
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #009933, $alpha: 0.6);
        align-items: center;
    }
}
.footer-nav{
  width: 90%;
  height: 230px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.foot-logo{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p{
        font-family: "Roboto Bold",sans-serif;
        color: #fff;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 124%;
    }
    h3{
        font-family: 'Lobster', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #E7EA09;
    }
}
#Bold{
    fill: #fff;
}
#Layer_1{
    fill: #fff;
}
svg{
    width: 100%;
    height: 100%;
}
.foot-info{
    margin-top: 38px;
    h3{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 33px;
        color: #FFFFFF;
        margin-bottom: 22px;
    }
    span{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    li{
        display: flex;
        align-items: center;
        img{
            margin-right: 20px;
        }
    }
    li:not(:last-child){
        margin-bottom: 15px;
    }
}
.foot-contact{
    height: 149px;
    h3{
        font-family: "Roboto Bold",sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 33px;
        color: #FFFFFF;
        margin-bottom: 38px;
    }
   ul{
    display: flex;
    li:not(:last-child){
        margin-right: 14.5px;
    }
   }
    li{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .messenger{
        div{
           width: 25px;
           height: 24px;
        }
        img{
            display: flex;
        }
    }
}   



@media (min-width: 768px) and (max-width: 1024px) {
    .foot-logo img {
        transform: scale(0.7);
        margin-left: -15px;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
     footer .foot-cover[data-v-0d2d6594] {
        height: auto;
    }
    footer[data-v-0d2d6594] {
        height: auto !important;
    }
    .footer-nav[data-v-0d2d6594] {
        flex-direction: column !important;
        height: auto !important;
        margin: 20px 0 0 0 !important;
        width: 60% !important;
        // background: #148e3c;
    }
    .foot-logo p[data-v-0d2d6594] {
        font-size: 26px !important;
        margin: 20px 0px 0px 0px !important;
    }
    .foot-logo h3[data-v-0d2d6594] {
        font-size: 24px;
    }
    .foot-info[data-v-0d2d6594] {
        margin: 35px 0 0 37px;
    }
    .foot-contact[data-v-0d2d6594] {
        margin: 20px 0px 0px -60px;
    }
}

@media (max-width: 480px){
    .foot-logo img {
        transform: scale(0.6);
        margin-left: -70px;
    }
    .foot-logo[data-v-0d2d6594] {
        margin: 0 0 0 -60px;
    }
    footer .foot-cover[data-v-0d2d6594] {
        height: auto;
    }
    footer[data-v-0d2d6594] {
        height: auto !important;
    }
    .footer-nav[data-v-0d2d6594] {
        flex-direction: column !important;
        height: auto !important;
        margin: 0 auto !important;
        width: 60% !important;
        // background: #148e3c;
    }
    .foot-logo p[data-v-0d2d6594] {
        font-size: 16px !important;
        margin: 0px 0px 0px 0px !important;
    }
    .foot-logo h3[data-v-0d2d6594] {
        font-size: 18px !important;
    }
    .foot-info[data-v-0d2d6594] {
        margin: 0px 0 0 -50px;
    }
    .foot-contact[data-v-0d2d6594] {
        margin: 20px 0px 0px -60px;
    }
}
</style>