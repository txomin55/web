<template>
    <v-row
        class="price_background"
    >
        <v-container
            class="dashed-border"
        >
            <v-row>
                <v-col cols="12" cols-sm="5" class="green--text text-left">
                    <h2>{{title}}</h2>
                    <span class="green--text">{{price}}</span>
                    <p class="green--text">{{description}}</p>
                </v-col>
                <v-col cols="12" cols-sm="7">
                    <v-col v-for="(item, i) in items" :key="i">
                        <p class="green--text"><v-icon class="green--text">mdi-arrow-right</v-icon><span v-html="item"></span></p>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </v-row>
</template>
<script>
    export default {
      name: 'AppPrices',
      props: {
        title: {
          type: String,
          default: null
        },
        price: {
          type: String,
          default: null
        },
        description: {
          type: String,
          default: null
        },
        items: {
          type: Array,
          default: () => []
        }
      }
    }
</script>
<style scoped>
    .price_background{
        background: transparent;
        padding: 1em;
        height: 100%;
    }
    .dashed-border{
        border-width:5px;
        border-style:dashed;
    }
    .ascii-box {
        white-space: pre-wrap;
    }
</style>
