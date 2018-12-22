module.exports ={
  getAll: (req,res) => {
    const db = req.app.get('db')
    db.get_all().then(response => {
      res.status(200).send(response)
    })
  },
  createHouse: (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip, img, mortgage, rent} = req.body

    db.create_house({name, address, city, state, zip, img, mortgage, rent}).then(response => {
      res.status(200).send(response)
    })
  },
  deleteHouse: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_house({id}).then(response =>{
      res.status(200).send(response)
    })
  }
}