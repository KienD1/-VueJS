export const productMixin =  {
    data() {
        return {

            products: ['Iphone', 'SamSung', 'HTC', 'Nokia', 'Noway', 'Bphone', 'Oppo', 'Bla Bla'],
            filterProudct: ''
        }
    },

    computed: {
        filteredProducts() {
            return this.products.filter((element) => {
                return element.match(this.filterProudct);
            })
        }
    },
    created() {
        console.log('Created from Mixins')
    }
}
