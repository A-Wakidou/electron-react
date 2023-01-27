import { MemoryRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import "my-lib-ui/dist/index.css";
import logo from '../../assets/logo_eval.png';
import loading from '../../assets/loading.svg';
import menu from '../../assets/menu.svg';

import { useState, useEffect } from "react";
import {
  ButtonComponent,
  InputComponent,
} from "my-lib-ui";
import { loginRequest, checkRole } from "./api/user";
import { getCars } from "./api/car";

type User = {
  login: string;
  password: string;
};

type Cars = {
  name: string,
  image: string,
  description: string,
  price: number
}

let token: string

const Hello = () => {
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
            token = 'Bearer '+res.token
            checkRole('ROLE_ADMIN', token)
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

const Liste = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState<Cars[]>([])
  getCars(token)
  .then((res) => {
    console.log(res);
  })
  // useEffect( () => {
  //   if(token) {

  //   }
  //   else {
  //     navigate('/', { replace: true });
  //   }
  // }, [])
  return (
    <div>
      <h1>Nos véhicules</h1>
      <p>Choisissez un véhicule pour consulter les détails du modèle et les tarifs.</p>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/liste" element={<Liste />} />
      </Routes>
    </Router>
  );
}
