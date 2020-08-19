const config = {
    mongoConnectionString: process.env.MONGO_URL || 'mongodb://todoExample:admin@cluster0-shard-00-00.9bsfc.mongodb.net:27017,cluster0-shard-00-01.9bsfc.mongodb.net:27017,cluster0-shard-00-02.9bsfc.mongodb.net:27017/todoList?ssl=true&replicaSet=atlas-ppqgkn-shard-0&authSource=admin&retryWrites=true&w=majority'
};
module.exports = config;