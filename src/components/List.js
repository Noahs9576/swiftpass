import Vue from 'vue';

const List = {
    name: 'List',
    props: ['serverData'],

    template: `
        <div class='list-container'>
            <h1> {{ serverData.bucketLabel }} </h1>
            <table class='list-table'>
            
                <thead>
                    <tr> 
                        <th class='list-column' v-for='slotDef in slotDefs'> {{slotDef.labels.label}} </th>
                    </tr>
                </thead> 

                <tbody>
                    <tr v-for='record in records'>
                        <td v-for='keys in record'> {{keys}} </td>
                    </tr>
                </tbody>

            </table>
        </div>
    `,

    data() {
        return {
            records: this.serverData.records,
            slotDefs: this.serverData.slotDefs
        }
    },
};

Vue.component('list', List);
export default List;
