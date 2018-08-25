<template>
  <div>
    <div class="parallax">
    </div>
    <h1 class="pixo">What is PixoPixa?</h1>

    <p> At PixoPixa we will make a video game starring you.
      Your personal animated avatar will carry out
    your personal quest through the different settings of your choice. </p>
    <p> Your game can consist of your choice of: three,
      four or five levels (with a bonus boss battle)</p>
    <h2 class="pixa"> Character </h2>
    <p> Your character will walk and jump and also have the
      ability to turn into a "super" version after
      collecting enough power-ups. I can draw you character to
      look like a photo or anything else you like
      you can ride a horse or your character can be a rabbit,
      or anything else you like. Tell me your ideas and I will
      help make them a reality.</p>
    <div>
      <img src="../../static/Jory3.png" class="PicoPic smallerpics">
      <img src="../../static/Ataturk.png" class="PicoPic smallerpics">
      <img src="../../static/Ozge.png" class="PicoPic smallerpics">
      <img src="../../static/Unicorn.png" class="PicoPic smallerpics">
    </div>
    <h2 class="pixa">
      Scenes
    </h2>
    <p>
      Tell us what you want and we will make it happen, we've
      done castles, space battles, caves, underwater levels,
      fan fiction and many other levels. Tell us your ideas
      and we will bring them to 21 by 21 pixel reality!
    </p>
    <div>
      <img src="../../static/Scene1.png" class="PicoPic kindaBig">
      <img src="../../static/Scene2.png" class="PicoPic kindaBig">
      <img src="../../static/Scene3.png" class="PicoPic kindaBig">
    </div>
    <h2 class="pixa">
      Power Ups and Enemies
    </h2>
    <p>
      Each PixoPixa game is generally made with two types of
      powerups and several custom animated enemies that
      wander about the different scenes. Characters can collect
      their favorite food, animal or something else they
      love and the second power-up allows them to access
      "Super Mode". Enemies can be rats, bats, dinosaurs or annoying
      co-workers. It's all up to you!
    </p>
      <img src="../../static/AgentSmith.png" class="PicoPic smallerpics">
      <img src="../../static/Dinosaur.png" class="PicoPic smallerpics">
      <img src="../../static/Cupcake.png" class="PicoPic smallerpics">
      <img src="../../static/simit.png" class="PicoPic smallerpics">
    <h2 class="pixa">
      Narrative
    </h2>
    <p>
      Probably the best part of our interactive gifts is bringing all your ideas together into
      a complete narrative. At the beginning of each scene
      and the end of the game we can include a page of
      plot text to outline the character's objectives and
      progress the story. The plot page can also contain
      a photo or music file if you like. This part will help tie everything together.
    </p>
    <!--img src="../../static/Camilla.png" class="PicoPic"-->
    <br>
    <h2 class="pixa">
      Getting Started
    </h2>
    <p> To get started on your own PixoPixa project, check out our
    <a href="https://pixopixa.com/Questionnaire.docx"> Questionnaire </a></p>
    <p> Once you have the Questionnaire filled out you can choose one of our packages</p>
    <hr>
    <h3 class="pixe"> Basic Package </h3>
    <img src="../../static/office.png" class="mediumPics">
    <p> A three level game customized to your specifications: Cost USD$35 </p>
    <hr>
    <h3 class="pixe"> Normal Package </h3>
    <img src="../../static/Coffee.png" class="mediumPics">
    <p> A four level custom game: Cost USD$45 </p>
    <hr>
    <h3 class="pixe"> Exclusive VIP Extreme Value Package!! </h3>
    <img src="../../static/Explosion.png" class="mediumPics">
    <p> Five levels with a boss battle. Comes with a normal computer
    build and a free online version to share with your friends: Cost USD$55</p>
    <hr>
    <p> Before making a purchase we encourage you to contact
    us at admin@pixopixa.com or chat with us on our facebook page
    <a href="https://www.facebook.com/PixoPixaGames"> Our Lovely Facebook Page! </a>
    so we can discuss your ideas and find the best plan for you!</p>
    <br>
    <p> The fine print: We will do our best to make your ideas a reality, but please be aware if you
    have special requests that require a lot of extra coding and changing the fundamental mechanics
    of the game, we may need to charge a bit extra for your project as these types of modifications
    dramatically increase the time it takes us to finish your product.
    Some ideas that may require an
    additional price <br>
      adding extra events that change the appearance of the character: ex) when he touches a tree
    he turns into a monkey. <br>
    Adding animations to the game: ex) When he touches the
    tree at the end he climbs up and eats a banana <br>
    Fundamental changes to game play: ex) Levels with hidden
    areas inside them (like going through a pipe in Mario)
    or adding projectiles, guns, throwing things etc. <br>
    </p>
    <br>
    <h2 class="pixa"> Let's Do It! </h2>
    <p> Ok, if you insist. Check out our  <a href="https://pixopixa.com/sampleGame1">sample levels</a> To get some ideas
    note that the descriptions at the start of each
    level are where your plot text will be inserted. Fill out the
    Questionnaire, or send us your own document out-lining
    what you'd like. (Don't forget to send a photo
    and the name of your hero, so we can draw them and put
    them in the plot). Then send us a message,
    for the time being we will send you a link for you to make
    a secure payment via paypal, in the future
    we will add a secure payment feature to this website. <br>
      <br>
      Thanks for your interest in PixoPixa!</p>
    <br><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 21,
      width: 21,
      color: 'black',
    };
  },
};

</script>

<style>
  body {
    background-color: black;
    font-family: 'Quantico', sans-serif;
    color: azure;
  }
  .pixo {
    font-family: 'Press Start 2P', cursive;
    font-weight: 200;
    font-size: 3em;
    color: lime;
  }
  .pixa {
    font-family: 'Press Start 2P', cursive;
    font-weight: 200;
    font-size: 2em;
    color: white;
  }
  .PicoPic {
    padding: 5%;
  }
  .kindaBig {
    width: 80%;
  }
  .smallerpics {
    width: 10%;
  }
  .mediumPics {
    width: 80%;
  }
  .pixe {
    font-family: 'Press Start 2P', cursive;
    font-weight: 200;
    font-size: 1.6em;
    color: lime;
  }
  .parallax {
    background-image: url("../assets/AboutUs.png");
    height: 451px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
