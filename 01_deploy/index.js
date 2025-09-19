require('dotenv').config()
const express = require("express");
// import express from 'express'
const app = express();
const port = 3000;
const userData = {
  login: "NikhilBhalotia",
  id: 181649460,
  node_id: "U_kgDOCtPANA",
  avatar_url: "https://avatars.githubusercontent.com/u/181649460?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/NikhilBhalotia",
  html_url: "https://github.com/NikhilBhalotia",
  followers_url: "https://api.github.com/users/NikhilBhalotia/followers",
  following_url:
    "https://api.github.com/users/NikhilBhalotia/following{/other_user}",
  gists_url: "https://api.github.com/users/NikhilBhalotia/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/NikhilBhalotia/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/NikhilBhalotia/subscriptions",
  organizations_url: "https://api.github.com/users/NikhilBhalotia/orgs",
  repos_url: "https://api.github.com/users/NikhilBhalotia/repos",
  events_url: "https://api.github.com/users/NikhilBhalotia/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/NikhilBhalotia/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Nikhil Bhalotia",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2024-09-15T14:24:22Z",
  updated_at: "2025-08-22T03:13:11Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get("/login", (req, res) => {
  res.send("nikhilbhalotia")
})

app.get("/logout", (req, res) => {
  res.send("you are not logged in")
})

app.get("/youtube", (req, res) => {
  res.send("<h2> Lakshay Choudhary </h2>");
})

app.get("/github", (req, res) => {
  res.json(userData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});