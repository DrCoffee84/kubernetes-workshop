REST API:
```bash
curl --location --request GET 'http://localhost:3000/users'
```

```bash
curl --location --request POST 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "lastname": "Boullon",
    "name": "Daniel",
    "email": "dboullon@taglatam.com"
}'
```


build image
```bash
docker build . -t dboullon/simple-express-mongo-app
```