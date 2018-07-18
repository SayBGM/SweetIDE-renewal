export const setCookie = function setCookie (name, value, days) {
  let expires = '';

  if (!!days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } 

  document.cookie = name + '=' + value + expires + ';';
}

export const getCookie = function getCookie (name) {
  let nameEQ = name + '='
  let ca = document.cookie.split(';');

  ca.map(c => {
    if (!!(c.indexOf(nameEQ) === -1)) return c.substring(nameEQ.length, c.length);
  });
  
  return '';
}