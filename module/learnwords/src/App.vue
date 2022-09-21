<template>
  <!-- <div id="app"> -->
    <!-- <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn-outline-danger" @click="selectedComponent = 'appCard'">Card</button>
          <button class="btn-outline-danger" @click="selectedComponent = 'appAbuot'">About</button>
          <button class="btn-outline-danger" @click="selectedComponent = 'appContact'">Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div><p>{{selectedComponent}}</p></div>
            <app-card card-words="Cat">
            <h2 slot="title">white CAT</h2>
            <p slot="content">white cat is so nood!</p>
          </app-card> 
          <keep-alive>
            <component :i="selectedComponent"></component>
          </keep-alive>
          
        </div>
      </div>
    </div> -->
  <!-- </div> -->


  <div class="container">
    <appHeader :item-count="items.length" :max-item="maxItem"></appHeader>
    <app-new-item @itemAdded="addItem"></app-new-item>
    <app-item-layout :items="items" @itemRemoved="removeItem"></app-item-layout>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          info: Click on a Item to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from './components/Card.vue';
// import About from './components/About.vue';
// import Contact from './components/Contact.vue'

// export default {
//   data:function() {
//     return {
//       cardTitle: 'White Cat',
//       selectedComponent: 'appCard'
//     }
//   },
//   component: {
//       appCard: Card,
//       appAbout: About,
//       appContact: Contact
//     }
// };
import Header from './components/Header.vue';
import ItemLayout from './components/ItemsLayout.vue';
import NewItem from './components/NewItem.vue';
export default {
  data: function() {
    return {
      items: [
        
      ],
      maxItems: 10
    }
  },
  components: {
      appHeader: Header,   
      appItemLayout: ItemLayout,
      appNewItem: NewItem
  },
  methods: {
      addItem(item) {
        if (this.items.length >= this.maxItem) {
          return alert('Please remove item first')
        }
        this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style>


</style>
