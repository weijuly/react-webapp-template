docker stop mongo-dev-db;
docker rm mongo-dev-db;
docker run                                                      \
    --name mongo-dev-db                                         \
    --publish 27017:27017                                       \
    --detach mongo:4.0
