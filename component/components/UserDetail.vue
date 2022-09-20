<template>
    <div>
        <h3>Information User Details</h3>
        <p>List Details</p>
        <p>My name: {{ reverseName() }}</p>
        <p>My Age: {{ userAge }}</p>
        <button>Reset Name</button>
        <button @click="resetNameFN()">Reset case : call back</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
    export default {
        props: {
            customName: {
                type: Object,
                defaulf: 'kien beo'
            },
            resetNameFn: Function,
            userAge: Number
        },
        methods: {
            reverseName() {
                return this.customName.split("").reverse().join("");
            },
            resetName() {
                this.customName = 'Kien Beo';
                this.$emit('nameWasReset', this.customName);
            }
            
        },
        created() {
            eventBus.$on('ageWasEdit', (age) => {
                this.userAge = age;
            })
        }
    }
</script>
<style>
    div {
        background-color: lightcoral;
    }
</style>