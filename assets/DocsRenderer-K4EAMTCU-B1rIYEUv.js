function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-COxJNofV.js","assets/index-DH5ua8nC.js","assets/_commonjsHelpers-Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-ES4Qr1VP.js";import{R as e,r as c}from"./index-DH5ua8nC.js";import{r as l,u}from"./react-18-iZ4baTDS.js";import{C as h,A as E,H as d,D as x}from"./index-BjkSaM9X.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9uilScg.js";import"./index-UQvu9RDE.js";import"./index-oJaljHnC.js";import"./index-B_J8iUie.js";import"./index-C_Z9AZRm.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},S=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,i)=>{a(()=>import("./index-COxJNofV.js"),__vite__mapDeps([0,1,2])).then(({MDXProvider:p})=>l(e.createElement(D,{showException:i,key:Math.random()},e.createElement(p,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{S as DocsRenderer,_ as defaultComponents};
