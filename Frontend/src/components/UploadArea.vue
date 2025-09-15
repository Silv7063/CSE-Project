<template>
  <div class="flex">
    <!-- 隱藏 input，透過按鈕觸發 -->
    <input type="file" ref="fileInput" @change="handleFile" class="hidden" />
    <button @click="selectFile" class="px-4 py-2 bg-blue-700 text-white rounded">
      上傳影像
    </button>
  </div>
</template>

<script>
import { uploadImage } from "../services/api";

export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    selectFile() {
      this.$refs.fileInput.click();
    },
    handleFile(event) {
      this.file = event.target.files[0];
      if (!this.file) return;

      // 顯示預覽
      const previewUrl = URL.createObjectURL(this.file);
      this.$emit("preview-change", previewUrl);

      // 自動上傳
      this.submitFile();
    },
    async submitFile() {
      if (!this.file) return;
      try {
        const res = await uploadImage(this.file);
        alert(res.message || "上傳成功！");
      } catch (err) {
        console.error(err);
        alert("上傳失敗");
      }
    },
  },
};
</script>
