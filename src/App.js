/*
 * @Author: zixuan.he hzx1125@outlook.com
 * @Date: 2023-07-28 10:30:16
 * @LastEditors: zixuan.he hzx1125@outlook.com
 * @LastEditTime: 2023-08-02 15:54:16
 * @FilePath: \dojo-blog\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Demo from './Demo';
import Home from './Home';
import CreateBlog from './CreateBlog';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  // const title = 'Welcome to the new blog!';


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <div className="content">
          <Route exact path='/'>
            <Demo />
            <br /><hr /><br />
            <Home />
          </Route>
          <Route path='/create'>
            <CreateBlog />
          </Route>
          

        </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
