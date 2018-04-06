#!/bin/bash
  npm run build -- --base-href "https://ctoxy.github.io/SuperFightHeroes/"
  angular-cli-ghpages --repo=https://github.com/ctoxy/SuperFightHeroes.git
