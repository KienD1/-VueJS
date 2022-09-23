<template>
    <div class="container">
        <div class="row">
            <!-- <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Default/ Built-in Directives</h1>
                <p v-text="'Something else....'"></p>
                <p v-html="'<h1>This is heading one</h1>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Diectives</h1>
                <p v-custom:background.delayed="'yellow'">Color style by directives global</p>
                <p v-local-custom:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color style by directives local</p>
            </div> -->
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Filter & Mixins</h1>
                <p>{{ text | toLowerCase | to-uppercase}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h3>Filters Products</h3>
                <button class="btn btn-block btn-success" @click="products.push('Mixins')">Add New Item</button>
                <input type="text" class="form-control md-md-3" placeholder="Press name product..." v-model="filterProudct">
                <div class="card" mb-md-3>
                    <div class="card-body">
                        <ul>
                            <li v-for="product in filteredProducts" v-bind:key="product">{{ product}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <app-list></app-list>
    </div>
    
</template>
<script>
import List from './List.vue';
import { productMixin } from './productMixin.js';
export default {
    // components: {
    // },
    // directives: {
    //     'local-custom': {
    //         bind(el, binding, vnode) {
    //             var delay = 0;
    //             if (binding.modifiers['delay']) {
    //                 delay = 3000;
    //             }
    //             if (binding.modifiers['blink']) {
    //                 let mainColor = binding.value.mainColor;
    //                 let secondColor = binding.value.secondColor;
    //                 let currentColor = mainColor;
    //                 setTimeout(() => {
    //                     setInterval(() => {
    //                         currentColor == secondColor
    //                             ? currentColor = mainColor
    //                             : currentColor = secondColor;
    //                         if (binding.arg == 'background') {
    //                             el.style.backgroundColor = currentColor;
    //                         } else {
    //                             el.style.color = currentColor;
    //                         }
    //                     }, binding.value.delay)
    //                 }, delay);
    //             }
    //             else {
    //                 setTimeout(() => {
    //                     if (binding.arg == 'background') {
    //                         el.style.backgroundColor = binding.value.mainColor;
    //                     } else {
    //                         el.style.color = binding.value.mainColor;
    //                     }
    //                 }, delay);
    //             }
    //         }
    //     }
    // }



    created() {
        console.log('Created!')
    },
    mixins: [productMixin],
    data() {
        return {
            text: 'Hello everyone,Vae JS',
            // products: ['Iphone', 'SamSung', 'HTC', 'Nokia', 'Noway', 'Bphone'],
            // filterProudct: ''
        }
    },
    filters: {
        toLowerCase(text) {
            return text.toLowerCase();
        }
    },
    // computed: {
    //     filteredProducts() {
    //         return this.products.filter((element) => {
    //             return element.match(this.filterProudct);
    //         })
    //     }
    // },
    components: {
        appList: List,
    }
}
</script>

<style>

</style>
