<template>
  <div class="w-full h-full bg-teal-100">
    <!-- 導覽列 -->
    <nav class="bg-blue-700 px-6 py-3 h-16 flex justify-start items-center space-x-6">
      <router-link to="/Analysis" class="text-white text-2xl font-semibold hover:text-gray-300">
        影像分析
      </router-link>
      <router-link to="/History" class="text-white text-2xl font-semibold hover:text-gray-300">
        歷史紀錄
      </router-link>
    </nav>

    <!-- 路由頁面內容 -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
