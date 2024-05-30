<template>
    <!-- <div class="w-full flex justify-center">
        <div ref="el" class="w-1/2 mt-6 pt-6 bg-gray-300">
            Testing
        </div>
    </div> -->

    <div id="linux">
        
    <div class="linux-wrapper grid grid-cols-12">
        <!-- sidebar -->
        <div id="sidebar" class="grid-span-2 h-screen">
            <div class="bg-gray-900 m-6 rounded-xl text-white h-fit flex items-center flex-col space-y-10 py-10">
                <div class="">
                    <Icon name="clarity:power-solid" color="#D20062"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="">
                    <Icon name="material-symbols:network-wifi" color="#F3CA52"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="">
                    <Icon name="material-symbols:sound-sampler-rounded" color="#90D26D"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="">
                    <Icon name="ic:baseline-battery-80" color="#FFF7FC"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="">
                    <Icon name="solar:bluetooth-circle-broken" color="#7AA2E3"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="">
                    <Icon name="streamline:interface-dashboard-layout-3-app-application-dashboard-home-layout" color="#C738BD"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
            </div>
        </div>
        <div id="main" class="grid-span-10 w-[90vw] flex flex-col justify-center items-center">
            <div class="main-wrapper w-full h-full flex p-10 space-x-10">
                
                <!-- profile -->
                <Profile/>
                <Music/>
                <Terminal/>

            </div>
            <div class="h-full w-full pb-10 flex px-10 space-x-10">
                <Matrix/>
                <div class="bg-pink-300 w-full h-full ">Base</div>
            </div>
        </div>

    </div>


    </div>


</template>
<script setup>
// import { ref, onMounted } from 'vue'
// import { useShepherd } from 'vue-shepherd'

// const el = ref(null);



// const tour = useShepherd({
//     useModalOverlay: true,
//     defaultStepOptions: {
//         scrollTo: true
//     }
// });

// onMounted(() => {
//     tour.addStep({
//         id: 'example-step',
//         text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
//         attachTo: {
//             element: el.value,
//             on: 'bottom'
//         },
//         classes: 'step1',
//         buttons: [{
//             text: 'Exit',
//             classes: 'step1-btn2',
//             action: tour.next
//         },{
//             text: 'Next',
//             classes: 'step1-btn1',
//             action: tour.next
//         }]
//     });

//     tour.start();
// });
</script>
<style>
#linux{
    width:100vw;
    height: 100vh;
     background-repeat: no-repeat;
      background-size: cover; 
       background-position: center;
    background-image: url("/bg.jpg");
}

.shepherd-arrow {
    display: none;
}

.example-step-extra-class {
    border: 2px solid black;
}

.step1{
  border: 4px solid black;
  margin-top: 1rem;
}

.step1 #example-step-description {
    color: #FC6736;
    padding:2em;
}


.step1 .shepherd-footer{
  display: flex;
  justify-content:end;
  padding: 0;
  border-radius:0;
}

.step1 .shepherd-button{
  width: 50%;
  border-top:4px solid #0C2D57;
  border-radius: 0;
  display:flex;
  flex-grow: 1;
  justify-content: center;
  margin: 0;
  background-color: ghostwhite;
  color:black;
}

.step1 .shepherd-button:hover{
  background-color:#FC6736;
  color:white;
}

.step1 .step1-btn1{
  border-left: 2px solid #0C2D57;
}
.step1 .step1-btn2{
  border-right: 2px solid #0C2D57;
}
</style>