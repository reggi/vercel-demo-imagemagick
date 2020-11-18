import path from 'path'
import _gm from 'gm'

const gm = _gm.subClass({ imageMagick: true })

export default (req, res) => {
  const img = path.join(process.cwd(), '/assets/locks.jpg');
  gm(img)
    .toBuffer((err, buffer) => {
      if (err) return res.send({ message: err.message})
      return res.write(buffer)
    })
}
