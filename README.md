# GitHub Peer Recommendation Client

GitHub Peer Recommendation allows GitHub users to nominate other GitHub users and vouch for their employability. Nominations are anonymous. Once nominated, the nominated user will receive an email invite to claim their profile if they are not already a member. Everyone receives a score based on how many people have nominated them.

GitHub Peer Recommendation Client is a React front-end for the [GitHub Peer Recommendation API](https://github.com/yehudabortz/github-peer-recommendation-api) Rails back-end.

## Installation

- Clone this repo.

- Install all dependencies

```bash
npm install
```

- Update environment variables in `src/index.js`

```bash
window.endpoint = "api.exmaple.com"
window.githubClientId = "your GitHub client id"
```

- Start the server.

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
