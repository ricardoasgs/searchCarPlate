import sinesp from "sinesp-nodejs";

export async function search(req, res) {
    const { plate } = req.params;
    console.log(plate);
    try {
        sinesp.consultaPlaca(plate).then(dados => {
            return res.status(200).send(dados);
          }).catch(err => {
            res.status(500).send({ message: "Error." });
          })
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}
