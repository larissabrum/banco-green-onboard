import './App.css';
import logo from './image/leaf.png';
import icon1 from './image/home.png';
import icon2 from './image/save-money.png';
import icon3 from './image/extract.png';
import icon4 from './image/transfer.png';
import icon5 from './image/card.png';
import icon6 from './image/help.png';
import icon7 from './image/user.png';
import icon8 from './image/search.png'

function App() {
  return (
    <div className="App">

      <div className='side-menu'>
        <div className='brand-name'>
          <h1>Green</h1>
        </div>
        <ul>
          <li><img src={icon1} alt="inicio" className='icon-menu'/><a href='index.html'><span>Início</span></a></li>
          <li><img src={icon2} alt="saldo" className='icon-menu'/><a href='index.html'><span>Saldo</span></a></li>
          <li><img src={icon3} alt="extrato" className='icon-menu'/><a href='index.html'><span>Extrato</span></a></li>
          <li><img src={icon4} alt="transferir" className='icon-menu'/><a href='index.html'><span>Transferir</span></a></li>
          <li><img src={icon5} alt="cartoes" className='icon-menu'/><a href='index.html'><span>Cartões</span></a></li>
          <li><img src={icon6} alt="ajuda" className='icon-menu'/><a href='index.html'><span>Ajuda</span></a></li>
          <li><img src={icon7} alt="dados-pessoais" className='icon-menu'/><a href='index.html'><span>Dados Pessoais</span></a></li>
        </ul>
      </div> 

      <div className='container'>
        <div className='header'>
          <div className='nav'>
            <div className='search'>
              <input type="text" placeholder="Pesquisa" />
              <button type="submit"><img src={icon8} alt="pesquisa" className='icon-menu'/></button>
            </div>

            <div className='user'>
              <a href='index.html' className='btn'>Sair</a>              
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='cards'>
            <div className='card'>
              <div className='box'>
              <a href='index.html'><h1>Saldo</h1></a>
                <h3>R$ 1.280,55</h3>
              </div>
              <div className='icon-case'>
              <img src={icon2} alt="saldo" className='icon-cards'/>
              </div>
            </div>

            <div className='card'>
              <div className='box'>
              <a href='index.html'><h1>Extrato</h1></a>
                <h3>Selecione o período</h3>
              </div>
              <div className='icon-case'>
              <img src={icon3} alt="saldo" className='icon-cards'/>
              </div>
            </div>

            <div className='card'>
              <div className='box'>
              <a href='index.html'><h1>Transferir</h1></a>
                <h3>Clique aqui</h3>
              </div>
              <div className='icon-case'>
              <img src={icon4} alt="saldo" className='icon-cards'/>
              </div>
            </div>

            <div className='card'>
              <div className='box'>
              <a href='index.html'><h1>Cartões</h1></a>
                <h3>Saiba mais</h3>
              </div>
              <div className='icon-case'>
              <img src={icon5} alt="saldo" className='icon-cards'/>
              </div>
            </div>


          </div>
          <div className='content-2'>
            <div className='recent-info'>
              <div className='tittle'>
                <h2>Atividades Recentes</h2>
                <a href="index.html" className='btn'>Ver Mais</a>
              </div>
              <table>
                <tr>
                  <th>Data</th>
                  <th>Lançamentos</th>
                  <th>Valor</th>
                  <th>Saldo</th>                  
                </tr>
                <tr>
                  <td>14/03/2021</td>
                  <td>Posto Ipiranga LTDA</td>
                  <td>R$ 80,00</td>
                  <td>R$ 1.250,33</td>
                  
                </tr>
                <tr>
                  <td>14/03/2021</td>
                  <td>Posto Ipiranga LTDA</td>
                  <td>R$ 80,00</td>
                  <td>R$ 1.250,33</td>
                  
                </tr>
                <tr>
                  <td>14/03/2021</td>
                  <td>Posto Ipiranga LTDA</td>
                  <td>R$ 80,00</td>
                  <td>R$ 1.250,33</td>
                  
                </tr>
                <tr>
                  <td>14/03/2021</td>
                  <td>Posto Ipiranga LTDA</td>
                  <td>R$ 80,00</td>
                  <td>R$ 1.250,33</td>
                  
                </tr>
                <tr>
                  <td>14/03/2021</td>
                  <td>Posto Ipiranga LTDA</td>
                  <td>R$ 80,00</td>
                  <td>R$ 1.250,33</td>
                  
                </tr>
              </table>
            </div>
            <div className='more-info'>
              <div className='tittle'>
                <h2>Fique por dentro!</h2>
                
              </div>
              <table>
                
                <tr>
                  <td><img src={logo} alt="logo-green" /></td>
                  <td><a href='index.html'>Projeto verde. Saiba como ajudar!</a></td>
                  {/* <td><img src={logo} alt="logo-green" /></td> */}
                </tr>

                <tr>
                  <td><img src={logo} alt="logo-green" /></td>
                  <td><a href='index.html'>Go paperless! Atualize suas configurações em "Dados Pessoais" para tornar sua conta 100% digital.</a></td>
                  {/* <td><img src={logo} alt="logo-green" /></td> */}
                </tr>

                               
              </table>
            </div>
            
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
