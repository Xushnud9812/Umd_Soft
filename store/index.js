export const state = () => ({
    dialog: false
});
export const mutations = {
    changeButton(state) {
        state.dialog = !state.dialog;
    }
};
export const actions = {
    async deleteCategory({ commit, state }) {}
};
