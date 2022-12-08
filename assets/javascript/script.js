//importing a token to get access to the private wordpress posts
// import { getToken } from "./api.js";




// changing projects sections

//get the sections
var case1 = document.querySelector('.case1-sec');
var case2 = document.querySelector('.case2-sec');
var case3 = document.querySelector('.case3-sec');

// get the current value of their display property
var case1Display = case1.style.display;
var case2Display = case2.style.display;
var case3Display = case3.style.display;

function showCase1() {
  case1Display == 'block';
  case2Display == 'none';
  case3Display == 'none';
};

function showCase2() {
  case1Display == 'none';
  case2Display == 'block';
  case3Display == 'none';
};

function showCase3() {
  case1Display == 'none';
  case2Display == 'none';
  case3Display == 'block';
};
