import Swal from "sweetalert2";

export const swalFire =(_res:any,title:string="Register",text:string="SomeThing went Wrong",icons:any="error")=>{
    Swal.fire(title,text,icons)
}
export const localStore =(key:any)=>{
    const keyStrigyfy = JSON.stringify(key)
    localStorage.setItem("userTypes",keyStrigyfy)
}
export const localTokenStore =(key:any,token:any)=>{
    const keyStrigyfy = JSON.stringify(token)
    localStorage.setItem(key,keyStrigyfy)
}