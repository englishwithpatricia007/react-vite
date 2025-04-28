
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    { id: '23456789', name: 'Lucas', email: 'lucas@gmail.com' },
    { id: '98765432', name: 'Rodolfo', email: 'rodolfo@gmail.com' },
    { id: '333333', name: 'Paulo', email: 'paulo@gmail.com' }
  ]

  return (

    <div className='container'>
      <form>
        <h1> Cadastro de Usuários </h1>
        <input placeholder="Nome" name="name" type="text" />
        <input placeholder="E-mail" email="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>


      {users.map(user => (
        <div key={user.id} className='cards'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="trash" />
          </button>
        </div>
      ))}
    </div>


  )
}

export default Home
