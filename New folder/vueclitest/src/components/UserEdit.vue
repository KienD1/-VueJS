<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me</p>
        <p>My age: {{ userAge }}</p>
        <button @click="editAge">Change My Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    props: {
        userAge: Number
    },
    methods: {
        editAge: {
            editAge() {
                this.userAge = 30;
                // this.$emit('ageWasEdit', this.userAge);
                // eventBus.$emit('ageWasEdit', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>