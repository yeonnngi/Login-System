import userList from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
const body = document.querySelector('body');
const userName = document.getElementById('user_name');
const userTel = document.getElementById('user_tel');
const findIdBtn = document.querySelector('.findId_Btn');

findIdBtn.addEventListener('click', checkInfo)

//for(let j=1; j<16; j++){
for (let i = 0; i < userList.length; i++) {
  function checkInfo() {
    const successBg = document.getElementById('success_bg')
    const successBox = document.getElementById('success_box')
    const successChkBtn = document.getElementById('successChkBtn')

    if (userName[0].value === userList[i].value || userTel[0].value === userList[i].value) {
      window.scrollTo(0, 0);
      body.style.overflow = 'hidden';
      successBg.style.display = 'block';
      successBox.style.display = 'block';

      successChkBtn.addEventListener('click', () => {
        successBg.style.display = 'none';
        successBox.style.display = 'none';
        body.style.overflow = 'visible';
        userName.value = "";
        userTel.value = "";
        userName.focus();
      }) //hide

    } //checkInfo
  }
}
});
//document.addEventListener('DOMContentLoaded', () => {


  /* const userA = {
    id: "green123",
    name: "유재석",
    tel: "01012345678"
  }

  const userB = {
    id: "blue123",
    name: "조세호",
    tel: "01055556666"
  }

  const userC = {
    id: "yellow123",
    name: "이영지",
    tel: "01011112222"
  }

  const userD = {
    id: "pink123",
    name: "박재범",
    tel: "01022223333"
  }

  const userE = {
    id: "white123",
    name: "홍진경",
    tel: "01099998888"
  } */

  //findIdBtn.addEventListener('click', checkInfo)
/* 
  function checkInfo() {
    const failBg = document.getElementById('fail_bg')
    const failBox = document.getElementById('fail_box')
    const failChkBtn = document.getElementById('failChkBtn')
    const foundId = document.getElementById('found_id')
    const successBg = document.getElementById('success_bg')
    const successBox = document.getElementById('success_box')
    const successChkBtn = document.getElementById('successChkBtn')

    if (userName.value === userA.value || userTel.value === userA.value) {
      window.scrollTo(0, 0);
      body.style.overflow = 'hidden';
      successBg.style.display = 'block';
      successBox.style.display = 'block';

      successChkBtn.addEventListener('click', () => {
        successBg.style.display = 'none';
        successBox.style.display = 'none';
        body.style.overflow = 'visible';
        userName.value = "";
        userTel.value = "";
        userName.focus();
      }) //hide

    } //checkInfo
 */
    /* 
          if (userName.value == userList.name.value && userTel.value == userList.tel.value) {
              for (let i = 0; i < userList.length; i++) {
                foundId[i].value = userList[i].value
              }
              body.style.overflow = 'hidden';
              successBg.style.display = 'block';
              successBox.style.display = 'block';
            }

            function finish() {
              successBg.style.display = 'none';
              successBox.style.display = 'none';
              body.style.overflow = 'visible';
              userName.value = "";
              userTel.value = "";
            } //finish

     */
    /* function moveLogin() {
      const fillNameBg = document.getElementById('fillName_bg');
      const fillNameBox = document.getElementById('fillName_box');
      const fillNameChk = document.getElementById('fillNameChk');
      const fillTelBg = document.getElementById('fillTel_bg');
      const fillTelBox = document.getElementById('fillTel_box');
      const fillTelChk = document.getElementById('fillTelChk');
      const successBg = document.getElementById('success_bg');
      const successBox = document.getElementById('success_box');
      const successBtn = document.getElementById('successBtn');
      const failBg = document.getElementById('fail_bg');
      const failBox = document.getElementById('fail_box');
      const failChkBtn = document.getElementById('failBtn');

      if (userName.value == '') {
        window.scrollTo(0, 0);
        body.style.overflow = 'hidden';
        fillNameBg.style.display = 'block';
        fillNameBox.style.display = 'block';

        fillIdChk.addEventListener('click', () => {
          fillNameBg.style.display = 'none';
          fillNameBox.style.display = 'none';
          body.style.overflow = 'visible';
          userName.focus();
        })
      } else if (userTel.value == '') {
        window.scrollTo(0, 0);
        body.style.overflow = 'hidden';
        fillTelBg.style.display = 'block';
        fillTelBox.style.display = 'block';

        fillPwChk.addEventListener('click', () => {
          fillTelBg.style.display = 'none';
          fillTelBox.style.display = 'none';
          body.style.overflow = 'visible';
          userTel.focus();
        })
      } else {
        window.scrollTo(0, 0);
        body.style.overflow = 'hidden';
        successBg.style.display = 'block';
        successBox.style.display = 'block';

        successChkBtn.addEventListener('click', () => {
          successBg.style.display = 'none';
          successBox.style.display = 'none';
          body.style.overflow = 'visible';
          location.href = './index.html';
        })
      }
    } */
  //};
