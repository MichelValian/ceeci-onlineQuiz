import db from '../../../../database/models';

export default function handler (req, res) {
    switch (req.method) {
      case 'GET':
        return getOptions (req, res);
      case 'POST':
        return addOptions (req, res);
      case 'PUT':
        return updateOptions (req, res);
      case 'DELETE':
        return deleteOptions (req, res);
  
      default:
        res.status(400).json({ error: true, message: 'Petición errónea' });
    }
  }
  
  //GET Function
  const getOptions = async (req, res) => {
    try {
      let options = [];
      if (options) {
        options = await db.Option.findAll({
          
          include: [
            {
              model: db.Question, // Asegúrate de incluir el modelo correcto
              as: 'OptionQuestion',
              attributes: [
                'id', 
                'textQuestion', 
                'bankId',
              ], // Incluye los atributos necesarios
            },
          ],
          attributes: [
            'id',
            'option1',
            'option2',
            'option3',
            'correctA',
            'questionId'
          ]
        })
      }

      return res.json(options);
    } catch (error) {
      console.log(error);

      return res.status(400).json(
        {
          error: true,
          message: `Ocurrio un error al procesar la peticion ${error.message}`
        }
      )
    }
  }
  
  //POST Function
  const addOptions = async (req, res) =>  {
    try {
        const option = await db.Option.create({...req.body});

        res.status(200).json({
            option,
            message: 'Registrado'
        });

    } catch (error) {

        console.log(error);

        let errors = [];
        if (error.errors){
            errors = error.errors.map((item) => ({
                error: item.message,
                field: item.path,
                }));
        }
      return res.status(400).json( {
        error: true,
        message: `Ocurrió un error al procesar la petición: ${error.message}`,
        errors,
        } 
      )
    }
}

const deleteOptions = async (req,res) => {
  try{
    const {id} = req.query;

      await db.Option.destroy({
          where: { id: id }
      })

      res.json({
          message: 'Eliminado'
      })

    }
       catch (error){
          res.status(400).json({ error: "error al momento de borrar el estado"})
  }
}


const updateOptions = async (req,res) => {

  try{
      let {id} = req.query;

      const { option1, option2, option3, correctA } = req.body;
      if (typeof option1 !== 'string' || typeof option2 !== 'string' || typeof option3 !== 'string' || typeof correctA !== 'string') {
        throw new Error('Los campos deben ser strings');
      }
      
      await db.Option.update({...req.body},
          {
          where :{ id : id },
      })
      res.json({
          message: 'Actualizado'
      })

    }
    catch (error) {

      console.log(error);

      let errors = [];
      if (error.errors){
          errors = error.errors.map((item) => ({
              error: item.message,
              field: item.path,
              }));
      }
    return res.status(400).json( {
      error: true,
      message: `Ocurrió un error al procesar la petición: ${error.message}`,
      errors,
      } 
    )
  }
}