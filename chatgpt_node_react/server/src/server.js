const app = require("./app");
const port = process.env.PORT || 3000;

//console.log("app =", app); // 👈 ADICIONE ESTA LINHA PARA TESTE

app.listen(port,()=>{console.log(`Server listening on port ${port}`)});