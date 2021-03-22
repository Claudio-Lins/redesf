// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function consInterAPI(req, res) {
  res.status(200).json({ 
    imgUrl: '/',
    cargo: 'Presidenta',
    nome: 'Aida Garcia Naranjo',
    email: 'a.mocha@redesf.org',
    descritivol: `Educadora, cientista política, pesquisadora social e política,
    especialista em gênero, em captação de recursos multilaterais e
    bilaterais, além de ser promotora cultural. Foi Embaixadora do
    Peru na República Oriental do Uruguai, representante do Peru na
    Associação Latino-americana de Integração (ALADI) e no MERCOSUL,
    foi presidenta do Comitê de Representantes da ALADI e Ministra
    da Mulher e do Desenvolvimento.`
   })
}
