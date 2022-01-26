<template>
  <div id='app'>
    <b-navbar toggleable='lg' type='dark' variant='dark' class='shadow' style="background-color: #900 !important">
      <b-navbar-brand href='#'>
        <img src='@/assets/dtu.png' class='d-inline-block align-top' alt='DTU' height='30' />
        DiaTool
      </b-navbar-brand>
      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>
      <b-collapse id='nav-collapse' is-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-item>About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <b-row>
        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse border-right p-0 ">
          <div class='sidebar-sticky pt-3'>
            <input
              @change="onFileSelected"
              accept=".csv"
              ref="file"
              type="file" hidden>
            <b-button
              class="ml-3"
              variant="outline-secondary"
              @click="selectFile"
              v-show="!uploading"
              :disabled="this.systemStatus != 'online'">Upload a file</b-button>
            <b-button
              v-show="uploading"
              class="ml-3"
              variant="outline-secondary" disabled >
              Uploading file...</b-button>
            <p class="ml-3 mr-3 mt-2 mb-2 text-muted"><small><strong>Attention:</strong> Uploaded files could be visible for a certain amount of time.</small></p>

            <h6 class="sidebar-heading justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
              :class="Object.keys(this.files).length > 0 ? 'd-flex' : 'd-none'">
              Uploaded files
            </h6>
            <FilesList v-bind:files="files" />

            <SystemStatus v-bind:systemStatus='systemStatus' />
          </div>
        </nav>
        <main role='main' class='col-md-9 ml-sm-auto col-lg-10 pl-md-4 pt-3 pr-0'>
          <router-view :files='this.files' />
        </main>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FilesList from './components/widgets/FilesList.vue'
import SystemStatus from './components/widgets/SystemStatus.vue'
import axios from 'axios'

export default {
  components: {
    SystemStatus,
    FilesList
  },
  data () {
    return {
      files: {},
      uploading: false,
      systemStatus: 'booting'
    }
  },
  methods: {
    onFileSelected(event) {
      console.log('start');
      this.uploading = true;
      var selectedFileUpload = event.target.files[0];
      const payload = new FormData();
      payload.append("file", selectedFileUpload);
      axios
        .put(this.$backend.getUrlUpload(), payload)
        .then((res) => {
          const newFile = {
            name: selectedFileUpload.name,
            id: res.data,
          };
          this.$set(this.files, res.data, newFile);
          this.uploading = false;
          console.log('done');
        });
    },
    selectFile(){
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    checkStatus() {
      axios
        .get(this.$backend.getUrlPing())
        .then((res) => (this.systemStatus = res.data === 'pong' ? 'online' : 'offline'))
        .catch((err) => { console.error(err) ; this.systemStatus = 'offline' })
    },
  },
  mounted () {
    this.checkStatus()
    setInterval(() => {
      this.checkStatus()
    }, 1000 * 15)
  }
}
</script>

<style>
.sidebar-sticky {
  height: calc(100vh - 56px);
}
</style>
