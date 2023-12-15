## dev


```bash
npm run docker_rebuild

npm run into_docker

# inside docker
# -> update content
./dev.sh

# done, the site is up and navigate to http://localhost:3000/dashboard-tryout

# -> deploy page
# in the host
sudo rm -rf ./node_modules
npm i -D
npm run deploy_gh_pages

```

## publish

push to repo and it will deploy
