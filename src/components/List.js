import Vue from 'vue';
const List = {
    name: 'List',
    props: ['serverData'],

    template: `
        <div class='list-container'>
            <h1>List</h1>
            <table class='list-table'>
                <tr> <th class='list-column' v-for='slotDef in serverData.slotDefs'> {{slotDef.labels.label}} </th> </tr>
                <tr v-for='record in serverData.records'>
                    <td v-for='keys in record'> {{keys}} </td>
                </tr>
            </table>
        </div>
    `,

    data() {
        return {
            records: this.serverData.records,
        }
    },
};

Vue.component('list', List);
export default List;
