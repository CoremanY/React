import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import { UserInfo } from './components/app/parts/user-info/UserInfo.js';


ReactDOM.render(
<div>Hello World
<App name={'Vova'} age={11}/>
<App name={'Anton'}/>
<UserInfo userName={'Вова'} userGender={'муж'} userAge={27} yearsWorked={1}/>
<UserInfo userName={'Иван'} userGender={'муж'} userAge={21} yearsWorked={2}/>
<UserInfo userName={'Ольга'} userGender={'жен'} userAge={37} yearsWorked={3}/>
    
<p>text</p>
</div>,

  document.getElementById('root')
);
