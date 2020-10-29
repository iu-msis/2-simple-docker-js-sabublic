athletes = new Vue({
  el: "#athletesPage",
  data:{
    comments:[{
      id:'',
      commentText: ''
  }],
    newComment: {
      id:'',
      commentText:''
    }
  },
  created() {
    this.fetchComments();
  },

  methods: {
    fetchComments() {
      fetch('api/comments/index.php')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },
    //   return {
    //     firstName: "",
    //     lastName: "",
    //     dob: "",
    //     sexAtBirth: ""
    //   }
    // },
    // handleNewPtForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data
//
//       fetch('api/records/post.php', {
//         method:'POST',
//         body: JSON.stringify(this.newPtForm),
//         headers: {
//           "Content-Type": "application/json; charset=utf-8"
//         }
//       })
//       .then( response => response.json() )
//       .then( json => {
//         console.log("Returned from post:", json);
//         // TODO: test a result was returned!
//         this.ptList.push(json[0]);
//       });
//
//       console.log("Creating (POSTing)...!");
//       console.log(this.newPtForm);
//
//       this.newPtForm = this.newPtData();
//     },
//     handleTriageForm( evt ) {
//       console.log("Form submitted!");
//
//       this.triageForm.pt = this.activePt;
//       console.log(this.triageForm);
//
//     }
//   },


  createComment() {
    fetch('api/comments/index.php', {
      method: 'POST',
          body: JSON.stringify(this.newComment),
          headers: {
            "Content-Type":"application/json; charset=utf-8"
          }
        })
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:",json);
        this.comments = json;
        this.newComment = this.newCommentData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
    },
  newCommentData() {
    return {
      id:"",
      commentText: ""
    }
  }
},
});
