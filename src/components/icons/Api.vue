<script>
export default {
  data() {
    return {
      getJson: null,
      getLink: null
    };
  },
  methods: {
    async fetchApi() {
      let url = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
      let CLIENT_SECRET = '00cd6a25a9c47c0d21634f559db985a66c26b66e';
      let textBox = document.getElementById("textBox").value;

      let language = document.getElementById("language").value;


      var data = {
        "lang": `${language}`,
        "source": `${textBox}`,
        "input": "",
        "memory_limit": 243232,
        "time_limit": 99999,
        "callback": "https://client.com/callback/",
        "id": "client-001"
      };

      await fetch(url, {
        method: 'POST',
        headers: {
          'client-secret': CLIENT_SECRET,
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(result => this.getJson = result);

    },

    async getApi() {
      let CLIENT_SECRET = '00cd6a25a9c47c0d21634f559db985a66c26b66e';

      await fetch(this.getJson.status_update_url, {
        method: 'GET',
        headers: {
          'client-secret': CLIENT_SECRET,
        }

      }).then(response => response.json())
        .then(response => {
          console.log(response)

          fetch(response.result.run_status.output)
            .then((response) => response.text())
            .then((data) => {
              document.getElementById("textBoxOutput").value = data;
            });

        });
      //response

    },
    loadFile() {

      document.getElementById("fileImport")
        .addEventListener("change", function () {
          var fr = new FileReader();
          fr.readAsText(this.files[0]);
          fr.onload = function () {
            document.getElementById("textBoxOutput").value = fr.result;
          };
        });

    }

  },
};
</script>

<template>
  <div>
    <select id="language" @change="onChangeSite">

      <option value="C">c</option>
      <option value="CPP">c++</option>
      <option value="CSHARP">c#</option>
      <option value="JAVA">java</option>
      <option value="JAVASCRIPT">javascript</option>
      <option value="JAVASCRIPT_NODE">javascript_node</option>
      <option value="KOTLIN">kotlin</option>
      <option value="PHP">php</option>
      <option value="PYTHON">python</option>
      <option value="R">r</option>
      <option value="RUBY">ruby</option>

    </select>
  </div>
  <div>
    <div>
      <v-btn variant="flat" color="secondary" @click="fetchApi">Post my Api</v-btn>
    </div>
    <textarea rows="4" cols="50" placeholder="ceva" id="textBox"></textarea>
    <textarea rows="4" cols="50" placeholder="ceva" id="textBoxOutput"></textarea>

    <p id="p"></p>
    <div v-if="getJson">
      <button @click="getApi">Get my Api</button>

      "
    </div>
  </div>
  

</template>

<style scoped>
#textBoxOutPut {
  left: 10px;
}
</style>