const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const path = require('path')
const avaliacaoRoutes = require('./routers/avaliacaoRoutes')
const usuario = require ('./routers/usuario')
const usuarioRoutes = require('./routers/usuarioRoutes')
const naturopataRoutes = require('./routers/naturopataRoutes')
const medicamentoRoutes = require('./routers/medicamentoRoutes')
const comentarioRoutes = require ('./routers/comentarioRoutes')
const nmRoutes = require ('./routers/nmRoutes')
const anuncioRoutes = require('./routers/anuncioRoutes')
const uploadmedicamento = require('./mildwares/uploadimagem')

const {
    dirname
} = require('path')
const Usuario = require('./models/Usuario')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use((req,res,next)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods",'GET,POST,PUT,DELETE')
    app.use(cors());
    next();

})

app.use("routers/rotas",Usuario)
app.use("/usuario", usuarioRoutes)
app.use("/naturopata", naturopataRoutes)
app.use("/comentario", comentarioRoutes)
app.use("/medicamento", medicamentoRoutes)
app.use("/nm",nmRoutes)
app.use("/avaliacao",avaliacaoRoutes)
app.use("/anuncio",anuncioRoutes)
app.post("/upload-image",uploadmedicamento.single('image'),async(req,res)=>{
    if (req.file){
        return res.json({
            erro: false,
            mensagen: "upload realizado com sucesso!"
        });
    }
    return res.status(400).json ({
        erro : true ,
        mensagen :"upload não realizado com sucesso!"
    });
   
})


const PORT = 5000

app.listen(PORT, () => {
    console.log("servidor rodando na porta", PORT)
})