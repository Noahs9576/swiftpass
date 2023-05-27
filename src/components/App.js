import Vue from 'vue';
import List from './List.js';
import Dialog from './Dialog.js';

const App = {
    name: 'App',
    props: [],

    template: `
        <div class='app-container'>
            <div class='dialog-container' v-if='dialogs.length > 0'>
                <dialog-component v-for='dialog in dialogs' />
            </div>

            <list v-if='!isLoading' :serverData='serverData' @new-details-dialog='newDialog' />
        </div>
    `,

    data() {
        return {
            serverData: {},
            isLoading: true,
            dialogs: []
        }
    },

    created() {            
        fetch('/list/getData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({bucket: 'bucket'}),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.serverData = data;
            this.isLoading = false;
        });
    },

    methods: {
        newDialog(data) {
            console.log("DLM: data: ", data);
            this.dialogs.push(data ?? {});
        }
    },
};

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App, List, Dialog },
});