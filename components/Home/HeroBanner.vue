
import { buildAssetsDir } from 'nuxt/dist/core/runtime/nitro/paths';
<template>
  <section class="bg-[#f5f2fc]">
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl font-sans sm:text-5xl">
          Widgets and Components 
          <strong class="font-extrabold text-red-700 sm:block">
            with Tailwind Css
          </strong>
        </h1>

        <p class="mt-4 sm:text-xl/relaxed">
          Let's build Assets Swift!
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a class="block w-fit rounded bg-[#FFFEE2] px-12 py-3 text-sm font-medium text-BalticSea shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="/">
            Get Started
          </a>

          <a class="block w-fit rounded px-12 py-3 bg-[#FFFEE2] text-sm font-medium text-blackCow shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="/">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>