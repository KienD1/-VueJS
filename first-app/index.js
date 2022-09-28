// new Vue({
//     el: '#obj',
//     data: {
//         noidung: 'Hello Sky Alert,hello me!',
//         title: 'vi du dau tien',
//         body : 'day la body',
//         link: 'https://www.facebook.com/profile.php?id=100005578367756',
//         testMaHTML: '<a href="https...abcd">Get Password</a>',
//     },
//     created() {
//         console.log(1);
//     },
//     methods: {
//         changeValue: function(event) {
//             this.noidung =  event.target.value;
//         },
//         sayHello: function() {
//             document.write("Say Hello");
//         },
//         showPost: function() {
//             return this.body;
//         },
//         update: function() {
//             this.noidung = 'Noi dung da duoc cap nhat';
//             return this.noidung;
//         }
//     }
// });

// new Vue({
//     el:'#obj',
//     data: {
//         dem: 0,
//         x: 0,
//         y: 0,
//     },
//     methods: {
//         tangGiaTri: function() {
//             this.dem++;
//         },
//         tinhtoado: function(event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         },
//         banphim: function() {
//             alert("Ban da nhap du lieu thanh cong!!!");
//         }
//     }
// });

new Vue ({
    el: '#app',
    data: {
        name: 'Sky Albert',
        a: 0,
        b: 0,

    },
    computed: {
        tanga: function() {
            console.log("computed");
            console.log("Goi function a");
            return this.a;
        },
        tangb: function() {
            console.log("computed");
            console.log("Goi function b");
            return this.b;
        }
    },
    methods: {
        tangaf: function() {
            console.log("methods");
            console.log("Goi function a");
            return this.a;
        },
        tangbf: function() {
            console.log("methods");
            console.log("Goi function b");
            return this.b;
        }
    }
    
});