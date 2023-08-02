/*
 * @Author: zixuan.he hzx1125@outlook.com
 * @Date: 2023-07-28 12:02:16
 * @LastEditors: zixuan.he hzx1125@outlook.com
 * @LastEditTime: 2023-07-28 14:47:41
 * @FilePath: \dojo-blog\src\Home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useState } from "react";

const Demo = () => {

    const handleClick = () => {
        console.log("Hello");
    }

    const handleClickAgain = (name) => {
        console.log("Hello " + name);
    }

    const handleClickAgainEvent = (name, e) => {
        console.log("Hello " + name, e.target)
    }

// --------------------- State ------------------------

    const [name, setName] = useState('Yezi');
    const [age, setAge] = useState(25);

    const changeName = () => {
        setName('Hazel');
    }

    const changeAge = () => {
        setAge(30);
    }

    
    




    return ( 
        <div className="demo">
            <h2>Homepage</h2>
            {/* attention: can't use parenthesis here, as it will fire the function immediately */}
            <button onClick={handleClick}>Click me</button> 

            {/* What if we want to pass the arguments into the function?
            1. can't use parenthesis either, as it will fire the function
            2. use the anonymous function to wrap the function */}
            <button onClick={() => handleClickAgain('Yezi')}>Click me again(with the arguments)</button>

            {/* It's just a reference not call the function
            attention: if it's a object, using a more curly braces */}
            <button onClick={() => {
                console.log("Hello, directly");
            }}>Click me(directly)</button>

            {/* Event parameter */}
            <button onClick={(e) => handleClickAgainEvent('Yezi', e)}>Click me(with event)</button>


{/* ---------------------- State ------------------------- */}

            <br />
            <br />
            <p>{ name } is { age } years old</p>
            <button onClick={changeName}>Change name</button>
            <button onClick={changeAge}>Change age</button>

        </div>
     );
}
 
export default Demo;