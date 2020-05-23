import React,{useState,useEffect} from "react";
import axios from "axios";

/*const [변수명, 메소드]=useState("[]") ("{}") ("0") (false)
[music,setMusic]*/

function App2() {

    const [music,setMusic]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/music.json').then((res)=>{
            setMusic(res.data);
            console.log(res.data)
        })
    },[])

    const html=music.map((m)=>
        <tr>
            <td>{m.rank}</td>
            <td>
                {
                    m.state==="상승" &&
                        <span style={{"color":"red"}}>▲{m.idcrement}</span>
                }
                {
                    m.state==="하강" &&
                    <span style={{"color":"blue"}}>▼{m.idcrement}</span>
                }
                {
                    m.state==="유지" &&
                    <span style={{"color":"grey"}}>-</span>
                }
            </td>
            <td><img src={m.poster} width={"35"} height={"35"}/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
    );

    return(
        <div className={"row"}>
            <H/>
            <div style={{"heigh":"30px"}}></div>
            <table className={"table"}>
                <tr>
                    <td>
                        <input type={"text"} className={"input-sm"} size={"25"}/>
                    </td>
                </tr>
            </table>
            <table className={"table"}>
                <thead>
                    <tr className={"success"}>
                        <td>순위</td>
                        <td>등폭</td>
                        <td></td>
                        <td>노래명</td>
                        <td>가수명</td>
                    </tr>
                </thead>
                <tbody>
                    {html}
                </tbody>
            </table>
        </div>
    )

}
const H= () =>{
    const color =["red","orange","pink","yellow","blue"];
    const no=parseInt(Math.random()*5); //random(0.0~0.99)
    return(
        <h1 className={"text-center"} style={{"color":color[no]}}>Music Top50</h1>
    )
}

/*const H2= function(){
    return(
        <h1 className={"text-center"}>Music Top50</h1>
    )
}*/

/*
function H() {
    return(
        <h1 className={"text-center"}>Music Top50</h1>
    )
}
*/

export default App2;