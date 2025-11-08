<template>
  <div class="home pa-4" style="max-width: 600px; margin: 0 auto;">
    <!-- Campo de nueva tarea -->
    <v-text-field
      v-model="nuevoTituloTarea"
      @click:append="agregarTarea"
      @keyup.enter="agregarTarea"
      variant="outlined"
      hide-details
      clearable
      :label="editandoId ? 'Editando tarea' : 'Nueva tarea'"
      :append-icon="editandoId ? 'mdi-content-save' : 'mdi-plus'"
      class="mb-4"
    />

    <!-- Lista de tareas -->
    <v-list>
      <v-list-item
        v-for="tarea in tareas"
        :key="tarea.id"
        :class="['mb-2 rounded-lg', tarea.hecho ? 'bg-red-lighten-5' : '']"
        @click="toggleHecho(tarea.id)"
      >
        <v-row align="center" class="w-100">
          <!-- Checkbox solo visual, se actualiza al hacer click en toda la fila -->
          <v-col cols="auto">
            <v-checkbox
              v-model="tarea.hecho"
              color="primary"
              hide-details
              @click.stop
            />
          </v-col>

          <!-- Titulo de la tarea -->
          <v-col>
            <span :class="{ 'text-decoration-line-through': tarea.hecho }">
              {{ tarea.titulo }}
            </span>
          </v-col>

          <!-- Botones de acción sin fondo, con color -->
          <v-col cols="auto" class="d-flex gap-2">
            <v-btn icon variant="text" color="blue" @click.stop="EditarTarea(tarea.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="red" @click.stop="BorrarTarea(tarea.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "HomeViewPage",
  data() {
    return {
      tareas: [
        { id: 1, titulo: "Levantarse", hecho: false },
        { id: 2, titulo: "Desayunar", hecho: false },
        { id: 3, titulo: "Ir a la escuela", hecho: false },
      ],
      nuevoTituloTarea: "",
      editandoId: null,
    };
  },
  methods: {
    toggleHecho(id) {
      const tarea = this.tareas.find((t) => t.id === id);
      if (tarea) tarea.hecho = !tarea.hecho;
    },
    BorrarTarea(id) {
      if (confirm("¿Deseas eliminar la tarea?")) {
        this.tareas = this.tareas.filter((t) => t.id !== id);
      }
    },
    agregarTarea() {
      if (!this.nuevoTituloTarea.trim()) return;

      if (this.editandoId !== null) {
        const tarea = this.tareas.find((t) => t.id === this.editandoId);
        if (tarea) tarea.titulo = this.nuevoTituloTarea.trim();
        this.editandoId = null;
        this.nuevoTituloTarea = "";
        return;
      }

      this.tareas.push({
        id: Date.now(),
        titulo: this.nuevoTituloTarea.trim(),
        hecho: false,
      });
      this.nuevoTituloTarea = "";
    },
    EditarTarea(id) {
      const tarea = this.tareas.find((t) => t.id === id);
      if (tarea) {
        this.nuevoTituloTarea = tarea.titulo;
        this.editandoId = id;
      }
    },
  },
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
