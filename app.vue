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
                <div ref="time" class="text-white border-2 border-gray-100 p-3 rounded-xl">
                    <span> {{ d.getHours() }} : {{d.getMinutes()}} </span>
                    <!-- <Icon name="clarity:power-solid" color="#D20062"  class="text-5xl border-2 border-gray-500 rounded-full p-2" /> -->
                </div>
                <div class="" ref="btn_power">
                    <Icon name="clarity:power-solid" color="#D20062"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="btn_wifi" ref="btn_wifi">
                    <Icon name="material-symbols:network-wifi" color="#F3CA52"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="" ref="btn_sound">
                    <Icon name="material-symbols:sound-sampler-rounded" color="#90D26D"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="" ref="btn_battery">
                    <Icon name="ic:baseline-battery-80" color="#FFF7FC"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="" ref="btn_bluetooth">
                    <Icon name="solar:bluetooth-circle-broken" color="#7AA2E3"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
                <div class="" ref="btn_app">
                    <Icon name="streamline:interface-dashboard-layout-3-app-application-dashboard-home-layout" color="#C738BD"  class="text-5xl border-2 border-gray-500 rounded-full p-2" />
                </div>
            </div>
        </div>
        <div id="main" class="grid-span-10 w-[90vw] flex flex-col justify-center items-center">
            <div class="main-wrapper w-full h-full flex p-10 space-x-10">
                
                <!-- profile -->
                <Profile/>
                <Music/>
                <Pfetch/>

            </div>
            <div class="h-full w-full pb-10 flex px-10 space-x-10">
                <Matrix/>
                <Editor/>
                <!-- <Terminal/> -->
                <div class=" w-full h-full ">Base</div>
            </div>
        </div>

    </div>


    </div>


</template>
<script setup>

import { ref, onMounted } from 'vue'
import { useShepherd } from 'vue-shepherd'

const btn_power = ref(null);
const btn_sound = ref(null);
const btn_wifi = ref(null);
const btn_app = ref(null);
const btn_battery = ref(null);
const btn_bluetooth = ref(null);

const comp_profile = ref(null);
const comp_music = ref(null);
const comp_pfetch = ref(null);
const comp_matrix = ref(null);
const comp_notepad = ref(null);


let d = new Date();


const tour = useShepherd({
    useModalOverlay: true,
    defaultStepOptions: {
        scrollTo: true,
        exitOnEsc: true
    }

});


onMounted(() => {

    // Tour-Power
    tour.addStep({
        id: 'example-step',
        text: 'Linux power button, your gateway to seamless system management 💜',
        attachTo: {
            element: btn_power.value,
            on: 'right'
        },
        classes: 'step1',
        buttons: [{
            text: 'Next',
            classes: 'step1-btn1',
            action: tour.next
        }]
    });

    // Tour-Wifi
    tour.addStep({
        id: 'example-step',
        text: 'Wifi power button, your gateway to seamless system management 💜',
        attachTo: {
            element: btn_wifi.value,
            on: 'right'
        },
        classes: 'step1',
        buttons: [{
            text: 'Back',
            classes: 'step1-btn2',
            action: tour.back
        },{
            text: 'Next',
            classes: 'step1-btn1',
            action: tour.next
        }]
    });

     // Tour-Sound
    tour.addStep({
        id: 'example-step',
        text: 'Wifi power button, your gateway to seamless system management 💜',
        attachTo: {
            element: btn_sound.value,
            on: 'right'
        },
        classes: 'step1',
        buttons: [{
            text: 'Back',
            classes: 'step1-btn2',
            action: tour.back
        },{
            text: 'Next',
            classes: 'step1-btn1',
            action: tour.next
        }]
    });

    // Tour-Battery
    tour.addStep({
        id: 'example-step',
        text: 'Wifi power button, your gateway to seamless system management 💜',
        attachTo: {
            element: btn_battery.value,
            on: 'right'
        },
        classes: 'step1',
        buttons: [{
            text: 'Back',
            classes: 'step1-btn2',
            action: tour.back
        },{
            text: 'Next',
            classes: 'step1-btn1',
            action: tour.next
        }]
    });

     // Tour-Bluetooth
    tour.addStep({
        id: 'example-step',
        text: 'Wifi power button, your gateway to seamless system management 💜',
        attachTo: {
            element: btn_bluetooth.value,
            on: 'right'
        },
        classes: 'step1',
        buttons: [{
            text: 'Back',
            classes: 'step1-btn2',
            action: tour.back
        },{
            text: 'Next',
            classes: 'step1-btn1',
            action: tour.next
        }]
    });

    // Tour-App
    tour.addStep({
        id: 'example-step',
        text: 'App power button, your gateway to seamless system management 💜',
        attachTo: {
            element: btn_app.value,
            on: 'right'
        },
        classes: 'step1',
        buttons: [{
            text: 'Back',
            classes: 'step1-btn2',
            action: tour.back
        },{
            text: 'Next',
            classes: 'step1-btn1',
            action: tour.next
        }]
    });

    tour.start();
});
</script>

<style>
.glass{
	background-color: transparent;
	backdrop-filter: blur(20px);
	background-image: linear-gradient(
		120deg,
    rgba(255,255,255,.2),rgba(1,2,1,.5)
        /* rgba(255,255,255,.6) , */
	    /* rgba(1,1,1,.7) , */
	);
}


#linux{
    width:100vw;
    height: 100vh;
     background-repeat: no-repeat;
      background-size: cover; 
       background-position: center;
    background-image: url("/astraos/bg.jpg");
}

/*.shepherd-arrow {
    display: none;
}*/

.example-step-extra-class {
    border: 2px solid black;
}

.step1{
  border: 4px solid #151515;
  margin-top: 1rem;
  border-radius: 10px;
}

.step1 #example-step-description {
    color: #1E0342;
    padding:2em;
}


.step1 .shepherd-footer{
  display: flex;
  justify-content:end;
  padding: 0;
  border-radius:0;
  border-radius: 0 0 10px 10px;
}

.step1 .shepherd-button{
  width: 50%;
  border-top:4px solid #0C2D57;
  
  display:flex;
  flex-grow: 1;
  justify-content: center;
  margin: 0;
  background-color: ghostwhite;
  color:black;
}

.step1 .shepherd-button:hover{
  background-color:#86469C;
  color:white;
}

.step1 .step1-btn1{
  border-left: 2px solid #0C2D57;
}
.step1 .step1-btn2{
  border-right: 2px solid #0C2D57;
}

.btn_wifi{
    animation: bounce;
    animation-duration: 3s;
}
</style>