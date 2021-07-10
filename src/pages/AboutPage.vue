<template>
   <div>
       <div>
        <div>
            <br>
            <b-card no-body class="overflow-hidden card-colors" style="max-width: 540px;" align="center">
                <b-row no-gutters>
                <b-col md="3">
                  <br>
                    <b-img class="profile-picture" src="https://res.cloudinary.com/dswkzsdoq/image/upload/v1625927482/Naor_Picture_zttpqq.jpg" rounded="circle" alt="Circle image"></b-img>
                    <b-card-text class="text-center font-weight-bold" >
                        Naor Suban
                    </b-card-text>
                    <br>
                    
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-card-title class="text-center font-weight-bolder">Meet Us <b-icon-emoji-smile></b-icon-emoji-smile></b-card-title>
                        <hr>
                        <b-container class="bv-example-row">
                          <div>
                          We are Naor and Liad, fullstack developers and students in the SISE department at Ben Gurion University.
                          <br>In the last three months we have been working hard to create a few projects as part of the "Web Development Enviourments" course.
                          One of them is the League Managment System that you are using right now.
                          
                          </div>
                        </b-container>
                    </b-card-body>

                </b-col>
                </b-row>
                <b-row no-gutters>
                <b-col md="3">
                    <b-img class="profile-picture" src="https://res.cloudinary.com/dswkzsdoq/image/upload/v1625929806/1613577736864_mgtkyg.jpg" rounded="circle" alt="Circle image"></b-img>
                    <b-card-text class="text-center font-weight-bold" >
                        Liad Oz
                    </b-card-text>
                    
                </b-col>
                <b-col md="9">
                    <b-card-body>
  
                        <b-container class="bv-example-row">
                          <div>
                            We would like to share with you our projects:
                            <ul>
                              <li><a href="https://web-development-environments-2021.github.io/Assignment2_205492671_308546167/#">Pacman Game</a></li>
                              <li><a href="https://web-development-environments-2021.github.io/308546167/">Liad's role model website</a></li>
                              <li><a href="https://web-development-environments-2021.github.io/205492671/">Naor's grandmother website</a></li>

                            </ul>        
                          </div>
                        </b-container>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
            </div>
        </div>

    </div>   
</template>

<script>
export default {

}
</script>

<style>
.card-colors {
  color: #25302B;
  background-color: #E5E5EC;
  opacity: 0.85;

  /* #9FC9B5 */
}
.profile-picture{
  width:80%;
}
</style>