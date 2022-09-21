<template>
    <div>
        <h1>This is Contact Page!</h1>
        <button @click="counter++">Increase Value</button>
        <p>{{ counter }}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            counter: 0
        }
    },
    created() {
        console.log('Created');
    },
    destroyed() {
        console.log('Destroyed!');
    },
    deactivated() {
        console.log('Deactivated');
    },
    activated() {
        console.log('Activated');
    }

}
  
</script>

<style scoped>
    
</style>