<script setup>

    let newX = ref(0);
    let newY = ref(0);
    let startX = ref(0);
    let startY = ref(0);


    let mouseDown = (e) => {
        startX = e.clientX;
        startY = e.clientY;
        console.log(e) 
    }

</script>
<template>
    <div class="panel" @mousedown="mouseDown">
        Panel
    </div>
</template>

<style>
.panel{
    width: 100px;
    height: 100px;
    position: fixed;
    cursor: pointer;
    background-color: aliceblue;
}
</style>