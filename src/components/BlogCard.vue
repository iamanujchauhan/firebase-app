<template>


<div class="blog-posts"  >


  <v-card v-for= "post in sampleBlogCrads" :key="post.title" 
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{post.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{post.thumbnail}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{post.descrption}}</div>

    
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

  </div>
</template>

<script>
  export default {
    name: 'BlogCard',
    props: ['post'],

      data() {
      return {
      sampleBlogCrads: [
      {title:'myPast1', descrption: 'Blog post 1', Image: ('https://cdn.vuetifyjs.com/images/cards/docks.jpg'), thumbnail:'great picture'},
      {title:'myPast1', descrption: 'Blog post 1', Image: ('https://cdn.vuetifyjs.com/images/cards/docks.jpg'), thumbnail:'great picture'},
      {title:'myPast1', descrption: 'Blog post 1', Image: ('https://cdn.vuetifyjs.com/images/cards/docks.jpg'), thumbnail:'great picture'}
    ]

      }
    }

  }
</script>