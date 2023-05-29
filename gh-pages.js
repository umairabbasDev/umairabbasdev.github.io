import { publish } from "gh-pages";

publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
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
