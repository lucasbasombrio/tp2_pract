class Controller{

    ingresarPalabra = async(requestAnimationFrame, res)=>{
        try {
            
            res.status(200)

        } catch (error) {
            res.status(422).send({errorMsg:"No valida"})
        }
    }
}


export default Controller;