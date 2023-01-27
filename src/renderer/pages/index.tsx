import { useNavigate } from 'react-router-dom';

import { useState } from "react";
import {
  ButtonComponent,
  InputComponent,
} from "my-lib-ui";
import { loginRequest, checkRole } from "../api/user";

type User = {
  login: string;
  password: string;
};

const Index = () => {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User>({ login:"", password:"" })
  const HandleClick = (e: any) => {
    e.preventDefault()
    if(!user.login || !user.password) {
      alert('Veuillez remplir tout les champs du formulaire') 
    }
    else {
      setIsLoading(true)
      loginRequest({username: user.login, password: user.password})
        .then( (res:any) => {                    
          if(res.token) {
            console.log(res.token);
            localStorage.setItem('token', 'Bearer '+res.token)
            checkRole('ROLE_ADMIN','Bearer '+res.token)
              .then( (res) => {
                setIsLoading(false)
                if(res.data) {
                  navigate('/liste', { replace: true });
                }
                else {
                  navigate('/', { replace: true });
                }
              })
          }
        })
        .catch( (err) => {
          console.log(err);
        })
    }
  }
  return (
    <div>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="formDiv">
        <form className="formcontent">
          <h1 className="formcontentTitle">Connexion</h1>
          <p>Connectez-vous à l’aide des identifiants reçus dans votre mail d’activation.</p>
          <InputComponent label='Identifiant' value={user.login}  onChange={(e) => setUser({ ...user, login: e.target.value })}/>
          <InputComponent label='Mot de passe' type="password" value={user.password} onChange={(e)=>setUser({ ...user, password: e.target.value })}/>
          <ButtonComponent onClick={HandleClick}>
            Connexion
            {
              isloading ? <img src={loading} className="loading" alt="Chargement en cours" /> : ''
            }
            </ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default Index