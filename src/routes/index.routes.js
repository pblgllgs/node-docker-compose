
const { response } = require('express')
const {Router} = require('express')

const router = Router()

router.get('/',(req, res= response)=> {
    res.json({
        ok: true,
        msg: 'Conexion establesida con exito!!'
    })
})

module.exports = router