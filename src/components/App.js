import Vue from 'vue';
import List from './List.js';

const App = {
    name: 'App',
    props: [],
    template: `
    <div>
        <list :serverData='fetchServerData()'></list>
    </div>
    `,
    data: () => ({

    }),
    methods: {
        fetchServerData() {
            serverData = {};
            
            fetch('/list/getData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({bucket: 'bucket'}),
            })
            .then(function(response) {
                var res = response.json()
                return res;
            })
            .then(function(data) {
                serverData = data;
            });

            return serverData;
        },
    },
};

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App, List },
});