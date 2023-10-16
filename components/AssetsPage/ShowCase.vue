<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/*------ Settings ------*/
.container {
  --color: #FFFEE2;
  --size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: var(--size);
  user-select: none;
  fill: var(--color);
}

.container .clipboard {
  position: absolute;
  animation: keyframes-fill .5s;
}

.container .clipboard-check {
  position: absolute;
  display: none;
  animation: keyframes-fill .5s;
}

/* ------ On check event ------ */
.container input:checked~.clipboard {
  display: none;
}

.container input:checked~.clipboard-check {
  display: block;
}

/* ------ Hide the default checkbox ------ */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* ------ Animation ------ */
@keyframes keyframes-fill {
  0% {
    transform: rotate(0deg) scale(0);
    opacity: 0;
  }

  50% {
    transform: rotate(-10deg) scale(1.2);
  }
}
</style>
<template>
  <div class="w-full border-2 border-blue-500 md:h-[calc(100vh-550px)] h-[calc(100vh-150px)] overflow-y-scroll">
    <div class="flex w-fit">
      <!-- <button @click="activeTab = 'tab1'"
        :class="{ ' border-2  border-b-0 border-black rounded-md rounded-b-none text-black text-base font-semibold': activeTab === 'tab1', 'bg-[#]': activeTab !== 'tab1' }"
        class="flex-1 px-4 py-2">
        View
      </button> -->
      <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = tab "
        :class="{ 'border-2  border-b-0 border-black rounded-md rounded-b-none text-black text-base font-semibold': activeTab == tab }"
        class="flex-1 px-4 py-2">
        {{ tab }}
        <!-- Code {{ index + 1 }} -->
      </button>
    </div>
    <div class=" border-2 p-5 border-black rounded-md rounded-tl-none flex justify-center items-center "
      :class="{ 'rounded-tl-lg': activeTab === 'tab2' }">
      <Transition name="fade">
        <div v-if="activeTab === 'tab1'" class="flex justify-center items-center p-4 border h-full w-full">

          <!-- Components Renders Here -->
          <!-- <button
            class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-man transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
            hover me!
          </button> -->
          
          <span >
            <div v-html="props.code" />
          </span>

        </div>
      </Transition>
      <Transition name="fade">
      <div v-if="activeTab === 'tab2'" class="">

        <!-- Code shows here -->
        <aside class="bg-black text-white p-6 rounded-lg w-full font-mono mt-2">
          <div class="flex gap-5 items-center justify-between">
            <div class="flex space-x-2 items-center text-red-500">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <p class="text-sm text-white pl-3"> /Tailwind Css</p>
            </div>
            <!-- <button @click="copyCodeToClipboard()">Copy to Clipboard</button> -->

            <div @click="copyCodeToClipboard()">
              <label class="container w-fit">
                <input name="copy" checked="checked" type="checkbox">
                <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="clipboard">
                  <path
                    d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z">
                  </path>
                </svg>
                <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="clipboard-check">
                  <path
                    d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z">
                  </path>
                </svg>
              </label>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-green-400">$ Component code starts here!</p>
            <div class="p-5 code-container w-full">

              <span class="code-container">
                {{ props.preview }}
              </span>
            </div>
            <p class="text-green-400">$ ends here!</p>
          </div>
          <!-- <button @click="copyCodeToClipboard()">Copy to Clipboard</button> -->

        </aside>
      </div>
      </Transition>
    </div>
    <!-- <pre>
      {{ apiData }}
    </pre> -->
  </div>
</template>

<script setup>
const activeTab = ref('tab1')
const tabs = ['tab1', 'tab2']

function copyCodeToClipboard() {
  const codeContainer = document.querySelector(".code-container");
  const code = codeContainer.textContent;

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = code;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  // alert("Code has been copied to the clipboard!");
}

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    required: true
  }
})

</script>
