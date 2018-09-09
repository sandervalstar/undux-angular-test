echo "removing react from undux"

rm -rf node_modules/undux/dist/src/react

sed -n '/^.*react.*$/!p' ./node_modules/undux/dist/src/index.d.ts > ./node_modules/undux/dist/src/index_copy.d.ts
mv ./node_modules/undux/dist/src/index_copy.d.ts ./node_modules/undux/dist/src/index.d.ts

sed -n '/^.*react.*$/!p' ./node_modules/undux/dist/src/index.js > ./node_modules/undux/dist/src/index_copy.js
mv ./node_modules/undux/dist/src/index_copy.js ./node_modules/undux/dist/src/index.js
