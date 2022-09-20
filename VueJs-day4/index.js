// var data = {
//     test: 'Hello Viet Nam!',
// }

var cpt = {
    data: function() {
        return {
            test: 'Hello Viet Nam!'
        }
    },
    template: '<h1>AI say: {{ test }} <br><button @click="changeTest">Change it</button></h1>',
    methods: {
        changeTest: function() {
            this.test = 'Shared!'
        }
    }
};
new Vue({
    el: '#app',
    components: {
        'mycomponent': cpt
    }

});

new Vue({
    el: '#app2',

})