<template>
  <div id="app">
    <b-container class="fontFamily">
      <b-form @submit="onSubmit">
        <b-card class="backgroundtest" text-variant="white">
          <b-form-group id="input-group-1"
            ><p class="center titlestyle">To-do</p>
            <b-form-input
              id="input-1"
              v-model="todosname"
              type="text"
              required
            ></b-form-input>
            <b-list-group
              v-for="(item, index) in $store.state.todo.task"
              :key="index"
            >
              <b-list-group-item>
                <b-container>
                  <b-row>
                    <b-col class="padding">
                      <b-form-checkbox
                        id="checkbox-2"
                        v-model="item.did"
                        name="checkbox-2"
                      ></b-form-checkbox>
                    </b-col>
                    <b-col v-if="!item.edit" class="center padding">
                      <label
                        v-bind:class="[item.did ? 'classdid text' : 'text']"
                        @dblclick="editar(index, true, item.name)"
                        >{{ item.name }}</label
                      >
                    </b-col>
                    <b-col class="center" v-else>
                      <label>
                        <b-input
                          v-model="editname"
                          @blur="editar(index, false, '')"
                          v-focus="true"
                          @keyup.enter="editar(index, false, '')"
                          class="text"
                        ></b-input>
                      </label>
                    </b-col>
                    <b-col class="end">
                      <b-button @click="excluir(index)">Excluir</b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </b-list-group-item>
            </b-list-group>
          </b-form-group>
        </b-card>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      todosname: "",
      editname: "",
    };
  },
  computed: {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("todo/add", this.todosname);
      this.todosname = "";
    },
    excluir(index) {
      this.$store.dispatch("todo/deletar", index);
    },
    editar(index, bool, name) {
      this.$store.dispatch("todo/editar", { index, bool });
      if (name == "") {
        let editname = this.editname;
        this.$store.dispatch("todo/edit", { editname, index });
      } else {
        this.editname = name;
      }
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
.classdid {
  color: #d9d9d9;
  text-decoration: line-through;
}
.center {
  text-align: center;
}
.end {
  text-align: end;
}
.padding {
  padding: 5px;
}
.titlestyle {
  font-size: 50px;
  padding: 20px;
}
.text {
  font-size: 20px;
}
.fontFamily {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.backgroundtest {
  background-image: linear-gradient(
    to bottom right,
    rgb(51, 51, 51),
    rgb(129, 129, 129)
  );
}
</style>
