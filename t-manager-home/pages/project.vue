<template>
    <div class="header_background">
      <v-container>
          <h2 class="yellow--text">T-MANAGER MODULE</h2>
          <v-row>
              <v-col>
                  <v-sheet
                    color="transparent"
                    class="project_features"
                  >
                      <v-tabs
                          v-model="tab"
                          vertical
                          color="yellow"
                      >
                          <v-tab
                                  v-for="item in items"
                                  :key="item.tab"
                                  class="green--text"
                          >
                            <template v-if="isSMAndUp">
                              {{ $t(item.tab) }}
                            </template>
                              <template v-else class="no-margin">
                                  <v-icon dark right>mdi-{{item.icon}}</v-icon>
                              </template>
                          </v-tab>

                          <v-tab-item
                                  v-for="item in items"
                                  :key="item.tab"
                          >
                              <v-container>
                                  <p class="green--text" v-html="$t(item.content)"></p>
                              </v-container>
                          </v-tab-item>
                      </v-tabs>

                  </v-sheet>
              </v-col>
          </v-row>
      </v-container>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          tab: 0,
          isSMAndUp: false,
          items: [
            {
              tab: 'project.motivation.title',
              content: 'project.motivation.description',
              icon: 'information-outline'
            },
            {
              tab: 'project.structure.title',
              content: 'project.structure.description',
              icon: 'file-tree-outline'
            },
            {
              tab: 'project.authentication.title',
              content: 'project.authentication.description',
              icon: 'login-variant'
            },
            {
              tab: 'project.frontend.title',
              content: 'project.frontend.description',
              icon: 'web'
            },
            {
              tab: 'project.backend.title',
              content: 'project.backend.description',
              icon: 'code-brackets'
            },
            {
              tab: 'project.compilation.title',
              content: 'project.compilation.description',
              icon: 'state-machine'
            },
            {
              tab: 'project.execution.title',
              content: 'project.execution.description',
              icon: 'run'
            }
          ]
        }
      },
      mounted () {
        this.isSMAndUp = this.$vuetify.breakpoint.smAndUp
      }
    }
</script>
<style>
    .project_features .theme--light.v-tabs > .v-tabs-bar{
        background-color: transparent !important;
    }
    .project_features .theme--light.v-tabs-items{
        background-color: transparent !important;
    }
    .v-tab{
        min-width: unset;
    }
</style>
