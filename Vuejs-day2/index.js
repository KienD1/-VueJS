// var app = new Vue({
//     el: '#app',
//     data: {
//         diem: 'Ban A co diem mon toan la 7'
//     },
//     watch: {
//         diem: function(newValue) {
//             alert("Diem da dc giao vien khac nhap");
//         }
//     }
// });
// app.diem = 'Ban A co diem mon toan la 8';


// new Vue({
//     el: '#app',
//     data: {
//         linkVal: 'https://google.com'
//     },
//     methods: {
//         changeLink: function() {
//             this.linkVal = 'https://www.facebook.com'
//         }
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         quanlido: false,
//         color: 'xanhlacay',
//     },
//     computed: {
//         divClasses: function() {
//             return {
//                 do: this.quanlido,
//                 xanhduong: !this.quanlido,
//             }
//         }
//     }
// });


// new Vue({
//     el: '#app',
//     data: {
//         color: 'gray',
//         width: 100
//         // height: 100,
//     },
//     computed: {
//         customStyles: function() {
//             return {
//                 backgroundColor: this.color,
//                 width: this.width + 'px'
//                 // height: this.height + 'px',
//             }
//         }
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         xacdinh: true
//     }
// });


// new Vue({
//     el: '#app',
//     data: {
//         menus: ['Home', 'About', 'Blog', 'Contact', 'FAQ'],
//         // students: [
//         //     {name: 'Sky', age: 30, class: 'CNTT'},
//         //     {name: 'Albert', age: 32, class: 'QTKD'}, 
//         //     {name: 'John', age: 10, class: 'CDT'}
//         // ]
//     }
// });

// new Vue({
//     el: '#app',
//     data: {

//     }
// });


// new Vue({
//     el: '#app',
//     data: {
//         menus: ['Home', 'About', 'Blog', 'Contact', 'FAQ'],
//     }
// });

new Vue ({
    el:'#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRungning: false,
        turns:[]
    },
    methods: {
        startNewGame: function() {
            this.gameIsRungning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            turns: [];
        },
        attack: function() {
            // checkOption
            if(this.checkPlayerOptions()) {
                return;
            }
            // monster
            damage = this.inputDamage(4, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hits Monster for' + damage
            });
            // player
           this.monsterAttack();
        },
        specialAttack: function() {
              // checkOption
              if(this.checkPlayerOptions()) {
                return;
            }
            // monster
            damage = this.inputDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hits Monster for ' + damage
            });
            // player
            this.monsterAttack();
        },
        heal: function() {
            //player
            if (this.playerHealth > 70) {
                return false;
            } else if(this.playerHealth <= 60) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 70;
            }
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player heals for 10'
            });
            // Monster
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRungning = false;
            this.turns = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            alert("You Lost!")
        },
        monsterAttack: function() {
            damage = this.inputDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                textLog: 'Monster hits Player for ' + damage
            });
            this.checkPlayerOptions();
        },
        inputDamage: function(minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        checkPlayerOptions: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startNewGame();
                } else {
                    this.gameIsRungning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startNewGame();
                } else {
                    this.gameIsRungning = false;
                }
                return true;
            }
            return;
        }
    }
});