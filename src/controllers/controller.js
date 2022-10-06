const axios = require('axios')

module.exports = {
    async pesquisarPerfilGitHub(req, res){
        const { name }  = req.params
        let userName, bio, imagem;

        await axios.get('https://api.github.com/users/' + name).then((resposta)=> {
            console.log(resposta.data)

            userName = resposta.data.name
            bio = resposta.data.bio
            imagem = resposta.data.avatar_url

            const info = '<body> <h1>' + userName + '</h1> <img src="' + imagem + '"/> <h2>' + bio + '</h2> </body>'

            return res.send(info)
        }).catch((err)=>{
            res.json({message: `Perfil não encontrado  ${err}`})
        })
    }
}