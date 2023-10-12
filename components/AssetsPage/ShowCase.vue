<template>
  <div class="w-full">
    <div class="flex w-fit">
      <button @click="activeTab = 'tab1'"
        :class="{ 'bg-[#7c7c7c] text-white': activeTab === 'tab1', 'bg-[#FFFEE2] text-blackCow': activeTab !== 'tab1' }"
        class="flex-1 px-4 py-2">
        View
      </button>
      <button @click="activeTab = 'tab2'"
        :class="{ 'bg-[#7c7c7c] text-white': activeTab === 'tab2', 'bg-[#FFFEE2] text-blackCow': activeTab !== 'tab2' }"
        class="flex-1 px-4 py-2">
        Code
      </button>
    </div>
    <div class=" border border-gray-300 h-80">
      <div v-if="activeTab === 'tab1'" class="flex justify-center items-center border h-full p-4">
        <!-- Content for Tab 1 -->

        <button
          class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-man transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
          hover me!
        </button>


      </div>
      <div v-if="activeTab === 'tab2'" class="bg-black text-white">
        <!-- Content for Tab 2 -->

        <div class="p-4 code-container">

          <code>
            &lt;button class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"&gt;
            hover me!
            &lt;/button&gt;
          </code>
        </div>
     <button @click="copyCodeToClipboard()">Copy to Clipboard</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('tab1')

function copyCodeToClipboard() {
  const codeContainer = document.querySelector(".code-container");
  const code = codeContainer.textContent;

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = code;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  alert("Code has been copied to the clipboard!");
}
</script>
