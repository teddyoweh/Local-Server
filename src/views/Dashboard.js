import 'boxicons';
import axios from 'axios'
import { useState,useEffect } from 'react';
import {  useParams} from 'react-router-dom';

export default function Dashboard(){
const [dirdata,setDirdata] =useState([{}])
const [ddview,setDDview]=useState(true)
const [dataloaded,setDataloaded] =useState(false)
const [viewinfodata,setViewinfodata] = useState({})
    let { ftp } = useParams();
 let ftpdata2 = JSON.stringify(useParams())
let ftpdata = JSON.parse(ftpdata2)
    
    console.log(ftp)
    if(useParams()['*']){
    ftp = ftp+'/'+ftpdata['*']
    }

if (ftp==''||ftp==undefined||ftp==null){
     ftp =''}
    // else{
    // ftp = "./"+ftp}
    
    const body ={
    path:ftp
    }
    
    const header = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    
    
    
    
    
        }
    }
useEffect(() => {
  return () => {
    axios.get(`http://127.0.0.1:9000/?path=${ftp}`,header,{params:body})
    .then(function(response){
        console.log(response.data)
        setDirdata(response.data)
        setDataloaded(true)
    })
  };
}, [ftp]);
function setViewinfo(e,data){
    e.preventDefault();
console.log('dds')
setViewinfodata(dirdata[1][0])
setDDview(false)
}

return (


<>

<div class="area" >

<div className="dash-m">
<div className="dash">
<div className="nav">
<div className="nav-i">
<a className='active' href="">

<i class='bx bxs-dashboard'></i><label htmlFor="">Dashboard</label></a>
<a href="">

<i class='bx bxs-file-blank'></i><label htmlFor="">Files</label></a>
<a href="">

<i class='bx bxs-file-doc'></i><label htmlFor="">Documents</label></a>
<a href="">

<i class='bx bxs-note'></i><label htmlFor="">Notes</label></a>
<a href="">

<i class='bx bxs-cog'></i><label htmlFor="">Settings</label></a>
</div>
<button>

<i class='bx bxs-cloud-upload'></i>
<label htmlFor="">Upload</label>
</button>
</div>
<div className="dash-b">
<div className="top">

<div className="options"></div>
<div className="breadcrumb">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
    <li class="breadcrumb-item active " aria-current="page">FTP</li>
    {dataloaded=true && ftpdata['*'].split('/').map((item,index)=>{
    console.log(ftpdata['*'].split('/').length)
    if(index==ftpdata['*'].split('/').length-1){
    const host2 = window.location.host
    return (
     <li class="breadcrumb-item active-m" aria-current="page">   <a href={'http://'+host2}>{item}       </a></li>

    )
    }
    else{return (
        <li class="breadcrumb-item active" aria-current="page">{item}</li>
    
    )}
    
    })}
 
   
  </ol>
</nav>
  </div>

</div>
<div className="bottom">
<div className="left">
<div className="box-settings">
<div className="left-t">
<a href="">
<i class='bx bxs-file-plus'></i>
<label htmlFor="">New File</label>
</a>
<a href="">
<i class='bx bxs-folder-plus' ></i>
<label htmlFor="">New Folder</label>
</a>
</div>
<div className="search"></div>
</div>
<div className="ftp-box">

{ dataloaded==true? 

dirdata[1].data.map((item,index) => {
return (
 

<div className="ftp" key={index}>

<div className="name">
{item.is_file?
<>
 
{item['name'].endsWith('.py')&&    <i class='bx bxl-python'></i>}

{item['name'].endsWith('.js')&&    <i class='bx bxs-file-js'></i>}
{item['name'].endsWith('.html') || item['name'].endsWith('.htm') &&    <i class='bx bxl-html5'></i>}
{item['name'].endsWith('.docx') &&    <i class='bx bxs-file-doc'></i>}
{item['name'].endsWith('.css') &&    <i class='bx bxs-file-css' ></i>}
{item['name'].endsWith('.pdf') &&    <i class='bx bxs-file-pdf'></i>}
{item['name'].endsWith('.txt') &&    <i class='bx bxs-file-txt'></i>}
{item['name'].endsWith('.md') &&    <i class='bx bxs-file-md'></i>}
{item['name'].endsWith('.json') &&    <i class='bx bxs-file-json'></i>}
{item['name'].endsWith('.gif')||item['name'].endsWith('.png')||item['name'].endsWith('.jpg')||item['name'].endsWith('.jpeg') &&   <i class='bx bxs-file-image'></i>}
{!item['name'].endsWith('.py') 
&& !item['name'].endsWith('.js')
&&!item['name'].endsWith('.gif')
&& !item['name'].endsWith('.png')
&& !item['name'].endsWith('.jpg')
&&!item['name'].endsWith('.jpeg')
&& !item['name'].endsWith('.json')
&& !item['name'].endsWith('.txt')
&& !item['name'].endsWith('.md')
&& !item['name'].endsWith('.pdf')
&& !item['name'].endsWith('.css')
&& !item['name'].endsWith('.html')
&& !item['name'].endsWith('.html')

&&<i class='bx bxs-file-blank'></i>}
 
</>
:<i class='bx bxs-folder'></i>}

<label htmlFor="">{item.name}</label>
</div>
<div className="options">
<a onClick={(e)=> setViewinfo(e) }>
<i class='bx bxs-file-find' ></i>
</a>
<a href="">
<i class='bx bxs-copy'></i>
</a>
<a href="">
<i class='bx bxs-folder-minus'></i></a>
<a href="">
<i class='bx bxs-cloud-download'></i>
</a>
<a href="">
<i class='bx bxs-trash-alt'></i>
</a>
</div>
</div>
)
}

)
:<>labe;</>
}

</div></div>
<div className="feat">
{ddview==true?
<>
<i class='bx bxs-cloud-upload'></i>
<label htmlFor="">Drag and Drop</label>

</>:<>

<div className="file-info">
<label htmlFor="">
<b>Name: </b> <span>  {viewinfodata.name}</span>

</label>
<label htmlFor="">
<b>File Size: </b> <span> {viewinfodata.size}</span>

</label>
<label htmlFor="">
<b>Date Createa: </b> <span>  {viewinfodata.created_time}</span>

</label>
<label htmlFor="">
<b>Modified at: </b> <span>  F {viewinfodata.modified_time}</span>

</label>
</div>
</>}
</div>
</div>



</div>

</div>

</div>

            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

</>
)

}