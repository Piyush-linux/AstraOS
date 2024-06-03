
<script setup>

    let progress = ref(null)
    let song = ref(null)
    let ctrlIcon = ref(null)
    let songState = ref(false)

    onMounted(()=>{
        // console.log(song.value)
        song.value.onloadedmetadata = function() {
           progress.value.max = song.value.duration;
           progress.value.value = song.value.currentTime
        }
        
        if(song.value.play()){
            setInterval(()=>{
                progress.value.value = song.value.currentTime ;
            },500);
        }

        progress.value.onChange = function(){
            song.value.play();
            song.value.currentTime = progress.value.value  ;
            songState = !songState ;
        }

    })

    let play = ()=>{
        if(songState.value){
            song.value.pause()
        }else{
            song.value.play()
        }
        songState.value = !songState.value ;
    }


</script>

<template>
    <div class="music f1 opacity-[.8]">
        <!-- component -->
        <div class="flex justify-center items-center h-fit">
            <div class="bg-gray-900 p-8 rounded-lg shadow-md w-80">
                <!-- Album Cover -->
                <img src="/music.jpg" alt="idk - Highvyn, Taylor Shin" class="w-full h-[15vh] mx-auto rounded-lg object-cover mb-4 border-2 border-gray-500">
                <!-- Song Title -->
                <h2 class="text-xl font-semibold text-center text-[#FFE6E6]">wfm</h2>
                <!-- Artist Name -->
                <p class="text-sm text-center text-[#7469B6]">RealestK</p>
                <!-- Music Controls -->
                <div class="mt-6 flex justify-center items-center">
                    <!-- prev -->
                    <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
                        <Icon name="material-symbols:skip-previous" color="#151515" class="text-2xl text-gray-600" />
                    </button>
                    <!-- play/pause -->
                    <button @click="play()" class="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
                        <Icon v-show="songState" name="material-symbols:pause-circle-outline" color="#151515" class="text-4xl text-gray-600" ref="ctrlIcon" id="ctrlIcon" />
                        <Icon v-show="!songState" name="material-symbols:play-circle" color="#151515" class="text-4xl text-gray-600" ref="ctrlIcon" id="ctrlIcon" />
                    </button>
                    <!-- next -->
                    <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
                        <Icon name="material-symbols:skip-next-rounded" color="#151515" class="text-2xl text-gray-600" />
                    </button>
                </div>
                <!-- Progress Bar -->
                <!-- <div class="mt-6 bg-gray-200 h-2 rounded-full"> -->
                    <!-- <div class="bg-teal-500 h-2 rounded-full w-1/2"></div> -->
                    <div class="flex justify-center">
                        <input type="range" value="0" id="progress" ref="progress" class=" mt-6">
                    </div>
                <!-- </div> -->
                <div class="flex justify-between mt-2 text-sm text-gray-600">
                    <span>1:57</span>
                    <span>3:53</span>
                </div>
                <!-- /// -->
                 <audio controls id="song" ref="song" class="hidden">
                  <source src="/wfm.mp3" type="audio/mpeg">
                  Your browser does not support the audio tag.
                </audio> 
            </div>
        </div>
    </div>
</template>
