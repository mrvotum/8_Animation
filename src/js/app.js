import Popoper from './popoper.js';
import CallbackChat from './callbackChat.js';
import Likes from './likes.js';

const popoperHolder = document.querySelector('[data-holder_id=task_1]');
const popoper = new Popoper(popoperHolder);
// eslint-disable-next-line quotes
popoper.popoperContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium illum fuga, laborum corrupti velit, iste quam odio vitae pariatur nesciunt suscipit repudiandae! Explicabo beatae ducimus natus assumenda saepe autem?";
popoper.create();

const holderChat = document.querySelector('[data-holder_id=task_2]');
const callbackChat = new CallbackChat(holderChat);
callbackChat.create();

const holderLike = document.querySelector('[data-holder_id=task_3]');
const likes = new Likes(holderLike);
likes.create();
