## dev

### WSL

```bash
$ nvm use 18
$ npm run dev


```

```bash
# if you are using windows
> npm i
> npm run start


# ./dc_up.sh
npm run docker_rebuild

npm run into_docker

# inside docker
# -> update content
# npm i -D
# npm run start
./dev.sh

# done, the site is up and navigate to http://localhost:3000/dashboard-tryout
```

## publish

push to repo and it will deploy

```plaintext
# abonded
# -> deploy page, ./scripts/deploy.sh
# in the host
sudo rm -rf ./node_modules
npm i -D
npm run deploy_gh_pages

```
