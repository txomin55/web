<template>
    <v-container>
        <canvas id="game" width="100%" height="300">
        </canvas>
    </v-container>
</template>

<script>
    import Game from './Game'

    export default {
      name: 'AppGame',
      mounted () {
        setTimeout(() => {
          const game = new Game(document.getElementById('game'))
          game.init()
        }, 1000)
      }
    }
</script>
