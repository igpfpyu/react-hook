
import React, {useState, useEffect} from 'react';
/**
 * useLayoutEffect
 * 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。
 * 可以使用它来读取 DOM 布局并同步触发重渲染。
 * 在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
 *
 * 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
 *
 *
 * useDebugValue
 * 可用于在 React 开发者工具中显示自定义 hook 的标签
 *
 *
 */
import './App.css';
import Home from './pages/home';
function App() {
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState({name: 11});
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return ()=>{
            console.log('aaaaa')
        }
    },[count]); //, [count]
    return (
        <div className="App">
            <p>{sum.name}</p>
            <Home friend={true} />
            <Home friend={false} />
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setSum({name: ++sum.name})}>
                Click me
            </button>
        </div>
    );
}

export default App;
