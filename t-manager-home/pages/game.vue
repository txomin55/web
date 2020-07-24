<template>
    <v-container>
        <h2>JUEGO</h2>
        <app-game></app-game>
    </v-container>
</template>

<script>
    import AppGame from '../components/game/AppGame'

export default {
      name: 'game',
      components: {
        AppGame
      }
    }
</script>
