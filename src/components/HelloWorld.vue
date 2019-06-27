<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="convert">点击获取数据</button>
    <hr>
    <button @click="test">postAxios</button>
  </div>
</template>
<script>
import { getSnInfo } from "@/api/data";
import axios from "axios";
export default {
  name: "HelloWorld",
   props: {
        msg: String
      },
  data() {
    return {
      //需要this引用，否则是未定义提示
      myData: { sn: "sn666666" }
  
    };
  },

  methods: {
    convert() {
      // const data = { sn: "sn666666" };
      getSnInfo(this.myData)
        .then(res => {
          alert(this.myData, "data");
          console.log(res.data.data);
        })
        .catch(function(error) {
          console.log(error + "错误的信息");
        });
    },
    test() {
      const data = { sn: "sn666666" };
      axios
        .post("device/Verify/checkDevice", data)
        .then(function(response) {
          alert("okyes", response);
          console.log(response.data.message);
          console.log(response.data.data);
          console.log(response.data.data.shop_name);
        })
        .catch(function(error) {
          alert("no_error", error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
