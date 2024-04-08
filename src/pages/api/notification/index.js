import db from '../../../../database/models';

export default function handler(req, res) {

    switch(req.method){

        case 'POST':
            return newNotification(req, res);
        case 'GET':
            return getNotification(req, res);
        case 'DELETE':
            return deleteNotification(req, res);
        default:
            res.status(400).json({error: true, message:'Petición errónea, utiliza Read,Post,Put o Delete'});
    }
}

const newNotification = async (req, res) =>  {
    try {

        const notification = await db.Notification.create({...req.body});

        res.status(200).json({
            notification,
            message: 'Nuevo mensaje'
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

const getNotification = async (req, res) => {
    const {groupId} = req.query;

    try{
        //los datos vienen del req.body
        let notification;
        //guardar cliente
        if(groupId){
          notification = await db.Notification.findAll({
                where: {
                    groupId: groupId
                },
            });
        }else {
          notification = await db.Notification.findAll({
            });
            
        }

        return res.json(notification)
    
    }catch(error){
        console.log(error);
        let errors = []

        if(error.errors){
            //extrae la info
            errors = error.errors.map((item) => ({
                error: item.message, 
                field: item.path,
            }));
        }

        return res.status(400).json({
            message: `Ocurrió un error al procesar la petición: ${error.message}`,
            errors,
        })
    }
}

const deleteNotification = async (req, res) => {
    try {
        const { id } = req.query;

        const notification = await db.Notification.findOne({ where: { id: id } });
        if (!notification) {
            return res.status(400).json({ error: true, message: 'No se encontró el banco' });
        } else {
          await db.Notification.destroy({ where: { id: notification.id } });
        }

        res.json({
            message: 'Eliminado'
        });
    } catch (error) {
        console.error('Error al eliminar la sala:', error);
        res.status(500).json({ error: 'Error interno del servidor al eliminar la sala', details: error.message });
    }
};