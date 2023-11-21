run server using this command:
    npm start

database connection options are as follows:
    PG_PORT=5432
    PG_URL="postgres://default:E63fVxmcRWij@ep-damp-truth-93713981-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
    PG_PRISMA_URL="postgres://default:E63fVxmcRWij@ep-damp-truth-93713981-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
    PG_URL_NON_POOLING="postgres://default:E63fVxmcRWij@ep-damp-truth-93713981.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
    PG_USER="default"
    PG_HOST="ep-damp-truth-93713981-pooler.eu-central-1.postgres.vercel-storage.com"
    PG_PASSWORD="E63fVxmcRWij"
    PG_DATABASE="verceldb"

now database has got 3 records:
    {id:node	content:bb81c9475a00cbafe427ad771479ce03e9e70f64680b90d42f8f9d079a9d	iv:f4bd4c35e14b1ca7295c1ac7256792918db78d3640c489b7406a4a5600520bcc}
    {id:react	content:cff0f99d204ba53012217c116df51fa1d6ece33b3ed7a545b70fa8f0b941	iv:e64eaef9cc3d2670dfceb75a4596c8a2093d5b852a3a3995642a9426e60946cf}
    {id:typescript	content:45b7ca3310f525ba744b70ddf462575f678bfdb0e604bb6ffdcbff083c0914da861b04fe38	iv:55287f31c1cb066a2545d73a91f75de6efa09b2b6a04cd4c0630b9b5f5cb21dc}
    id: unique identifier
    content: encrypted value
    iv: initial vector(using encrypt and decrypt)

each record decrypted such as:
    {id: node, content: [{"name": "Telman", "age": "29"}]}
    {id: react, content: [{"name": "Wisley", "age": "29"}]}
    {id: typescript, content: [{"name": "Telman Wisley", "age": "29"}]}

api test case:
    POST: http://localhost:3000/api/test/store
        reqBody:{
            "id": "mysql",
            "value": [{"name":"Ron", "age": "32"}, {"name":"Jack", "position": "Full Stack Engineer"}],
            "encryptionKey": "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
        }
    
    request: "OK"

    POST: http://localhost:3000/api/test/retrieve
        reqBody:{
            "id": "typescript",
            "decryptionKey": "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
        }
    request: [{"name": "Telman Wisley", "age": "29"}]
