// Vue.component('hello', {
//     template: '<p>Hello Viet Nam</p>',
// })

// var vn = new Vue({
//     el: '#app',
//     data: {
//         title: 'The Vue JS Instace',
//         showParagraph: false
//     },
//     methods: {
//         show: function() {
//             this.showParagraph = true;
//             this.updateTitle('This Vue JS Instace (Update)');
//             console.log(this.$refs);
//             this.$refs.infoButton.innerText = "Show after using refs";
//         },
//         updateTitle: function(title) {
//             this.title = title;
//         }
//     },
//     computed: {
//         lowercaseTitle: function() {
//             return this.title.toLowerCase();
//         }
//     },
//     watch: {
//         title: function(value) {
//             alert('Title changed, new value: ' + value);
//         }
//     }
// });

// var tl = new Vue({
//     el: '#app2',
//     data: {
//         title: 'The Second Vue Js instance'
//     },
//     methods: {
//         onChangeTitle: function() {
//         vn.title = 'Changed';
//         }
//     }
// });


// setTimeout(function() {
//     vn.title = 'Changed by time from outside!'
// }, 3000);

// console.log(vn);
// console.log(vn.title);
// vn.$refs.infoHeading.innerText = "Test using refs with Praph";



new Vue({
    el: '#app',
    data: {
        title: 'VueJs Instance Lifecycel',
    },
    beforeCreated: function() {
        console.log('beforeCreated!');
    },
    created: function() {
        console.log('Created!');
    },
    beforeMounted: function() {
        console.log('beforeMounted!');
    },
    mounted: function() {
        console.log('mounted!');
    },
    beforeUpdated: function() {
        console.log('beforeUpdated!');
    },
    updated: function() {
        console.log('updated!');
    }, 
    beforeDestroyed: function() {
        console.log('beforeDestroyed!');
    },
    destroyed: function() {
        console.log('destroyed!');
    },
    methods: {
        destroyEvent: function() {
            this.$destroy();
        }
    }
});