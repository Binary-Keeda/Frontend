import{r as a,j as e,L as o,I as p,B as i,a as h}from"./index--Iq5HRU2.js";import{G as f}from"./GoogleLogo-0bFsoFwq.js";import{H as j}from"./Home-Bc5cyOH9.js";const l="bg-[#2f3134] text-xs ease-linear duration-100 hover:bg-[#3d4043] rounded-md w-[310px] text-gray-300 border-[rgb(214 218 227 / 4%)] p-4 font-medium ",v=()=>{const[c,x]=a.useState(),[d,r]=a.useState(),[m,n]=a.useState(!1),g=t=>{x(t.target.value)},u=async t=>{t.preventDefault(),n(!0);try{const s=await h.post(`${i}/api/auth/signup`,{email:c.toLowerCase()});r(s.data.message)}catch(s){r(s.response.data.message)}finally{n(!1)}};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"relative text-[#f1f1f1] flex justify-center items-center flex-col top-0 z-30 bg-[#1d1e20] h-screen w-screen",children:[e.jsx(o,{to:"/",children:e.jsx(p,{color:"inherit",sx:{position:"absolute",top:10,left:10},children:e.jsx(j,{})})}),e.jsx("div",{className:"mb-10  overflow-hidden  relative ",children:e.jsx("img",{src:"/assets/logo/A37A874D-8E55-4BCC-BDF4-EBFA65B2F790_1_201_a.jpeg",className:"h-14 rounded-md",alt:""})}),e.jsx("div",{children:e.jsxs("a",{href:`${i}/auth/google/`,className:`${l} flex text-xs gap-3 items-center mt-3 mb-2 justify-center `,children:[e.jsx(f,{}),"Continue with Google"]})}),e.jsxs("div",{className:"flex text-gray-300 items-center mt-2 gap-1",children:[e.jsx("hr",{className:"text-gray-300 bg-gray-300 w-[120px]"}),"or",e.jsx("hr",{className:"text-gray-300 bg-gray-300 w-[120px]"})]}),e.jsxs("form",{className:"max-w-screen-sm flex flex-col gap-3 items-center p-4 m-2 w-screen transition-all duration-500 ",children:[e.jsx("input",{required:!0,placeholder:"Enter Email",type:"text",className:`${l} backdrop-blur-xl`,name:"email",onChange:g,id:""}),e.jsx("p",{className:"text-gray-400 text-start w-[306px] text-xs",children:d}),e.jsx("button",{onClick:u,type:"submit",className:"bg-[#2f3134] flex justify-center ease-linear duration-100 hover:bg-[#3d4043] rounded-md w-[310px] text-gray-300 border-[rgb(214 218 227 / 4%)] p-4 font-medium text-xs",children:m?e.jsx("div",{className:"border-2 border-white border-t-transparent h-5 w-5 rounded-full animate-spin"}):"Submit"}),e.jsxs("span",{className:"text-xs text-gray-300",href:"#",children:["Already a user?"," ",e.jsx(o,{to:"/login",className:"underline",children:"Login"})]})]}),e.jsx("a",{className:"text-center text-gray-400 fixed bottom-10 px-5 text-xs hover:underline",href:"",children:"By continuing, you agree to Pragyanm Terms of Service and Privacy Policy."})]})})};export{v as default};
