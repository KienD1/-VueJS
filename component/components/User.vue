<template>
    <div class="component">
        <h1>The User Component</h1>
        <p> I'm an awesome Developer! I'm {{ name }} and {{ age }} years old</p>
        <button @click="changeName">Change My name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :customName="name" 
                    @nameWasReset="name = $event">
                    :resetNameFn = 'resetName'
                    :userAge="age"
                </app-user-detail>
            </div>
            <div class="col-xs12 col-sm-6">
                <app-user-edit
                :userAge="age"
                @ageWasedit="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>
<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'kien beo',
                age: 18
            }
        },
        methods: {
            changeName() {
                this.name = 'Trung Kien';
            },
            resetName() {
                this.name = 'Kien Beo';
            }
        },
        component: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
<style scoped>
    div {
        background-color: lightblue;
    }
</style>