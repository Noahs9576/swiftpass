import Vue from 'vue';

const ListHeader = {
    name: 'ListHeader',
    props: ['title', 'bucket'],

    template: `
        <div class='list-header-wrapper'>
            <div class='list-title title-large'> {{ title }} </div>

            <button class='list-add-action' @click='createDetailsDialog()'> Add record </button>
        </div>
    `,

    data() {
        return {

        }
    },

    methods: {
        createDetailsDialog() {
            this.$parent.$emit("new-details-dialog", {title: "Title"});
        }
    }
    
}

Vue.component('list-header', ListHeader);
export default ListHeader;