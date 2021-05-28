# Peer Recommendation Client

Peer Recommendation allows users to nominate current and past co-workers and vouch for their employability. Nominations are anonymous. Everyone receives a score based on how many people have nominated them.

Peer Recommendation Client is a React front-end for the [Peer Recommendation API](https://github.com/yehudabortz/github-peer-recommendation-api) Rails back-end.

- [Live Site](https://github-peer-recommendation-cli.herokuapp.com)
- [Demo Video](https://drive.google.com/file/d/1cUDQedVj2yXPEsOZB3OzbqbBG74X7qiI/view?usp=sharing)

## Installation

- Clone this repo.

- Install all dependencies

```bash
npm install
```

- Update environment variables in `src/index.js`

```bash
window.endpoint = "api.exmaple.com"
window.googleClientId = "your Google client id"
```

- Start the server.

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
