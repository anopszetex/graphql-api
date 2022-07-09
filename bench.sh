URL='http://localhost:3718/graphql'
npx autocannon $URL -m POST \
  --headers 'Content-Type: application/json' \
  --body '{"query":"query {\n\tadd(x: 2, y: 3)\n}"}' \
  --warmup [-c 1 -d 3] \
  --connections 500 \
  --pipeline 10 \
  --renderStatusCodes