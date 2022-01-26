<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mr-4 border-bottom ">
      <h1 class='h2'>Details of file <code>{{ this.file.name }}</code></h1>
    </div>
    <b-tabs
          content-class="mt-3">
          <b-tab title="Picture 1">
            <img :src='this.$backend.getUrlPic1(this.file.id)' />
          </b-tab>
          <b-tab title="Picture 2">
            <img :src='this.$backend.getUrlPic2(this.file.id)' />
          </b-tab>
      </b-tabs>
  </div>
</template>

<script>
export default {
    name: "Details",
    props: ["files"],
    data() {
      return {
        file: {
          id: null,
          name: ''
        }
      }
    },
    created() {
       this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            if ('id' in this.$route.params) {
                if (this.$route.params.id in this.files) {
                    this.file = this.files[this.$route.params.id];
                } else {
                    this.$router.push("/");
                }
            }
        },
    }
}
</script>
