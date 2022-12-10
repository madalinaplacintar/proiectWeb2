<template>
     <header>
  <div class="backGroundHeader">
    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
      <h1 >My music</h1>
    </div>
  </div>    
  </header>
    <v-form  @submit.prevent="submitSearch(true)">
        <v-text-field
          v-model="search"
          label="Search for artist"
          required
        >
    </v-text-field>
    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
        <v-btn outline color="pink" type="submit" >
                Search
        </v-btn>
    </div>    
    </v-form>
 
     <v-card-text v-if="albums.length">
            <div
              class="text-xs-center my-1 mx-3 album-card"
              v-for="(album, index) in albums"
              :key="index"
            >
              <v-avatar
                :tile="true"
                size="160"
                class="elevation-4 album-box mt-3"
                @click="toiTunesAlbum(album)"
              >
                <img :src="resizeArtworkUrl(album)" alt="Album Cover" class="album-cover">
              </v-avatar>
              <v-flex class="text-xs-left mt-2 album-info" xs12>
                <div v-if="album.wrapperType === 'track'" class="subheading font-weight-medium white--text">
                    {{ album.trackName }}
                </div>
                <div class="subheading font-weight-medium text--lighten-2 grey--text">{{ album.collectionName }}</div>
                <div class="text--lighten-2 grey--text">{{ album.artistName}}</div>
                <div class="grey--text">{{ album.primaryGenreName}}</div>
              </v-flex>
            </div>
     </v-card-text>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            albums:[],
            entity: 'album',
            label:'Search for Artist',
            search: ''
        }
    },
    watch: {
      search: function (val) {
        if (!val) {
          this.albums = []
        }
      },

      entity: function () {
          this.search = ''
          this.label = this.entity === 'album' ? 'Artist Name' : 'Music'
      },
    },

    methods: {
     
         resizeArtworkUrl (album) {
        return album.artworkUrl100.replace("110x110", "160x160")
      },

      submitSearch () {
        if (!this.search) {
          return
        }

        return axios.get(`https://itunes.apple.com/search?term=${this.search}&entity=${this.entity}&limit=200&offset=${this.page * 200}`)
          .then((response) => {
            this.albums = response.data.results.sort((a, b) => a.releaseDate > b.releaseDate ? -1 : 1)
          })
      },

      toiTunesAlbum (album) {
        window.open(album.collectionViewUrl, '_blank')
      }
    }
}

</script>
<style>
.backGroundHeader{
  background-color: #000014;
}
h1{
  color: aliceblue;
}
</style>