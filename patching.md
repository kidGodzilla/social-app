# Patching

## Last commit as a patch
```
git format-patch -1 HEAD --stdout > patches/patch-name.patch
```

## Applying patches
```
yarn patch
```