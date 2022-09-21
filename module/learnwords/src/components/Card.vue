<template>
    <div>
        <!-- <h2>{{ cardWords }}</h2>
        <p>This is my car</p> -->
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc">
                <!-- slot have value default which is slot default -->
                <slot nama="subTitles">The Subtitle</slot>
            </span>
        </div>
        <div class="contet">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cardWords']
}
</script>

<style scoped>
    div {
        widows: 100%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }
    h2 {
        color: red;
    }
    .title {
        font-style: italic;
    }
</style>