import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendMailer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
  });

  const mailOption = {
    from: process.env.USERMAIL,
    to: req.body.email,
    cc: 'lucianafeldman@gmail.com',
    subject: 'Inscrição confirmada!!!!',
    replyTo: process.env.USERMAIL,
    text: 'Participe do curso de mulheres na política!',
    html: `<h1>Parabéns! Sua inscrição foi efetivada com sucesso!</h1> <p> Prezada ${req.body.name},<br/> Você concluiu a sua inscrição no processo de seleção da primeira
    turma da <strong>CONECTA.</strong> <br/> Nosso time fará uma avaliação
    dos critérios de participação e entrará em contato com você até
    <strong>
     
      11/01/2022 para confirmar a sua participação. <br />
    </strong> </p>`,
  };

 await transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send('error' + JSON.stringify(err));
    } else {
      console.log('mail send');
      res.send('success');
    }
  });
}
