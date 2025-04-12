import{c as j,j as e,d as u,r as k,u as N,aI as c,L as f,aJ as v,aK as x,aL as i}from"./index-By-XJuhX.js";const w=j(e.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"}),"LockRounded"),A=({category:g})=>{var n,o;const{hasMore:m,page:s,loading:l,data:d,currentPage:a,totalPages:C}=u(t=>t.quiz);k.useEffect(()=>{r(c(g))},[]);const r=N(),h=t=>{r(v()),r(c(t.target.value)),x()},b=()=>{a==s-1||a==s?x():r(i(a+1))},p=()=>{a!=1&&r(i(a-1))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex flex-col w-full h-full overflow-scroll custom-scrollbar dark:bg-gray-800 dark:text-gray-50 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border",children:[e.jsxs("table",{className:"w-full overflow-x-scroll text-left table-auto min-w-max",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"p-4 border-b border-slate-200 dark:bg-gray-800 dark:text-gray-50 bg-orange-50",children:e.jsx("p",{className:"text-sm font-normal leading-none dark:text-gray-50 text-gray-700",children:"Title"})}),e.jsx("th",{className:"p-4 border-b border-slate-200 dark:bg-gray-800 dark:text-gray-50 bg-orange-50",children:e.jsx("p",{className:"text-sm font-normal leading-none dark:text-gray-50 text-gray-700",children:"Difficulty"})}),e.jsx("th",{className:"p-4 border-b border-slate-200 dark:bg-gray-800 dark:text-gray-50 bg-orange-50",children:e.jsx("p",{className:"text-sm font-normal leading-none dark:text-gray-50 text-gray-700",children:"Duration"})}),e.jsx("th",{className:"p-4 border-b border-slate-200 dark:bg-gray-800 dark:text-gray-50 bg-orange-50",children:e.jsxs("select",{onChange:h,className:"text-sm bg-transparent font-normal leading-none dark:text-gray-50 text-gray-700",children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"Aptitude",children:"Aptitude"}),e.jsx("option",{value:"Core",children:"Core"}),e.jsx("option",{value:"Miscellaneous",children:"Misc."})]})}),e.jsx("th",{className:"p-4 border-b border-slate-200 dark:bg-gray-800 dark:text-gray-50 bg-orange-50",children:e.jsx("p",{className:"text-sm font-normal leading-none dark:text-gray-50 text-slate-500",children:"Attempt"})})]})}),l&&e.jsx(e.Fragment,{children:"Loading ..."}),!l&&e.jsx("tbody",{children:(n=d[a])==null?void 0:n.map((t,y)=>e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"hover dark:bg-gray-800 dark:text-gray-50 hover:bg-slate-50 border-b border-slate-200",children:[e.jsx("td",{className:"p-4 py-5",children:e.jsx("p",{className:"block font-semibold text-sm dark:text-gray-50 text-slate-800",children:t.title})}),e.jsx("td",{className:"p-4 py-5",children:e.jsx("p",{className:"text-sm dark:text-gray-50 text-slate-500",children:t.difficulty})}),e.jsx("td",{className:"p-4 py-5",children:e.jsx("p",{className:"text-sm dark:text-gray-50 text-slate-500",children:t.duration+" min"})}),e.jsx("td",{className:"p-4 py-5",children:e.jsx("p",{className:"text-sm dark:text-gray-50 text-slate-500",children:t.category})}),e.jsx("td",{className:"p-4 py-5",children:t.isSubmitted?e.jsx("p",{className:"text-sm dark:text-gray-50 text-green-500",children:"Submitted"}):t.isAvailable?e.jsx(e.Fragment,{children:e.jsx(f,{className:"text-sm dark:text-gray-50 text-blue-500",to:`/user/solution/${t._id}`,children:"Attempt"})}):e.jsx(e.Fragment,{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-sm dark:text-gray-50 text-slate-500"}),e.jsx(w,{color:"inherit"})]})})})]},y)}))})]}),e.jsxs("div",{className:"flex justify-between items-center px-4 py-3",children:[e.jsxs("div",{className:"text-sm dark:text-gray-50 text-slate-500",children:["Showing ",e.jsxs("b",{children:["1-",(o=d[a])==null?void 0:o.length]})]}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{onClick:p,disabled:a==1,className:"px-3 py-1 min-w-9 min-h-9 text-sm font-normal dark:text-gray-50 text-slate-500 bg-white border border-slate-200 rounded hover dark:bg-gray-800 dark:text-gray-50:bg-slate-50 hover:border-slate-400 transition duration-200 ease",children:"Prev"}),e.jsx("button",{disabled:!m&&a==s-1,onClick:b,className:"px-3 py-1 min-w-9 min-h-9 text-sm font-normal dark:text-gray-50 text-slate-500 bg-white border border-slate-200 rounded hover dark:bg-gray-800 dark:text-gray-50:bg-slate-50 hover:border-slate-400 transition duration-200 ease",children:"Next"})]})]})]})})};export{A as default};
