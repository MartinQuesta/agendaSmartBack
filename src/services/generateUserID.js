function cleanMail(email){
    let newStr = email.replace(/@/g, '');
    newStr = newStr.replace(/\./g, '');
    console.log('After character removed: ', newStr);
    return newStr;
  }
  
  export default{
    cleanMail
  }