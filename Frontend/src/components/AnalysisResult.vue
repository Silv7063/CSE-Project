<template>
  <div class="p-4 border rounded shadow-md mt-4 bg-gray-100 ">
    <h2 class="font-bold mb-2">分析結果</h2>
    <div v-if="messages.length === 0">尚未收到資料</div>
    <ul>
      <li v-for="(msg, idx) in messages" :key="idx">{{ msg.text }}</li>
    </ul>
  </div>
</template>

<script>
import { connectWS } from "../services/ws";

export default {
  data() {
    return { messages: [] };
  },
  mounted() {
    connectWS((data) => { this.messages.push(data); });
  },
};
</script>
