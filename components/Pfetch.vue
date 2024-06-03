<template>
    <div class="terminal w-full h-full opacity-[.8]">
        <div class="terminal-wrapper w-full h-full bg-gray-900 rounded-xl grid grid-cols-6">
            <!--  -->
            <div class="col-span-2 w-full h-full">
                <div class="flex justify-center items-center h-full p-6 ">
                    <img src="/terminal.jpg" alt="" class="rounded-full">
                </div>
            </div>
            <div class="col-span-4 w-full text-xs p-8 f2">
                <div class="text-white mb-4">
                    <span class="text-emerald-200">piyush</span>@<span class="text-purple-300">linux</span>
                    <!-- <hr class="my-3"> -->
                </div>
                <ul class="space-y-3 border-2 border-gray-300 p-4 rounded-xl">
                	<!-- processor, wm, ram, space, pacman(packages) -->
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:settings-heart-rounded" color="#AD88C6" class="text-xl" />
                        <span class="text-white">
                            Astra OS
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:computer-outline-rounded" color="#FF5580" class="text-xl" />
                        <span class="text-white">
                            GNU Book
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:terminal-rounded" color="#E6FF94" class="text-xl" />
                        <span class="text-white">
                            alacritty
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:layers" color="#FDDE55" class="text-xl" />
                        <span class="text-white">
                            wayfire
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:imagesmode-outline-rounded" color="#6DC5D1" class="text-xl" />
                        <span class="text-white">
                             1920x1080
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:package-2-outline-sharp" color="#7469B6" class="text-xl" />
                        <span class="text-white">
                            3296 pkgs
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:keyboard-command-key" color="#40A578" class="text-xl" />
                        <span class="text-white">
                            11th Gen Intel i5-1155G7 (8) @ 4.5
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:pie-chart-outline" color="#FF7D29" class="text-xl" />
                        <span class="text-white">
                            4275MiB / 7680MiB
                        </span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <Icon name="material-symbols:familiar-face-and-zone-rounded" color="#F1E5D1" class="text-xl" />
                        <span class="text-white">
                            Piyush
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>