URL='http://127.0.0.1:3718/graphql'
npx autocannon $URL -m POST \
  --headers 'Content-Type: application/json' \
  --body '{"query":"query {\n\tuser(id: 1) {\n\t\tid\n\t\tname\n\t\temail\n\t}\n}"}' \
  --warmup [-c 1 -d 3] \
  --connections 500 \
  --pipeline 10 \
  --workers 10 \
  --renderStatusCodes \
  --latency