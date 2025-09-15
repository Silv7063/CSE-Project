<template>
  <div class="mx-auto mt-4 w-5/6 h-144 bg-white rounded shadow-md flex justify-center items-center p-4 space-x-4">
    <!-- 影像顯示區 -->
    <div class="min-w-3/5 flex-1 flex justify-center items-center">
      <img v-if="preview" :src="preview" class="max-w-full h-auto rounded" />
    </div>

    <!-- 資訊框 -->
    <div class="min-w-2/5 h-full flex-1 bg-indigo-100 p-4 rounded flex flex-col justify-start items-start">
      <h2 class="text-black font-bold text-lg mb-2">即時分析資訊</h2>
      <p class="text-black">這裡將顯示分析結果與其他資料訊息</p>
    </div>
  </div>

  <!-- 功能按鈕區 -->
  <div class="mx-auto mt-4 w-4/5 flex justify-center space-x-4">
    <UploadArea @preview-change="setPreview" />
    <button class="px-4 py-2 bg-green-500 text-white rounded">即時影像連接</button>
  </div>

  <!-- 即時分析結果 -->
  <div class="mx-auto mt-8 w-9/10">
    <AnalysisResult />
  </div>
</template>

<script>
import UploadArea from "../components/UploadArea.vue";
import AnalysisResult from "../components/AnalysisResult.vue";

export default {
  components: { UploadArea, AnalysisResult },
  data() {
    return { preview: null };
  },
  methods: {
    setPreview(url) {
      this.preview = url;
    },
  },
};
</script>
