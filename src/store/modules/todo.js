const state = () => ({
    task: [{
        did: false,
        name: "test",
        edit: false,
    }]
})
const actions = {
    deletar({ commit }, index) {
        commit('deletar', index)
    },
    add({ commit }, todosname) {
        commit('add', todosname)
    },
    editar({ commit }, { index, bool }) {
        commit('editar', { index, bool })
    },
    edit({ commit }, { editname, index }) {
        commit('edit', { editname, index })
    }
}
const mutations = {
    deletar(state, index) {
        state.task.splice(index, 1)
    },
    add(state, todosname) {
        state.task.push({ did: false, name: todosname, edit: false });
    },
    editar(state, { index, bool }) {
        state.task[index].edit = bool
    },
    edit(state, { editname, index }) {
        console.log({ editname, index })
        state.task[index].name = editname
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}