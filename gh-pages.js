var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "main",
    repo: "https://github.com/umairabbasDev/umairabbasdev.github.io.git", // your repository
    user: {
      name: "umairabbasDev",
      email: "umairabbas391@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
