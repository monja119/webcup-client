
import { useEffect, useState } from "react"
import "./Sign.scss"

// components
import AddProjectModal from "../../Components/AddProjectModal"

import { validated_email, validated_phone } from "../../utils/validator"
import { authentification, register } from "../../services/authService"
import Loader from "../../Components/Loader"

// Ui
// import { ButtonSubmit } from "../../UIComponents/button/ButtonSubmit"

export default function Sign () {
  const [errorLogin, setErrorLogin] = useState('')
  const [errorSigning, setErrorSigning] = useState('')
  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: ''
  })

  // Fonction pour démarrer le chargement
  const startLoading = () => {
    setLoad(true);
  };

  // Fonction pour arrêter le chargement
  const stopLoading = () => {
    setLoad(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // login
  const login = (e) => {
    
    setLoad(true)
    e.preventDefault()
    const data = {
      email: formData.email,
      password: formData.password
    }

    if(!validated_email(formData.email)) {
      setErrorLogin('Email invalide')
      return
    }

    authentification(data)
      .then((res) => {
        if(res.status === 202) {
          setLoad(false)
          console.log(res.data)
          setErrorLogin('')
          localStorage.setItem('webcup_user', JSON.stringify(res.data.user))
          localStorage.setItem('webcup_token', JSON.stringify(res.data.token))
          window.location.href = '/'
        } else {
          setErrorLogin(res.data.message)
          setLoad(false)
        }
      })
      .catch((err) => {
        console.log(err)
        setErrorLogin('Erreur lors de la connexion')
        setLoad(false)

      })

  }

  // signing
  const signing = () => {
    setLoad(true)
    const data = {
      username: formData.username,
      email: formData.email,
    }

    if(!validated_email(formData.email)) {
      setErrorSigning('Email invalide')
      return
    }

    register(data)
      .then((res) => {
        if(res.status === 201) {
          setLoad(false)
          setErrorSigning('')

          // Redirection vers la page de connexion
          window.location.href = '/sign'
          
        } else {
          setErrorSigning(res.data.message)
          setLoad(false)

        }
      })
      .catch((err) => {
        setErrorSigning('Erreur lors de l\'inscription')
        setLoad(false)
      })
  }

   useEffect(() => {
    const handleInputFocus = (event) => {
      event.target.classList.add('active')
    }

    const handleInputBlur = (event) => {
      const input = event.target
      if (input.value === '') {
        input.classList.remove('active')
      }
    }

    const handleToggle = (e) => {
      e.preventDefault()
      const main = document.querySelector('main')
      main.classList.toggle('sign-up-mode')
    }

    const moveSlider = function () {
      const index = this.dataset.value

      const currentImage = document.querySelector(`.img-${index}`)
      const images = document.querySelectorAll('.image')
      images.forEach((img) => img.classList.remove('show'))
      currentImage.classList.add('show')

      const textSlider = document.querySelector('.text-group')
      textSlider.style.transform = `translateY(${-1 * (index - 1) * 2.2}rem)`

      const bullets = document.querySelectorAll('.bullets span')
      bullets.forEach((bull) => bull.classList.remove('active'))
      this.classList.add('active')
    }

    const inputs = document.querySelectorAll('.input-field')
    inputs.forEach((inp) => {
      inp.addEventListener('focus', handleInputFocus)
      inp.addEventListener('blur', handleInputBlur)
    })

    const toggle_btn = document.querySelectorAll('.toggleLink')
    toggle_btn.forEach((btn) => {
      btn.addEventListener('click', handleToggle)
    })

    const bullets = document.querySelectorAll('.bullets span')
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', moveSlider)
    })

    return () => {
      // Clean up event listeners when component unmounts
      inputs.forEach((inp) => {
        inp.removeEventListener('focus', handleInputFocus)
        inp.removeEventListener('blur', handleInputBlur)
      })

      toggle_btn.forEach((btn) => {
        btn.removeEventListener('click', handleToggle)
      })

      bullets.forEach((bullet) => {
        bullet.removeEventListener('click', moveSlider)
      })
    }
  }, [])

  return (
    <div className="sign">
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src="/LogoComplete.png" alt="easyclass" />
                </div>

                <div className="heading">
                  <h2>Un site de rencontre et de ressources pour les anciens participants des compétitions Webcup</h2>
                  <h6>Pas encore de compte? </h6>
                  <a href="" className="toggleLink">S'inscrire</a>
                </div>

                <div className="actual-form">
                  <p className="error text-red-500 mb-8">{errorLogin}</p>
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div>

                  
                  <button
                    type="button" 
                    onClick={(e) => login(e)}
                    className="sign-btn" 
                  >
                      Se connecter

                  </button>

                  <p className="text">
                    <a href="#">Mot de passe oublié?</a>
                  </p>
                </div>
              </form>

              <form action="index.html" autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src="/LogoComplete.png" alt="easyclass" />
                </div>

                <div className="heading">
                  <h2>Créer un compte</h2>
                  <h6>Vous avez déjà un compte? </h6>
                  <a href="" className="toggleLink">Se connecter</a>
                </div>

                <div className="actual-form">
                  <p className="error text-red-500 mb-8">{errorSigning}</p>
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label>Nom d'utilisateur</label>
                  </div>
                  
                  {/* <div className="actual-form">
                    <div className="input-wrap">
                      <input
                        name="number"
                        id="number"
                        type="text"
                        minLength="4"
                        className="input-field"
                        autoComplete="off"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                      <label>Numero de téléphone</label>
                    </div>
                  </div> */}

                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>
                      Email ( lors du webcup )
                      </label>
                  </div>

                  {/* <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div> */}

                  
                  {/* <button className="addProject" onClick={()=>document.getElementById('AddProjectModal').showModal()}>Ajouter un/des projet(s)</button>
                  <p className="mt-3 mb-6 text">
                    <span>0 projet(s)</span> ajouté(s)
                  </p> */}

                  

                  <input 
                    type="button" 
                    value="S'inscrire" 
                    className="sign-btn" 
                    onClick={() => signing()}
                  />

                  <p className="text">
                    En m'inscrivant, j'accepte les Conditions d'utilisation et Politiques de confidentialité
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img src="/veteran.gif" className="image img-1 show" alt="" />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Facile et rapide, en quelques cliques</h2>
                  </div>
                </div>

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AddProjectModal projects={projects} setProjects={setProjects}/>
      {load ? <Loader/> : ""}
    </div>
  )
}