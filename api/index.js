import { moveisUsados, consertoDeRoupas, confeitaria, outrosServicos  } from "./dados.js";

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  

    const dadosDoCatalogo = {
        moveisUsados,
        consertoDeRoupas,
        confeitaria,
        outrosServicos
    }

    res.status(200).json(dadosDoCatalogo);
}
