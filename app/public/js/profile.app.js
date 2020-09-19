var app= new Vue( {
  el: '#userProfile',
  data: {
    userName: '',
    userEmail: '',
    userImgLarge:'',
    userImgThumb:'',
    userAge: '',
    userCountry:'',
    userBirthday:''
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.userEmail = userData.email;
        this.userImgLarge = userData.picture.large;
        this.userImgThumb = userData.picture.thumbnail;
        this.userAge = userData.dob.age;
        this.userCountry = userData.location.country;
        this.userBirthday = userData.dob.date[5] + userData.dob.date[6] + userData.dob.date[4] + userData.dob.date[8] + userData.dob.date[9] + userData.dob.date[7] + userData.dob.date[0] + userData.dob.date[1] + userData.dob.date[2] + userData.dob.date[3];
      });
    }
  }
})
