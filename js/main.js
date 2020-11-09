const app = new Vue({

  el: '#app',


  data: {
    indexPhoto: 0,
    photos: [
      'img/image1.jpg',
      'img/image2.jpg',
      'img/image3.jpg',
      'img/image4.jpg',
    ]
  },

  methods: {
    nextPhoto: function() {
      this.indexPhoto += 1;

      if (this.indexPhoto === this.photos.length) {
        this.indexPhoto = 0;
      }
    },
    prevPhoto: function() {
      this.indexPhoto -= 1;

      if (this.indexPhoto < 0) {
        this.indexPhoto = this.photos.length - 1;
      }
    },
    circleNav: function(index) {

      this.indexPhoto = index;

    }
  },

});
