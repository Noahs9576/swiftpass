import Vue from 'vue';
import List from './List.js';

const App = {
    name: 'App',
    props: [],

    template: `
        <div class='app-container'>
            <list v-if='!isLoading' :serverData='serverData' />
        </div>
    `,

    data() {
        return {
            serverData: {},
            isLoading: true
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

    },
};

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App, List },
});