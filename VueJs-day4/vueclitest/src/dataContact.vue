<template>
    <div>
        <p>My address: {{ address }}</p>
        <hr>
        <button @click="changePhone">Show My phone</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                address: 'So nha 10 ngo 74 tan trieu thanh tri ha noi'
            }
        },
        methods: {
            chanePhone() {
                this.address = '0983196214';
            }
        }
    }
</script>