<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Create refs for the profile data
const profileSrc = ref("Github Image");
const profileName = ref("Name");
const profileSumm = ref("Your Github Bio");
const profileExists = ref(false);
const githubUsername = ref(""); // Add a ref for the GitHub username input

const fetchGitHubProfile = async (githubName) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${githubName}`,
    );
    const profileData = {
      avatar_url: response.data.avatar_url,
      name: response.data.name,
      summe: response.data.bio,
      username: response.data.login, // corrected key from `username` to `login`
    };
    // Store the fetched data in localStorage
    localStorage.setItem("githubProfile", JSON.stringify(profileData));
    // Update the refs with the fetched data
    profileSrc.value = profileData.avatar_url;
    profileName.value = profileData.name;
    profileSumm.value = profileData.summe;
    profileExists.value = true;
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
};

const fetchAndStoreProfile = () => {
  fetchGitHubProfile(githubUsername.value); // Use the githubUsername ref's value
};

const clearProfile = () => {
  localStorage.removeItem("githubProfile");
  profileExists.value = false; // Ensure profileExists is set to false
};

// Fetch profile data from localStorage or GitHub API on component mount
onMounted(() => {
  const storedProfile = localStorage.getItem("githubProfile");
  if (storedProfile) {
    const profileData = JSON.parse(storedProfile);
    profileSrc.value = profileData.avatar_url;
    profileName.value = profileData.name;
    profileSumm.value = profileData.summe;
    profileExists.value = true;
  }
});
</script>

<template>
  <div v-if="profileExists" class="profile f1 w-full h-full">
    <div class="max-w-sm opacity-[.8] h-full">
      <div
        class="rounded-lg border bg-gray-900 px-8 py-8 pb-10 space-y-6 shadow-xl border-none h-full flex flex-col items-center justify-center"
      >
        <div class="relative mx-auto w-36 rounded-full">
          <img
            class="mx-auto h-auto w-full rounded-full"
            :src="profileSrc"
            alt=""
          />
        </div>
        <h1
          class="my-1 text-center text-2xl font-bold leading-8 text-[#E1AFD1]"
        >
          {{ profileName }}
        </h1>
        <p
          class="text-center text-sm leading-6 text-[#FFE6E6] hover:text-gray-600 font-bold"
        >
          {{ profileSumm }}
        </p>
        <button
          class="text-center text-m leading-6 text-[#FFE6E6] hover:text-gray-600 font-bold my-6"
          type="button"
          @click="clearProfile"
        >
          Clear Profile
        </button>
      </div>
    </div>
  </div>
  <div v-else class="profile f1 w-full h-full">
    <div class="max-w-sm opacity-[.8] h-full">
      <div
        class="rounded-lg border bg-gray-900 px-8 py-8 pb-10 space-y-6 shadow-xl border-none h-full flex flex-col items-center justify-center"
      >
        <h2
          class="my-1 text-center text-2xl font-bold leading-8 text-[#E1AFD1]"
        >
          Enter your GitHub username
        </h2>
        <form @submit.prevent="fetchAndStoreProfile">
          <input
            class="my-12 rounded-lg text-center text-2xl font-bold leading-8 text-[#E1AFD1]"
            type="text"
            v-model="githubUsername"
            placeholder="GitHub Username"
            required
          />
          <button
            class="text-center text-m leading-6 text-[#FFE6E6] hover:text-gray-600 font-bold my-6"
            type="button"
            @click="fetchAndStoreProfile"
          >
            Get Profile
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
