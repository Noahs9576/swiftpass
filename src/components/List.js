import Vue from 'vue';
const List = {
    name: 'List',
    props: ['serverData'],
    template: `
    <div>
        <h1>List<h1>
        <div v-for = 'record in records'>
        {{record.name}}
        </div>
    <div>
    `,
    data() {
        return {
            records: this.serverData.records,
        }
    },
};

Vue.component('list', List);
export default List;
