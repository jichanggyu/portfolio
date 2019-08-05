<template>
  <div class="card">    
  <div class="card-content">
      <h3>
          {{icon}}
          <span class="highlight">
              <br/>
              {{name}}
          </span>
      </h3>
      <p class="desc">
          {{desc}}
      </p>
  </div>
  </div>
</template>

<script>
  export default {
      name: 'card',
      props: {
          name: {
              default: 'card',
              type: String
          },
          desc: {
              default: 'The quick brown fox jumps over the lazy dog.',
              type: String
          },
          icon: {
              default: '📊',
              type: String
          }
      },
      mounted() {
          let cards = document.querySelectorAll('.card-content')
          for (let i = 0; i < cards.length; i++) {
              let time = (i + 1) * 650
              setTimeout(() => {
                  cards[i].classList.add('reveal')
              }, time)
          }          
      }
  }
</script>

<style scoped>
  .card {
      width: 325px;
      height: 325px;
      margin: 1em auto;
      padding: 0;
      grid-column: auto;
      grid-row: auto;
      overflow: hidden;
  }

  .card-content {
    background: linear-gradient(to bottom, #c7c7c7 50%, #fff 50%, #fff);
    width: 320px;
    height: 320px;
    border: rgba(127, 127, 127, 0.2) 1px solid;
    border-radius: 4px;
    margin: 0 auto;
    box-shadow: 0 10px 6px -6px rgba(136, 136, 136,0.5);
    transform: translate(0, 100%);
    opacity: 0;
    transition: transform linear 0.7s, opacity 0.9s;
    cursor: pointer;
  }

  .photo-background {
    background-image: url('../assets/drew-beamer-679505-unsplash.jpg');
    background-repeat: no-repeat;
    background-size: 100% 50%;
  }

  .reveal {
      opacity: 1;
      transform: translate(0,0);
  }

  .card-content h3 {
      font-size: 24px;
      color: #252525;
      margin-top: 45%;
  }

  .card-content h3 span.highlight {
    background: linear-gradient(to top,rgba(127,255,212,.4) 35%,transparent 35%);
    transition: background-color linear 0.5s;
  }

  .card-content:active {
    transform: scale(0.85);
  }

  .card-content:hover h3 span.highlight, .card-content:active h3 span.highlight {
      background: rgb(127,255,212);
  }




  @media screen and (min-width: 999px) {
    .desc {
      transform: translate(0, 320px);
      transition: transform ease-in-out 0.5s;
    }
    
    .card-content:hover .desc {
      transform: translate(0,0);
    }
  }
  

</style>
