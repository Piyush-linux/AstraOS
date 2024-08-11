<script setup>

const location = ref(null);
const weather = ref(null);
let date = new Date();
let today = `${date.getDate()} . ${date.getMonth()} . ${date.getFullYear()}`;

onMounted(async () => {
	console.log('fetching ...')
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		console.log("Geolocation not supported");
	}

	async function success(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		// location.value = { latitude, longitude };
		console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

		// Make API call to OpenWeatherMap
		try {
			let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=256156d28a4575e841a3cce2fdfc060b&units=metric`);
			let data = await raw.json();
			location.value = data;
			console.log(data)
		} catch (error) {
			console.log(error);
		}
	}

	function error() {
		console.log("Unable to retrieve your location");
	}

})



</script>
<template>
	<div class="w-full h-full opacity-[.7]">
		<div class="flex flex-col items-center h-full p-8 rounded-md w-60 sm:px-12 bg-gray-900 text-gray-100">
			<div class="text-center">
				<h2 class="text-xl font-semibold"> {{ location?.name || "City" }}, {{ location?.sys.country || "Country" }} </h2>
				<p class="text-sm text-gray-400"> {{ today }} </p>
			</div>

			<Icon name="ph:cloud-fog-fill" color="#E1AFD1" class="w-32 h-32 p-6 text-yellow-400 fill-current" />
			<!-- <Icon name="material-symbols:weather-snowy" color="#E1AFD1" class="w-32 h-32 p-6 text-yellow-400 fill-current" /> -->
			<!-- <Icon name="ph:sun-dim-fill" color="#E1AFD1" class="w-32 h-32 p-6 text-yellow-400 fill-current" /> -->
			<div class="mb-2 text-xl font-semibold"> {{ location?.main.temp_max || "Max" }}
				<span class="mx-1 font-normal">/</span> {{ location?.main.temp_min || "Min" }}
			</div>
			<p class="text-gray-400">{{ location?.weather[0].main || "Condition" }}</p>
		</div>
	</div>
</template>