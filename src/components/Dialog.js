import Vue from 'vue';

const Dialog = {
    name: 'Dialog',
    props: [],

    template: `
        <div class='dialog-wrapper'>
            <div class='dialog-header'>
                <div class='dialog-title'> Dialog Title </div>
                <div class='dialog-exit'>X</div>
            </div>

            <div class='dialog-content'></div>
        </div>
    `,

    data() {
        return {

        }
    }

}

Vue.component('dialog-component', Dialog);
export default Dialog;