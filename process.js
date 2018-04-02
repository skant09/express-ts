module.exports = {
  "app": [
    {
      "name": "app",
      "script": "./src/server.js",
      // "watch": ["./src/*.ts"],
      // "watch_options": {
      //   "followSymlinks": false
      // },
      "node_args": "--harmony",
      "log_date_format": "YYYY - MM - DD HH: mm Z",
      "env": {
        "NODE_ENV": "development",
        "PORT": 3000
      }
    }
  ]
}