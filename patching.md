# Patching

## Last commit as a patch
```
git format-patch -1 HEAD --stdout > fork-patches/patch-name.patch
```

## Applying patches
```
yarn patch
```

## Dokku

It has a Dockerfile and Gemfile, get around those to deploy the nodejs app

```
dokku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs
```

#### Add a remote

```
git remote add dokku dokku@1.1.1.1:appname
```

#### Deploy

```
git push dokku main:master
```