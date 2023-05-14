import Vue from 'vue';
import List from './List.js';

const App = {
    name: 'App',
    props: [],

    template: `
        <div class='app-container'>
            <list :serverData='serverData' />
        </div>
    `,

    data() {
        return {
            serverData: {}
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