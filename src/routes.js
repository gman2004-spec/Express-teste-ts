import { Router } from "express";

const routes = Router();

//rota de teste, hello world
routes.get("/", (req, res) => {
    return res.send('rota de teste')
})

//rota que retorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req, res) => {
    return res.json({
        items: [
            {
                id: "4",
                nome: "victor",
                cargo: "instrutor de piloto",
                idade: 33,
                custoPorHora: 120.0,
                temLicensa: false
            },
            {
                id: "5",
                nome: "bruno",
                cargo: "instrutor de tank",
                idade: 57,
                custoPorHora: 170.0,
                temLicensa: true
            },
            {
                id: "3",
                nome: "bob",
                cargo: "instrutor de LOL",
                idade: 24,
                custoPorHora: 130.0,
                temLicensa: true
            },
        ]
    })
})

routes.get("/withImages", (req, res) => {
    return res.json({
        photos: [
            {
                id: "1",
                nome: "scout",
                imagem: "../src/image/Jojo.png"
            }
        ]
    })
})

export default routes