<template>
  <v-app id="inspire">
    <!-- Sidebar / Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      :mini-variant="mini"
      @update:mini-variant="mini = $event"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Top AppBar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleMini" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      drawer: true,  // drawer abierto por defecto
      mini: false,   // mini-variant inicial
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'Photos', icon: 'mdi-image', to: '/photos' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' },
        { title: 'Pagina1', icon: 'mdi-help-box', to: '/pagina1' },
      ],
    };
  },
  methods: {
    toggleMini() {
      this.mini = !this.mini;
    },
  },
};
</script>

<style>
/* Opcional: estilos para ajustar mini-drawer */
.v-navigation-drawer--mini-variant {
  width: 80px !important;
}
</style>
