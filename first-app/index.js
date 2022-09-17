new Vue({
    el: '#obj',
    data: {
        noidung: 'Hello Sky Alert,hello me!'
    },
    created() {
        console.log(1);
    },
    methods: {
        changeValue: function(event) {
            this.noidung =  event.target.value;
        }
    }
});